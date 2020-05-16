/**
 * Importing the dependencies
 */
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
const express = require('express');
const { isDataExists } = require('../utils/utils');

const router = express.Router();
const user = require('../models/user-schema');

/**
 * Defining the user routes
 */
router.route('/signup').post((req, res) => {
  user.find({ emailId: req.body.emailId }, (err, data) => {
    if (err) {
      res.status(400).send({ error: err });
    } else if (isDataExists(data)) {
      res.status(400).send({ error: 'Email Id already exists' });
    } else {
      user.create(req.body, (error, userData) => {
        if (error) {
          res.status(400).send({ error });
        } else {
          res.json(userData);
        }
      });
    }
  });
});
