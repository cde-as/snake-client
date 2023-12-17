let connection;

const setupInput = (conn) => {
  connection = conn;
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
    connection.write("Move: up"); // Use connection object to send movement commands to the server
  }
  if (key === 'a') {
    console.log("Move: left");
    connection.write("Move: left");
  }
  if (key === 's') {
    console.log("Move: down");
    connection.write("Move: down");
  }
  if (key === 'd') {
    console.log("Move: right");
    connection.write("Move: right");
  }
  if (key === '1') { //SPECIAL KEYS #1
    console.log("Sssssslaayy");
  }
  if (key === '2') { //SPECIAL KEYS #2
    console.log("That's  sss-spectacular!");
  }

  if (key === '\u0003') {
    console.log("exiting");
    process.exit(); // Ctrl+C to exit
  }
 
  //console.log(`You pressed the button: ${key}`);

};


module.exports = {setupInput};