const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src');

const { successObject, errorObject } = require('./__mocks__/responses');

const { expect } = chai;

chai.use(chaiHttp);

describe('Validation responses', () => {
  it('should return a response of 200 for successful validation', async () => {
    const response = await chai
      .request(server)
      .post('/validate-rule')
      .send(successObject);

    expect(response).to.have.status(200);
    expect(response.body).to.have.property(
      'message',
      'field missions.count successfully validated.'
    );
    expect(response.body.data).to.have.property('validation');
    expect(response.body.data.validation).to.have.property('error', false);
  });

  it('should return a response of 400 for failed validation', async () => {
    const response = await chai
      .request(server)
      .post('/validate-rule')
      .send(errorObject);

    expect(response).to.have.status(400);
    expect(response.body).to.have.property(
      'message',
      'field 0 failed validation.'
    );
    expect(response.body.data).to.have.property('validation');
    expect(response.body.data.validation).to.have.property('error', true);
  });
});
