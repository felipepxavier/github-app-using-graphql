const options = {
  testEnvironment: 'node',
  verbose: true,
  collectCoverageFrom: ['**/*.js'],
  coveragePathIgnorePatterns: ['coverage/*', 'jest.config.js'],
};

module.exports = options;
