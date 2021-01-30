const ErrorHandler = require('./errorHandler');

module.exports = [
  ErrorHandler.invalidJSON,
  ErrorHandler.missingRequiredField,
  ErrorHandler.wrongFieldType,
  ErrorHandler.missingFieldFromData
];
