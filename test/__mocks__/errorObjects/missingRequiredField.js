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

module.exports = { missingRule, missingData };
