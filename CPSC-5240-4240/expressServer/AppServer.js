"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
var port = 8080;
var server = new App_1.App().express;
server.listen(port);
console.log("server running in port " + port);
