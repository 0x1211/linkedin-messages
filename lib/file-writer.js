const { getDestDirFromCli } = require('./wrappers/minimist.wrapper');
const { writeStreamTo } = require('./wrappers/fs.wrapper');

function streamWriteMessages(messagesMap) {
  messagesMap.forEach((value, key) => {
    const writeStream = writeStreamTo(`${getDestDirFromCli()}/${key}.txt`)
      .on('error', (err) => console.error(err))
      .on('finish', () => console.info('DONE'));

    value.forEach((msg) => {
      writeStream.write(`${msg.DATE} - ${msg.FROM}\n\t${msg.CONTENT}\n`);
    });
  });
}

module.exports = {
  streamWriteMessages,
};
