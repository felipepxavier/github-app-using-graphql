const options = {
  testEnvironment: 'node',
  verbose: true,
  collectCoverageFrom: ['**/*.js', '!services/**'],
  coveragePathIgnorePatterns: ['coverage/*', 'jest.config.js'],
};

module.exports = options;
