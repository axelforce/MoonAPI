const winston = require('winston');

module.exports = {
  logInfo(message) {
    const logger = winston.createLogger({
      level: 'info',
      format: winston.format.simple(),
    });
    logger.info(message);
  },
};
