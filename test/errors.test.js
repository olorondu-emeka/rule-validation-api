const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src');
const missingRequiredField = require('./__mocks__/errorObjects/missingRequiredField');
const helperObjects = require('./__mocks__/errorObjects/helperObjects');

const { expect } = chai;
const {
  missingFromData1,
  missingFromData2,
  missingFromData3,
  missingFromData4,
  missingFromData5,
  wrongFieldTypeObject,
  wrongFieldTypeOthers
} = helperObjects;

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

  describe('Wrong field type', () => {
    it('should return a 400 error for a wrong field type (object)', async () => {
      const response = await chai
        .request(server)
        .post('/validate-rule')
        .send(wrongFieldTypeObject);

      expect(response).to.have.status(400);
      expect(response.body).to.have.property(
        'message',
        'data should be an object.'
      );
    });

    it('should return a 400 error for a wrong field type (others)', async () => {
      const response = await chai
        .request(server)
        .post('/validate-rule')
        .send(wrongFieldTypeOthers);

      expect(response).to.have.status(400);
      expect(response.body).to.have.property(
        'message',
        'data should be an array|string.'
      );
    });
  }); // end wrong field type describe block

  describe('Missing field from data', () => {
    it('should return a 400 error for a missing field from data object', async () => {
      const response1 = await chai
        .request(server)
        .post('/validate-rule')
        .send(missingFromData1);
      const response2 = await chai
        .request(server)
        .post('/validate-rule')
        .send(missingFromData2);
      const response3 = await chai
        .request(server)
        .post('/validate-rule')
        .send(missingFromData3);
      const response4 = await chai
        .request(server)
        .post('/validate-rule')
        .send(missingFromData4);
      const response5 = await chai
        .request(server)
        .post('/validate-rule')
        .send(missingFromData5);

      expect(response1).to.have.status(400);
      expect(response2).to.have.status(400);
      expect(response3).to.have.status(400);
      expect(response4).to.have.status(400);
      expect(response5).to.have.status(400);

      expect(response1.body).to.have.property(
        'message',
        'field summary is missing from data.'
      );
      expect(response2.body).to.have.property(
        'message',
        'field battle is missing from data.'
      );
      expect(response3.body).to.have.property(
        'message',
        'field email is missing from data.'
      );
      expect(response4.body).to.have.property(
        'message',
        'field 5 is missing from data.'
      );
      expect(response5.body).to.have.property(
        'message',
        'field 7 is missing from data.'
      );
    });
  });
});
