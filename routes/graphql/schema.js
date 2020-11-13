const { buildSchema } = require('graphql');

module.exports = buildSchema(`

  type ChartData {
    name: String
    projects: Int
  }

  type Query {
    data: [ChartData]
  }
  
  schema {
      query: Query
  }

`);