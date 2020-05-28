/**
 * Importing the dependencies
 */
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const SERVER_CONSTANTS = require('./server.constants');

/**
 * Using the router function from express
 */
const router = express.Router();

router.use(SERVER_CONSTANTS.ROUTES.USER, userRoutes);

/**
 * Exporting the router to be used in other files
 */
module.exports = router;
