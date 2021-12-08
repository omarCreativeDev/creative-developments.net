// jest.config.js
module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  moduleNameMapper: {
    "^@core/(.*)": "<rootDir>/src/app/core/$1",
    "^@env/(.*)": "<rootDir>/src/environments/$1",
    "^@features/(.*)": "<rootDir>/src/app/features/$1",
    "^@shared/(.*)": "<rootDir>/src/app/shared/$1"
  },
};
