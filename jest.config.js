module.exports = {
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|scss)$":
      "<rootDir>/fileMock.js",
    },
    testPathIgnorePatterns: ["<rootDir>/node_modules/"],
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
    },
    transformIgnorePatterns: ["node_modules/(?!swiper|ssr-window|dom7).*/"]
};