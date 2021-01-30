const wrongFieldType = {
  rule: {
    field: 'age',
    condition: 'gte',
    condition_value: 30
  },
  data: ['one', 'two']
};

module.exports = {
  wrongFieldType
};
