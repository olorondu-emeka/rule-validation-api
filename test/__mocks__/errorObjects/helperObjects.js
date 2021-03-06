const missingFromData1 = {
  rule: {
    field: 'missions.count.summary',
    condition: 'gte',
    condition_value: 30
  },
  data: {
    name: 'James Holden',
    crew: 'Rocinante',
    age: 34,
    position: 'Captain',
    missions: {
      count: {
        succeeded: 12,
        failed: 30
      },
      successful: 44,
      failed: 1
    }
  }
};

const missingFromData2 = {
  rule: {
    field: 'missions.battle',
    condition: 'gte',
    condition_value: 30
  },
  data: {
    name: 'James Holden',
    crew: 'Rocinante',
    age: 34,
    position: 'Captain',
    missions: {
      successful: 44,
      failed: 1
    }
  }
};

const missingFromData3 = {
  rule: {
    field: 'email',
    condition: 'gte',
    condition_value: 30
  },
  data: {
    name: 'James Holden',
    crew: 'Rocinante',
    age: 34,
    position: 'Captain',
    missions: {
      successful: 44,
      failed: 1
    }
  }
};

const missingFromData4 = {
  rule: {
    field: '5',
    condition: 'gte',
    condition_value: 30
  },
  data: ['hi', 'hello']
};

const missingFromData5 = {
  rule: {
    field: '7',
    condition: 'gte',
    condition_value: 30
  },
  data: 'hello'
};

const wrongFieldTypeObject = {
  rule: {
    field: 'address.state',
    condition: 'gte',
    condition_value: 30
  },
  data: ['one', 'two']
};

const wrongFieldTypeOthers = {
  rule: {
    field: 'age',
    condition: 'gte',
    condition_value: 30
  },
  data: 12
};

module.exports = {
  missingFromData1,
  missingFromData2,
  missingFromData3,
  missingFromData4,
  missingFromData5,
  wrongFieldTypeObject,
  wrongFieldTypeOthers
};
