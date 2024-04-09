// added schema folder

// TODO - work on code below.

// TODO - troubleshoot, add savedBooks to User
// savedBooks - TypeError: Invalid schema configuration: `model` is not a valid type within the array `savedBooks`.See https://bit.ly/mongoose-schematypes for a li

// add

const typeDefs = `
type User {
  _id: ID
  username: String
  email: String
  bookcount: Int
}

type Book {
  bookId: String
  description: String
  title: String
  image: String
  link: String
  authors: [] String
  
  Auth type: {
  token: String
  user: User
}

type Query {
  me: [User]
}

# Define which mutations the client is allowed to make
type Mutation {
  # Set the required fields for new schools
  login(email!, password!) : Auth
  addUser(username!, email!, password!) User
  #(Look into creating what's known as an input type to handle all of these parameters!)
  saveBook(authors, description, title, booId, image, link) User
  removeBook(bookId!): User
}

`;

module.exports = typeDefs;