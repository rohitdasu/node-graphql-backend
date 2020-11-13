/**
 * express framework import
 */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");

var { graphqlHTTP } = require('express-graphql');
const graphqlResolver = require('./routes/graphql/resolver');
const graphqlSchema = require('./routes/graphql/schema')
/**
 * routes import
 */

/**
 * port number is initialised
 */
const port = 3000 || process.env.PORT;

/**
 * using bodyparser middleware to have json type values in this app
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlResolver,
  graphiql: true,
}));

/**
 * setting routes
 */

/**
 * root api
 */
app.get("/", (req, res) => {
  res.send("this is root api");
});

/**
 * server starting at the port number
 */
app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});
