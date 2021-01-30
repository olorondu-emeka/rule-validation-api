const successObject = {
  rule: {
    field: 'missions.count',
    condition: 'gte',
    condition_value: 30
  },
  data: {
    name: 'James Holden',
    crew: 'Rocinante',
    age: 34,
    position: 'Captain',
    missions: {
      count: 45,
      successful: 44,
      failed: 1
    }
  }
};

const successObject2 = {
  rule: {
    field: 'items.food',
    condition: 'contains',
    condition_value: 'rice'
  },
  data: {
    name: 'James Holden',
    crew: 'Rocinante',
    age: 34,
    position: 'Captain',
    items: {
      food: ['rice', 'beans']
    }
  }
};

const successObject3 = {
  rule: {
    field: 'name',
    condition: 'contains',
    condition_value: 'James'
  },
  data: {
    name: 'James Holden',
    crew: 'Rocinante',
    age: 34,
    position: 'Captain',
    items: {
      food: ['rice', 'beans']
    }
  }
};

const errorObject = {
  rule: {
    field: '0',
    condition: 'eq',
    condition_value: 'a'
  },
  data: 'damien-marley'
};

module.exports = {
  successObject, successObject2, successObject3, errorObject
};
