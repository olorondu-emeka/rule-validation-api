const missingRule = {
  data: {
    name: 'John Smith',
    age: 40,
    email: 'johnsmith@example.com'
  }
};

const missingData = {
  rule: {
    field: 'age',
    condition: 'gte',
    condition_value: 30
  }
};

const missingRuleField = {
  rule: {
    condition: 'gte',
    condition_value: 30
  },
  data: {
    name: 'John Smith',
    age: 40,
    email: 'johnsmith@example.com'
  }
};

const missingRuleCondition = {
  rule: {
    field: 'age',
    condition_value: 30
  },
  data: {
    name: 'John Smith',
    age: 40,
    email: 'johnsmith@example.com'
  }
};

const missingRuleConditionValue = {
  rule: {
    field: 'age',
    condition: 'gte'
  },
  data: {
    name: 'John Smith',
    age: 40,
    email: 'johnsmith@example.com'
  }
};

module.exports = {
  missingRule,
  missingData,
  missingRuleField,
  missingRuleCondition,
  missingRuleConditionValue
};
