const minimist = require('minimist');

const cli = minimist(process.argv);

module.exports = {
  getSrcFileFromCli: () => cli.src,
  getDestDirFromCli: () => cli.dest,
};
