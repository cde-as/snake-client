const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT,// PORT number here,
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
  
  return conn;
};

module.exports = {connect};