/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
const { ErrorResponse, ValidationResponse } = require('../response');
const validSubstring = require('../helper/validSubstring');

module.exports = class RuleValidator {
  /**
   * @static
   * @memberof ErrorHandler
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {function} next express next function
   * @returns {object} a response
   */
  static getDetails(req, res) {
    try {
      return res.status(200).json({
        message: 'My Rule-Validation API',
        status: 'success',
        data: {
          name: 'Chukwuemeka Olorondu',
          github: '@olorondu-emeka',
          email: 'oloronduchukwuemeka@gmail.com',
          mobile: '08100766771',
          twitter: '@olorondu_emeka'
        }
      });
    } catch (error) {
      return res
        .status(500)
        .json(ErrorResponse.genericError('internal server error'));
    }
  }

  /**
   * @static
   * @memberof ErrorHandler
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {function} next express next function
   * @returns {object} a response
   */
  static validateRule(req, res) {
    try {
      const { rule, data } = req.body;
      const { field, condition, condition_value } = rule;
      const type = Array.isArray(data) ? 'array' : typeof data;
      let value = null;
      let test = null;

      if (field.indexOf('.') !== -1 && type === 'object') {
        const dataObjectKeys = field.split('.');
        let currentLevel = { ...data };
        for (let i = 0; i < dataObjectKeys.length; i++) {
          currentLevel = currentLevel[dataObjectKeys[i]];
        }
        value = currentLevel;
      } else {
        value = data[field];
      }

      // validation
      switch (condition) {
      case 'eq':
        test = value === condition_value;
        break;
      case 'neq':
        test = value !== condition_value;
        break;
      case 'gt':
        test = value > condition_value;
        break;
      case 'gte':
        test = value >= condition_value;
        break;
      case 'contains':
        if (type === 'array') {
          test = value.includes(condition_value);
        } else {
          // valid substring
          test = validSubstring(value, condition_value);
        }
        break;
      default:
        test = false;
        break;
      } // end switch statement

      const validationData = {
        field,
        field_value: value,
        condition,
        condition_value
      };

      if (test) {
        return res
          .status(200)
          .json(
            ValidationResponse.getResponseObject('success', validationData)
          );
      }

      return res
        .status(400)
        .json(ValidationResponse.getResponseObject('error', validationData));
    } catch (error) {
      return res
        .status(500)
        .json(ErrorResponse.genericError('internal server error'));
    }
  }
};
