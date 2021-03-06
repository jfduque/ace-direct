const log4js = require('log4js'); // https://www.npmjs.com/package/log4js
const nconf = require('nconf');
const { getConfigVal } = require('./utility');

const cfile = '../dat/config.json'; // Config file
nconf.argv().env();
nconf.file({ file: cfile });

const logname = 'server-db';
log4js.configure({
  appenders: {
    server_db: {
      type: 'dateFile',
      filename: `logs/${logname}.log`,
      alwaysIncludePattern: false,
      maxLogSize: 20480,
      backups: 10
    }
  },
  categories: {
    default: {
      appenders: ['server_db'],
      level: 'error'
    }
  }
});

const debugLevel = getConfigVal('common:debug_level');

const logger = log4js.getLogger('server_db');
logger.level = debugLevel; // log level hierarchy: ALL TRACE DEBUG INFO WARN ERROR FATAL OFF

module.exports = logger;
