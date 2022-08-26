const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");

const data = fs.readFileSync("index.html", "utf8");

const dom = new JSDOM(data);

module.exports = dom;
