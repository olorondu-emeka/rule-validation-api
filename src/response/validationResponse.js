/* eslint-disable camelcase */

/**
 * @class ValidationResponse
 */
module.exports = class ValidationResponse {
  /**
   *
   * @param {string} status the status (success or error)
   * @param {object} validationData validation data object
   * @returns {object} a validation response object
   */
  static getResponseObject(status, validationData) {
    const {
      field, field_value, condition, condition_value
    } = validationData;
    const successMessage = `field ${field} successfully validated.`;
    const errorMessage = `field ${field} failed validation.`;

    const error = status !== 'success';
    const message = status === 'success' ? successMessage : errorMessage;
    return {
      message,
      status,
      data: {
        validation: {
          error,
          field,
          field_value,
          condition,
          condition_value
        }
      }
    };
  }
};
