/**
 * Importing the dependencies
 */
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const { isDataExists } = require('../utils/utils');
const SERVER_CONSTANTS = require('../server.constants');
const middleware = require('../middlewares/auth.middleware');

const router = express.Router();
const User = require('../models/user-schema');

const { checkToken } = middleware;

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
                  id: userData._id
                },
                cookieExpiryTime: SERVER_CONSTANTS.TOKEN_EXPIRY_TIME
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
                  id: userData._id
                },
                cookieExpiryTime: SERVER_CONSTANTS.TOKEN_EXPIRY_TIME
              });
            }
          }
        );
      }
    });
  });
});

router
  .route('/get-expense-details')
  .get(checkToken, ({ query: { id } }, res) => {
    User.findById(id, async (err, { expenseList }, next) => {
      if (err) {
        next(err);
      } else {
        await res.json({ expenseList });
      }
    });
  });

router
  .route('/add-expense')
  .put(checkToken, ({ body: { id, expense: { name, value } } }, res) => {
    User.findByIdAndUpdate(
      id,
      { $push: { expenseList: { name, value } } },
      { upsert: true },
      async (error, data, next) => {
        if (error) {
          next(error);
        } else {
          await res.json({ message: 'Expense added successfully' });
        }
      }
    );
  });

module.exports = router;
