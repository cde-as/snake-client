const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log();
  });

  conn.on("data", (data) => {
    //
    console.log(data);
  });
  /*  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Connected");
  }); */
  return conn;
};

console.log("Connecting ...");


connect();