export const typeDefs = `#graphql
  type Player {
    username: String
  }
  type Success {
    info: String
  }
  type Error {
    error: String
  }
  union MutationResult = Success | Error
  type Query {
    players: [Player]
  }
  type Mutation {
    createPlayer(username: String!, password: String!): MutationResult!
    authPlayer(username: String!, password: String!): MutationResult!
    removePlayer(username: String!): MutationResult!
  }
`
