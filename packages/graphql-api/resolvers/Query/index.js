/* istanbul ignore file */
const user = require('./user');
const userRepositories = require('./userRepositories');

module.exports = {
  ...user,
  ...userRepositories,
};
