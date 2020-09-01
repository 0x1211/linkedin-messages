const parseCsv = require('./wrappers/csv-parser.wrapper');
const { getSrcFileFromCli } = require('./wrappers/minimist.wrapper');
const { readStreamFrom } = require('./wrappers/fs.wrapper');

const { sanitizeMessage, getMapFromMessages } = require('./messages');
const { streamWriteMessages } = require('./file-writer');

function readDataSource() {
  const src = getSrcFileFromCli();
  const messages = [];

  readStreamFrom(src)
    .on('open', () => console.info(`Reading ${src}`))
    .pipe(parseCsv())
    .on('data', (message) => {
      messages.push(sanitizeMessage(message));
    })
    .on('end', () => {
      streamWriteMessages(getMapFromMessages(messages));
      console.info(`Done parsing ${src}`);
    })
    .on('error', (err) => console.error(`Error reading ${src}:`, err));
}

module.exports = readDataSource;
