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

const wrongFieldTypeOthers = {
  rule: {
    field: 'age',
    condition: 'gte',
    condition_value: 30
  },
  data: ['one', 'two']
};

module.exports = {
  missingFromData1,
  missingFromData2,
  missingFromData3,
  wrongFieldTypeOthers
};
