const settings = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(test).ts'],
  moduleNameMapper: {
    '^@domain/(.*)$': '<rootDir>/src/domain/$1'
  }
};

const shouldCollectCoverage = process.argv.includes('--coverage');
if (shouldCollectCoverage) {
  settings.collectCoverage = true;
  settings.collectCoverageFrom = ['src/**/*.{.js,ts}', '!src/**/*.d.ts'];
  settings.coverageDirectory = 'coverage';
  settings.coverageReporters = ['lcov'];
}

module.exports = settings;
