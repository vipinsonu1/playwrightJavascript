const fs = require('fs');
const path = require('path');
const { allure } = require('allure-playwright');

async function globalTeardown() {
  const logFilePath = path.resolve(__dirname, 'logs/error.log');
  if (fs.existsSync(logFilePath)) {
    allure.attachment('Test Log', fs.readFileSync(logFilePath), 'text/plain');
  }
}

module.exports = globalTeardown;