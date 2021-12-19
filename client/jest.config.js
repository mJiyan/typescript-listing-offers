module.exports = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts'],
  setupFilesAfterEnv: ['./__test__/setup/setupTest.js'],
  //Defines how the files should be transformed. In our case all .ts and .tsx files should be transformed with “ts-jest”
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
