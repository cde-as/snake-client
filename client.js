const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
  });

  conn.on("data", (data) => {
    //
    console.log(data);
  });
  
  conn.write("Name: CDE ");
  
  /* setInterval(() => {
    conn.write("Move: up");
  }, 50);

  setTimeout(() => {
    conn.write("Move: right");
  }, 50); */

  return conn;
};

module.exports = {connect};