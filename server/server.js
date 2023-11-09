const express = require('express');
const { ApolloServer } = require('@apollo/server');
const mongoose = require('mongoose');
const connectDB = require('./config/connection');
// import schema and resolvers here when done. 

const app = express();

// Creates ApolloServer with type definitions and resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// Connect to the MongoDB database
connectDB()
  .then(() => {
    // Applies Apollo Server middleware to the Express app
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

