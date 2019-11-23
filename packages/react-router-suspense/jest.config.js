module.exports = {
  displayName: 'test',
  testPathIgnorePatterns: ['/node_modules/', './lib'],
  coverageReporters: ['lcov', 'html'],
  resetModules: false,
  reporters: ['default'],
  transform: {
    '^.+\\.tsx?$': ['babel-jest', { cwd: __dirname }],
  },
  moduleFileExtensions: ['ts', 'js', 'tsx'],
};
