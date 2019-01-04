/* eslint-disable no-console */

const fs = require("fs");
const moment = require("moment");

const lines = fs.readFileSync("./data/in.txt", { encoding: "utf8" });
const options = lines.trim().split("\n");
const count = options.length;
const item = Math.floor(Math.random() * count);
const date = moment().format("YYYY-MM-DD HH:mm:ss");
let option = options[item];
option = option.replace(/,/gi, "-");
const response = `${date}, ${option}, TODO\n`;

fs.writeFileSync("./data/out.csv", response, { flag: "a" });
console.log(response);
