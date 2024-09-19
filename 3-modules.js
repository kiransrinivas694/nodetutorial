// Modules

// we split our code in modules

// CommonJs , evenry file is module (by default)
// Modules = Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavour");

require("./7-mind-grenade");

// addValues();
sayHi(names.vasuuu);
sayHi(names.sunnu);
sayHi(names.sandeep);
