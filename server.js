const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// Using express middleware
app.use('/graphql', expressGraphQL({
  // flag for development only
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log("Listening on port 4000");
});