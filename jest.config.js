module.exports = {
    moduleFileExtensions: [
        "ts",
        "js"
    ],
    rootDir: "./",
    testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(js|ts)$",
    transform: {
        "^.+\\.(t|j)s$": "ts-jest"
    },
    testEnvironment: "node"
};
