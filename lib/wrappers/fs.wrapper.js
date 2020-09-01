const fs = require('fs');

module.exports = {
  readStreamFrom: (file) => fs.createReadStream(file),
  writeStreamTo: (file) => fs.createWriteStream(file),
};
