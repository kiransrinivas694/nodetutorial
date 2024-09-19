const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

//if there is no file..it will create..else it will overwrite the existing file
//if we use - options :  {flag : 'a'}... it will append it to the existing file if ifile exists
writeFileSync(
  "./content/result.txt",
  `Here is the result of the ${first} ${second}`
);
