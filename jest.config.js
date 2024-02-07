module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
    modulePathIgnorePatterns: ["node_modules", "jest-test-results.json"],
    transform: {
        "^.+\\.jsx?$": "babel-jest"
      },
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
}