const typeDefs = `#graphql
type User {
  _id: ID!
  username: String!
}

type Candies {
  _id: ID!
  name: String!
  description: String!
  image: String
  price: Float!
  quantity: Int
}

type Auth {
  token: String!
  user: User!
}

type Query {
  users: [User!]!
  candies: [Candies!]!
}

type Mutation {
  createUser(username: String! password: String!): Auth
  login(username: String! password: String!): Auth
}`

module.exports = typeDefs;
