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
  // When client presses Ctrl+C (SIGINT) to exit node
  process.on("SIGINT", () => {
    console.log("bye bye");
    process.exit();
  });

  if (key === 'w') { // letters, numbers, symbols but not arrow keys
    console.log("Move: up");
  }

  if (key && key.name === "c" && key.ctrl) {
    console.log("bye bye");
    process.exit();
  }

  console.log(`You pressed the button: ${key}`);

};


module.exports = {setupInput};