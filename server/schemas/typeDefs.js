const typeDefs = `#graphql
type User {
  _id: ID!
  username: String!
}

type Auth {
  token: String!
  user: User!
}

type Query {
  users: [User!]!
}

type Mutation {
  createUser(username: String! password: String!): Auth
}`

module.exports = typeDefs;
// do not define password