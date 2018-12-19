const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");

let app = express();
//  backend routes
app.use("/docs", serveStatic(__dirname + "/docs"));
app.use(
  "/test-report",
  serveStatic(__dirname + "/test/unit/coverage/lcov-report")
);
app.use("/", serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 5001;
app.listen(port);

console.log("server started " + port);
