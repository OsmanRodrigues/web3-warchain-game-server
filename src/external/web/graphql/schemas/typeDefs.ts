export const typeDefs = `#graphql
  type Player {
    username: String
  }
  type Query {
    players: [Player]
  }
`
