const Dropbox = require('dropbox'),
      config = require('../../../config/dropbox.config.js'),
      Promise = require('bluebird'),
      fs = Promise.promisifyAll(require('fs')),
      prompt = require('prompt-promise'),
      path = require('path');

var dbx = new Dropbox({ accessToken: config.ACCESS_TOKEN });
// get links
module.exports = {
  getLinks: (path) => {
    path = path || '';
    return dbx.filesListFolder({path: path});
  },
  upload: () => {
    var promises;
    var directory;
    prompt('directory: ')
    .then(dir => {
      directory = dir;
      return fs.readdirAsync(directory);
    })
    .then(files => {
        // paths contains an array of FileList
      var promises = files.map(file => {
        return fs.readFileAsync(`${directory}/${file}`)
        .then(image => dbx.filesUpload({ path: `/${file}`, contents: image }));
      });

      Promise.all(promises)
      .then(results => console.log('all results: ', results))
      .catch(error => console.log('error', error));
    })
    .catch(error => console.log('error', error));

  },
  download: (filePath) => {
    return dbx.filesGetThumbnail({
      path: filePath,
      size: 'w640h480'
    });
  },
  delete: (filePath) => {
    return dbx.filesDelete({path: filePath});
  }
};
