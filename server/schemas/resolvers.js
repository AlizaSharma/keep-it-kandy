const { User, Candies } = require("../models");
// const { signToken, AuthenticationError } = require('../utils/auth');

module.exports = {
  Query: {
    users: async () => {
      return User.find();
    },
    candies: async () => {
      return Candies.find();
    },
  },

  Mutation: {
    createUser: async (parent, { username, password }) => {
      const user = await User.create({ username, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError("No profile with this username found!");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }
      const token = signToken(user);
      return { token, user };
    },
  },
};

//mutations and typedefs must match

// read docs about Apollo v4. 

