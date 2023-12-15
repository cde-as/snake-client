//const net = require("net");
const connect = require('./client');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') { // letters, numbers, symbols but not arrow keys
    process.exit(); // Ctrl+C to exit
  }
  console.log(`You pressed the button: ${key}`);

};

connect();
setupInput();

