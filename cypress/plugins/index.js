const fs = require("fs-extra");
const path = require("path");

function getCongByFile(file) {
  const pathToCongFile = path.resolve("cypress/", "config", `${file}.config.js`);
  return fs.readJson(pathToCongFile);
}

module.exports = (on, config) => {
  const file = config.env.configFile;
  return getCongByFile(file);
};
