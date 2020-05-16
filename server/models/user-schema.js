/**
 * Importing the dependencies
 */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;
const SERVER_CONSTANTS = require('../server.constants');

/**
 * Defining the user schema
 */
const UserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  expenseList: {
    type: Array
  }
});

UserSchema.pre('save', next => {
  const user = this;
  /**
   * only hash the password if it has been modified (or is new)
   */
  if (!user.isModified('password')) return next();

  /**
   * generate a salt
   */
  bcrypt.genSalt(SERVER_CONSTANTS.SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);
    /**
     * hash the password using our new salt
     */
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);

      /**
       * override the cleartext password with the hashed one
       */
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = (candidatePassword, cb) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('users', UserSchema);
