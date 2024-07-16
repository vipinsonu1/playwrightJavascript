//import {winston} from "winston"
//const winston = require('winston');
const winston = require('winston');

class Logger {
    static options = {
        level: 'debug',
        transports: [
            new winston.transports.Console({
                level: 'debug',
                format: winston.format.simple(),
            }),
            new winston.transports.File({
                filename: 'logs/error.log',
                level: 'debug',
                maxsize: 5242880, // 5MB
                maxFiles: 5,
                format: winston.format.json(),
            }),
        ],
    };

    static logger = winston.createLogger(Logger.options);

    static info(message) {
        this.logger.info(message);
    }

    static warn(message) {
        this.logger.warn(message);
    }

    static error(message) {
        this.logger.error(message);
    }

    static debug(message) {
        this.logger.debug(message);
    }
}

// Example usage
//Logger.info('Hello world');
//Logger.warn('warning');
module.exports = Logger;