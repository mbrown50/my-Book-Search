// DONE - server.js: Implement the Apollo Server and apply it to the Express server as middleware. - done

const express = require('express'); // already below
// Import the ApolloServer class and expressMiddleware helper function
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers
});
