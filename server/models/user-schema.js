/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/**
 * Importing the dependencies
 */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;
const SALT_WORK_FACTOR = 10;

/**
 * Defining the user schema
 */
const UserSchema = new Schema({
  name: {
    type: String
  },
  emailId: {
    type: String
  },
  password: {
    type: String
  },
  expenseList: {
    type: Array
  }
});

UserSchema.pre('save', function(next) {
  const user = this;
  /**
   * only hash the password if it has been modified (or is new)
   */
  if (!user.isModified('password')) return next();

  /**
   * hash the password using our new salt
   */
  bcrypt.hash(user.password, SALT_WORK_FACTOR, function(error, hash) {
    if (error) return next(error);

    /**
     * override the cleartext password with the hashed one
     */
    user.password = hash;
    next();
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('users', UserSchema);
