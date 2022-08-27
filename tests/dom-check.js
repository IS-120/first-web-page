const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");

const html = fs.readFileSync("./index.html", "utf8");
module.exports.dom = new JSDOM(html);
