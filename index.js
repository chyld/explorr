/* eslint-disable no-console */

const fs = require("fs");
const moment = require("moment");
const request = require("request");

const lines = fs.readFileSync("./data/in.txt", { encoding: "utf8" });
const options = lines.trim().split("\n");
const count = options.length;
const item = Math.floor(Math.random() * count);
const date = moment().format("YYYY-MM-DD HH:mm:ss");
const option = options[item];
const category = option.slice(0, 4);
const data = option.slice(5);
const row = [date, category, data, "TODO"];

const url =
  "https://script.google.com/macros/s/AKfycbypW3Gfla1vsrYHVDatXwpPy_IdRLg01hlShvneNum562dA3Hc/exec";

request.post(url, { body: { row }, json: true }, (err, response, body) => {
  console.log(row);
});
