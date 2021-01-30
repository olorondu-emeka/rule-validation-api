module.exports = class RuleValidator {
  /**
   * @static
   * @memberof ErrorHandler
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {function} next express next function
   * @returns {object} a response
   */
  static validateRule(req, res) {
    return res.status(200).json({ message: 'hi' });
  }
};
