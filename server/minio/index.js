const Minio = require('minio');
const config = require('../../config.js');


const s3Client = new Minio.Client({
  endpoint: 's3.amazonaws.com',
  accessKey: config.AWS_ACCESS_KEY,
  secretKey: config.AWS_SECRET_ACCESS_KEY,
  secure: true
})

module.exports = s3Client;