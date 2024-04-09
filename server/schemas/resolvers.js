// TODO - resolvers.js: Define the query and mutation functionality to work with the Mongoose models.
// users mongoose to go get the class

/*
login: Accepts an email and password as parameters; returns an Auth type.
addUser: Accepts a username, email, and password as parameters; returns an Auth type.
saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)
removeBook: Accepts a book's bookId as a parameter; returns a User type.
*/

const { User } = require('../models');

const resolvers = {
  Query: {
    me: async () => {
      return await User.find();
    }
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      // Create and return the new School object
      return await Auth.create(
        {token: password}
        {user, email },
        );
    },
    addUser: async (parent, { username, email, password }) => {
      // Create and return the new School object
      return await User.create(
        { username: username },
        { email: email },
        { }
      );
    },
    saveBook: async (parent, { authors, description, title, bookId, image, link }) => {
      // Create and return the new School object
      return await Book.findOneAndUpdate(
        { bookId: bookId },
        { descripion, description },
        { title: title },
        { image, image },
        { link: link },
        { authors: authors },
        // Return the newly updated object instead of the original
        { new: true }
      )
    },
    removeBook: async (parent, { bookId }) => {
      // Create and return the new School object
      return await // ??
    }
  }
};

/*
# Set the required fields for new schools
login(email!, password!) : Auth
addUser(username!, email!, password!) Auth
#(Look into creating what's known as an input type to handle all of these parameters!)
saveBook(authors, description, title, booId, image, link) User
removeBook(bookId!): User
*/

module.exports = resolvers;
