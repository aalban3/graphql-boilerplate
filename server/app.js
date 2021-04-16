const express = require("express");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();
const schema = require("./schema/schema");
const mongoose = require("mongoose");

// MONGODB SERVER //
mongoose.connect(process.env.MONGODB_URI || 'mongodb:Alan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Connected to MLab database");
});

// EXPRESS SERVER //
const app = express();

// using graphiql to test the queries on the backend
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

module.exports = app;
