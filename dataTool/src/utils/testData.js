const testData = {
  foodList: {
    'abcd-123': {
      category: 'Beans',
      gi: 35,
      id: 'abcd-123',
      name: 'Kidney Beans',
      sources: {},
    },
    'efgh-456': {
      category: 'Bread',
      gi: 68,
      id: 'efgh-456',
      name: 'White Bread',
      sources: {
        havard: 'havard-white-bread',
      },
    },
  },
  dataSources: {
    havard: {
      name: 'havard',
      title: 'Havard',
      data: {
        'havard-white-bread': {
          gi: 65,
          id: 'havard-white-bread',
          name: 'White Bread',
        },
      },
    },
    mendosa: {
      name: 'mendosa',
      title: 'Mendosa',
      data: {
        'mendosa-white-bread': {
          gi: 77,
          id: 'mendosa-white-bread',
          name: 'White Bread',
        },
      },
    },
  },
  foodId: 'mendosa-white-bread',
  sourceName: 'mendosa',
}

export default testData
