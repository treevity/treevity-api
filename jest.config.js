module.exports = {
    moduleFileExtensions: [
        "ts",
        "js"
    ],
    moduleNameMapper: {
        "^@root/(.*)$": "<rootDir>/$1",
        "^@modules/(.*)$": "<rootDir>/src/modules/$1"
    },
    rootDir: "./",
    testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(js|ts)$",
    transform: {
        "^.+\\.(t|j)s$": "ts-jest"
    },
    testEnvironment: "node"
};
