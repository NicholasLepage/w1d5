var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var message2 = "Hello " + chalk.bgGreen.bold.blue("World");
console.log(message2);