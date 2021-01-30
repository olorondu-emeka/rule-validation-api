const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src');
const missingRequiredField = require('./__mocks__/errorObjects/missingRequiredField');

const { expect } = chai;
const {
  missingRule,
  missingData,
  missingRuleField,
  missingRuleCondition,
  missingRuleConditionValue
} = missingRequiredField;

chai.use(chaiHttp);

describe('Error Tests', () => {
  describe('Missing required fields', () => {
    it('should throw a 400 error for a missing rule object', async () => {
      const response = await chai
        .request(server)
        .post('/validate-rule')
        .send({ missingRule });

      expect(response).to.have.status(400);
      expect(response.body).to.have.property('message', 'rule is required.');
    });

    it('should throw a 400 error for a missing data object', async () => {
      const response = await chai
        .request(server)
        .post('/validate-rule')
        .send(missingData);

      expect(response).to.have.status(400);
      expect(response.body).to.have.property('message', 'data is required.');
    });

    it('should throw a 400 error for a missing field property in rule object', async () => {
      const response = await chai
        .request(server)
        .post('/validate-rule')
        .send(missingRuleField);

      expect(response).to.have.status(400);
      expect(response.body).to.have.property('message', 'field is required.');
    });

    it('should throw a 400 error for a missing condition property in rule object', async () => {
      const response = await chai
        .request(server)
        .post('/validate-rule')
        .send(missingRuleCondition);

      expect(response).to.have.status(400);
      expect(response.body).to.have.property(
        'message',
        'condition is required.'
      );
    });

    it('should throw a 400 error for a missing condition_value property in rule object', async () => {
      const response = await chai
        .request(server)
        .post('/validate-rule')
        .send(missingRuleConditionValue);

      expect(response).to.have.status(400);
      expect(response.body).to.have.property(
        'message',
        'condition_value is required.'
      );
    });
  }); // end missing required. fields describe block
});
