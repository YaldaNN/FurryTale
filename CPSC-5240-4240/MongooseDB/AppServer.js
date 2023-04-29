"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
var server = new App_1.App().expressApp;
server.listen(8080);
