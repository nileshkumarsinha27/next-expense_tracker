const isDataExists = (data, num = 0) => data && data.length > num;
const checkEmptyString = str => str === '';
module.exports = {
  isDataExists,
  checkEmptyString
};
