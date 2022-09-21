const express = require("express");
const server = express();
server.use(express.static("./imagen"));
server.listen(80, () => {
  console.log("INICIAR SERVIDOR");
});