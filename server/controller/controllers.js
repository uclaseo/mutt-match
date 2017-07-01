const Table = require('../models/tableModels');
const envVals = require('../../config.js');  
const AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = 'us-west-1';
AWS.config.accessKeyId = envVals.AWS_ACCESS_KEY;
AWS.config.secretAccessKey = envVals.AWS_SECRET_ACCESS_KEY;
const Minio = require('minio');

// AWS.config.update({
//   accessKeyId: config.AWS_ACCESS_KEY,
//   secretAccessKey: config.AWS_SECRET_KEY,
//   signatureVersion: 'v',
//   region: 'us-west-1'
// });

module.exports = {

  findAllDogsCtrl: function(req, res) {
    Table.Dog.findAll()
    .then(dogs => res.send(dogs))
    .catch(error => res.sendStatus(500, error))
  },

  findOneDogCtrl: function(req, res) {
    Table.Dog.findOne({ where: {id: req.params.id }})
    .then(dog => res.send(dog))
    .catch(error => res.sendStatus(500, error));
  },
  
  findAllUsersCtrl: function(req, res) {
    Table.User.findAll()
      .then(user => res.send(user))
      .catch(error => res.send(error))
  },

  findOneUserCtrl: function(req, res) {
    Table.User.findOne({ where: { id: req.params.id } })
      .then(user => res.send(user))
      .catch(error => res.send(error));
  },

  findOrCreateUserCtrl: function(req, res) {
    console.log('req.body ' ,req.body)
    Table.User.findOrCreate({
        defaults: { shelterId: 1 }, 
        where: { email: req.body.email }
        //name: req.body.firstName + ' ' + req.body.lastName,
        // city: req.body.city,
        // zipcode: req.body.zipCode,
        // email: req.body.email,
        // active: req.body.active,
        // grooming: req.body.grooming,
        // size: req.body.size,
        // noise: req.body.noise,
        // petExperience: req.body.petExperience,
        // children: req.body.children,
        // currentDogs: req.body.currentDogs,
        // currentPets: req.body.currentPets
      })
      .then(user => res.send(user))
      .catch(error => res.send(error));
  },

  updateUserCtrl: function(req, res) {
    console.log('req.body ' ,req.body)
    console.log('REQ ID: ' , req.params.id)
    Table.User.update(req.body, { where: { id: req.params.id } })
      .then(user => res.sendStatus(201, user))
      .catch(error => res.send(error));
  },

  deleteUserCtrl: function(req, res) {
    Table.User.destroy({ where: { id: req.params.id } })
      .then(user => res.sendStatus(200, user))
      .catch(error => res.send(error));
  },

  fetchUserByEmail: function(req, res) {
    Table.User.find({
      where: { email: req.params.email }
    })
      .then((user) => {
        res.json({
          results: user
        })
      })
      .catch((err) => {
        console.error('error retrieving user by email ', err);
      })
  },

findAllMatchesCtrl: function(req, res) {
  console.log('REQ PARAMS ID: ' , req.params.id)
    Table.User.findAll({
      where: { id: req.params.id },
      include: [{
        model: Table.Dog
      }]
    })
    .then((dogs) => {
      res.json({
        results: dogs
      })
    })
    .catch((err) => {
      console.error('error finding matches ', err);
    })
  },

  sendMessage: function(req, res) {
    Table.Message.create({
      message: req.body.message,
      userId: req.params.sender,
      toId: req.params.to
    })
      .then(message => {
        res.status(202).send(message);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  getAllMessages: function(req, res) {
    Table.Message.findAll({
      where: {toId: req.params.to},

      include: [
        {
          model: Table.User,
          as: 'to',
          attributes: ['name']
        },
        {
          model: Table.User,
          attributes: ['name']
        }
      ]
      // order: [[Sequelize.literal('"messages.message"'), 'DESC']]
    })
    .then(message => {
      res.status(200).send(message);
    })
    .catch(error => {
      res.status(404).send(error);
    })
  },

  addShelter: function(req, res) {
    Table.Shelter.create({
      name: req.body.name,
      address: req.body.address
    })
    .then((shelter) => {
      res.send(shelter);
      Table.Shelter.find({
        where: { name: req.body.name }
      })
      .then((shelter) => {
        let shelterId = shelter.dataValues.id;
        Table.User.update({
          shelterId: shelterId
        }, { where: { id: req.params.userId }})
      })
    })
    .then((shelter) => {
      console.log('successfully added shelter');
    })
    .catch((err) => {
      console.error('error adding shelter ', err);
    })
  },

  fetchShelter: function (req, res) {
    Table.Shelter.find({ where: { name: req.params.name }})
    .then((shelter) => {
      res.json({
        results: shelter
      })
    })
    .catch((err) => {
      console.error('error finding shelter ', err);
    })
  },

  addDog: function(req, res) {
    Table.Dog.create({
      name: req.body.name,
      age: req.body.age,
      breed: req.body.breed,
      imageLink: req.body.imageLink,
      active: req.body.active,
      grooming: req.body.grooming,
      size: req.body.size,
      noise: req.body.noise,
      experienceReq: req.body.experienceReq,
      childFriendly: req.body.childFriendly,
      dogFriendly: req.body.dogFriendly,
      petFriendly: req.body.petFriendly,
      shelterId: req.params.shelterId
    })
    .then(() => {
      res.status(201).send('successfully added a dog');
    })
    .catch((err) => {
      console.error('error adding dog to the database ', err);
    })
  },

  addUserDogMatch: function(req, res) {
    console.log(req.body)
    Table.User_Dog.create({
      score: req.body.score,
      userId: req.body.userId,
      dogId: req.body.dogId
    })
    .then(dogUser => res.send(dogUser))
    .catch(error => res.send(error));
  },

  getPresignedUrl: function(req, res) {

    console.log(envVals.AWS_ACCESS_KEY, envVals.AWS_SECRET_ACCESS_KEY)
   
// ---------------------------------
// now say you want fetch a URL for an object named `objectName`
    var s3 = new AWS.S3({
      signatureVersion: 'v4'
    });
    var s3_params = {
      Bucket: envVals.S3_BUCKET,
      Key: req.params.file,
      Expires: 250,

    };
    s3.getSignedUrl('putObject', s3_params, function (err, signedUrl) {
      // send signedUrl back to client
      if(err) console.log(err);
      console.log(signedUrl);
      res.send(signedUrl);
      // [...]
    });



    // var file = req.params.file;
    // var s3Client = new Minio.Client({
    //   endpoint: 's3.amazonaws.com',
    //   accessKey: config.AWS_ACCESS_KEY,
    //   secretKey: config.AWS_SECRET_ACCESS_KEY,
    //   secure: true
    // })
    // console.log('is this runnign');
    // var presignedUrl = s3Client.presignedPutObject('mutt-match', file, 1000, function (e, presignedUrl) {
    //   if (e) return console.log(e)
    //   console.log(presignedUrl);
    // })

  }
};

