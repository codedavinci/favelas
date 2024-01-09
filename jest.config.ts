module.exports = {
  testEnvironment: "node",
  preset: "ts-jest",
  collectCoverageFrom: ["src/**/*.ts"],
  esModuleInterop: true,
  roots: ["<rootDir>/src"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
