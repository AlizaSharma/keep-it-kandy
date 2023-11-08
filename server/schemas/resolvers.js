const { User } = require('../models')

module.exports = { Query: {
async users() {
  // create logic to find users. 
}
},
Mutation: {
async createUser(parent, { username, password }) {
  //create logic for creating user here
}
},
}

// set up utils / token

//mutations and typedefs must match

// read doc about v4. 