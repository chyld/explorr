/* eslint-disable no-console */

const fs = require("fs");
const moment = require("moment");

const lines = fs.readFileSync("./data.txt", { encoding: "utf8" });
const options = lines.trim().split("\n");
const count = options.length;
const item = Math.floor(Math.random() * count);
const date = moment().format("YYYY-MM-DD HH:mm:ss");
const option = options[item];
const response = `${date} >> ${option}\n\nRecord upon completion.`;

console.log(response);
