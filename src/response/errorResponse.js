const commonFields = {
  status: 'error',
  data: 'null'
};

/**
 * @class ErrorResponse
 */
module.exports = class ErrorResponse {
  /**
   *@static
   * @param {string} field the missing field
   * @returns {object} a response object
   */
  static missingRequiredField(field) {
    const message = `${field} is required.`;
    return {
      message,
      ...commonFields
    };
  }

  /**
   * @static
   * @param {string} field input field
   * @param {string} type input field type
   * @returns {object} a response object
   */
  static wrongFieldType(field, type) {
    const indefiniteArticle = type === 'string' ? 'a' : 'an';
    const message = `${field} should be ${indefiniteArticle} ${type}.`;
    return {
      message,
      ...commonFields
    };
  }

  /**
   * @static
   * @returns {object} a response object
   */
  static invalidJSON() {
    const message = 'invalid JSON payload passed.';
    return {
      message,
      ...commonFields
    };
  }

  /**
   * @static
   * @param {string} field missing field from data
   * @returns {object} a response object
   */
  static missingFieldFromData(field) {
    const message = `field ${field} is missing from data.`;
    return {
      message,
      ...commonFields
    };
  }

  /**
   * @static
   * @returns {object} a response object
   */
  static internalServerError() {
    return {
      message: 'internal server error.',
      ...commonFields
    };
  }
};
