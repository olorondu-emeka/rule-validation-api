/* eslint-disable no-console */

const express = require('express');
const cors = require('cors');
const RuleValidator = require('./controller/ruleValidator');
const errorHandler = require('./middleware');

const app = express();

app.use(express.json());
app.use(cors());

// app.post('/test1', Controller.printMessage);
app.post('/validate-rule', ...errorHandler, RuleValidator.validateRule);

app.use('*', (request, response) => {
  response.status(404).send({ message: 'Not Found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
