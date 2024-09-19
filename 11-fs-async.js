const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }

  console.log(result);

  const first = result;

  // need to check y...opika leka raayaledhu
  //   readFile("./content/second.txt", "utf8", (error, re));
});

console.log("hey its printing");
