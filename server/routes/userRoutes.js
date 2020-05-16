/**
 * Importing the dependencies
 */
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const { isDataExists } = require('../utils/utils');
const SERVER_CONSTANTS = require('../server.constants');

const router = express.Router();
const User = require('../models/user-schema');

/**
 * Defining the user routes
 */
router.route('/signup').post(({ body: { name, emailId, password } }, res) => {
  User.find({ emailId }, (err, data) => {
    if (err) {
      res.status(400).send({ error: err });
    } else if (isDataExists(data)) {
      res.status(400).send({ error: 'Email Id already exists' });
    } else {
      const newUser = new User({
        name,
        emailId,
        password
      });
      newUser.save().then(userData => {
        const payload = {
          id: userData._id,
          name: userData.name,
          emailId: userData.emailId
        };
        jwt.sign(
          payload,
          process.env.SECRET_JWT_KEY,
          {
            expiresIn: SERVER_CONSTANTS.TOKEN_EXPIRY_TIME
          },
          (error, token) => {
            if (error) {
              res.status(403).send({ error });
            } else {
              res.json({
                success: true,
                token: `Bearer ${token}`,
                user: {
                  name: userData.name,
                  emailId: userData.emailId,
                  expenseList: userData.expenseList,
                  id: userData._id
                }
              });
            }
          }
        );
      });
    }
  });
});

router.route('/login').post(({ body: { emailId, password } }, res) => {
  User.findOne({ emailId }).then(userData => {
    userData.comparePassword(password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const payload = {
          id: userData._id,
          name: userData.name,
          emailId: userData.emailId
        };
        jwt.sign(
          payload,
          process.env.SECRET_JWT_KEY,
          {
            expiresIn: SERVER_CONSTANTS.TOKEN_EXPIRY_TIME
          },
          (error, token) => {
            if (err) {
              res.status(403).send({ error });
            } else {
              res.json({
                success: true,
                token: `Bearer ${token}`,
                user: {
                  name: userData.name,
                  emailId: userData.emailId,
                  expenseList: userData.expenseList,
                  id: userData._id
                }
              });
            }
          }
        );
      }
    });
  });
});

module.exports = router;
