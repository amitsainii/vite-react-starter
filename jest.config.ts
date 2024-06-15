export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
};
