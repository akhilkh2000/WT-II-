const fs = require("fs");
const utils = require("../note/utils.js");

const sum = utils.sum(3, 2);
console.log(sum);

fs.writeFileSync("notes.txt", "this was created by node.js!");
