const ErrorResponse = require('../response/errorResponse');

/**
 * @class ErrorHandler
 */
module.exports = class ErrorHandler {
  /**
   * @static
   * @memberof ErrorHandler
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {function} next express next function
   * @returns {object} a response
   */
  static invalidJSON(req, res, next) {
    try {
      JSON.stringify(req.body);
      next();
    } catch (error) {
      return res.status(400).json(ErrorResponse.invalidJSON());
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
  static missingRequiredField(req, res, next) {
    try {
      const allowedConditions = ['gt', 'gte', 'eq', 'neq', 'contains'];

      // 1. check for rule field
      if (!req.body.rule) {
        return res.status(400).json(ErrorResponse.missingRequiredField('rule'));
      }
      // 2. check for data field
      if (!req.body.data) {
        return res.status(400).json(ErrorResponse.missingRequiredField('data'));
      }
      // 3. check rule field for: field, condition & condition_value
      const { rule } = req.body;
      const testForObject = typeof rule === 'object' && !Array.isArray(rule);
      if (!testForObject) {
        return res
          .status(400)
          .json(ErrorResponse.wrongFieldType('rule', 'object'));
      }

      if (!rule.field) {
        return res
          .status(400)
          .json(ErrorResponse.missingRequiredField('field'));
      }
      if (!rule.condition) {
        return res
          .status(400)
          .json(ErrorResponse.missingRequiredField('condition'));
      }
      if (!rule.condition_value) {
        return res
          .status(400)
          .json(ErrorResponse.missingRequiredField('condition_value'));
      }

      if (!allowedConditions.includes(rule.condition)) {
        return res
          .status(400)
          .json(
            ErrorResponse.genericError(
              'condition must be: gt, gte, eq, neq, contains'
            )
          );
      }

      // validation has passed
      next();
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
  static wrongFieldType(req, res, next) {
    try {
      const { rule, data } = req.body;
      const { field } = rule;
      const allowedTypes = ['string', 'object', 'array'];
      const type = Array.isArray(data) ? 'array' : typeof data;

      // validate data
      if (field.indexOf('.') !== -1 && type !== 'object') {
        return res
          .status(400)
          .json(ErrorResponse.wrongFieldType('data', 'object'));
      }

      if (!allowedTypes.includes(type)) {
        return res
          .status(400)
          .json(ErrorResponse.wrongFieldType('data', 'string|array|object'));
      }

      // passed validation
      next();
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
  static missingFieldFromData(req, res, next) {
    try {
      const { rule, data } = req.body;
      if (!data[rule.field]) {
        return res
          .status(400)
          .json(ErrorResponse.missingFieldFromData(`${rule.field}`));
      }

      // passed validation
      next();
    } catch (error) {
      return res
        .status(500)
        .json(ErrorResponse.genericError('internal server error'));
    }
  }
};
