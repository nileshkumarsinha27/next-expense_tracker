/* eslint-disable no-console */
/**
 * Importing the dependencies
 */
const express = require('express');
const next = require('next');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRouter = require('./router');
const ROUTES = require('../routes.constants');
const database = require('./database/database');
/**
 * Defining the variables
 */
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

/**
 * Preparing the application
 */
app.prepare().then(() => {
  /**
   * Create the express server
   */
  const server = express();
  /**
   * Connect to the mongoDB database
   */
  mongoose.connect(
    database.dbSource,
    {
      useNewUrlParser: true
    }
  );
  /**
   * Facilitating the use of body parser to parse request body
   */
  server.use(bodyParser.json());
  server.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  /**
   * Handling the CORS related issues
   */
  server.use(cors());
  /**
   * Telling the server to use the database schemas if the route contains /api
   */
  server.use(ROUTES.API_ROUTES, apiRouter);
  /**
   * Rendering the client side routes
   */
  server.get(ROUTES.HOME, (req, res) =>
    app.render(req, res, ROUTES.HOME, req.query)
  );
  server.get(ROUTES.EXPENSES, (req, res) =>
    app.render(req, res, ROUTES.EXPENSES, req.query)
  );
  server.all(ROUTES.ALL, (req, res) => handle(req, res));
  /**
   * Starting the server on the port specified
   */
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
