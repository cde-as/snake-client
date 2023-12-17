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
  if (key === 'w') {
    console.log("Move: up");
  }
  if (key === 'a') {
    console.log("Move: left");
  }
  if (key === 's') {
    console.log("Move: down");
  }
  if (key === 'd') {
    console.log("Move: right");
  }
  if (key === '\u0003') {
    console.log("exiting");
    process.exit(); // Ctrl+C to exit
  }
 
  //console.log(`You pressed the button: ${key}`);

};


module.exports = {setupInput};