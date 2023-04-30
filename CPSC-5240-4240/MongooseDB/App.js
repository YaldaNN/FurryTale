"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express = require("express");
var bodyParser = require("body-parser");
var AccountModel_1 = require("./model/AccountModel");
var crypto = require("crypto");
var CommentModel_1 = require("./model/CommentModel");
var AchievementModel_1 = require("./model/AchievementModel");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.Account = new AccountModel_1.AccountModel();
        this.Comment = new CommentModel_1.CommentModel();
        this.Achievement = new AchievementModel_1.AchievementModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.get('/account/', function (req, res) {
            console.log("why?");
            _this.Account.retrieveAllAccounts(res);
        });
        router.post('/account/', function (req, res) {
            var accountId = crypto.randomBytes(16).toString("hex");
            var userId = crypto.randomBytes(16).toString("hex");
            var jsonObj = req.body;
            jsonObj.accountId = accountId;
            jsonObj.userId = userId;
            _this.Account.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send('{"Account Id is":"' + accountId + '"}');
        });
        router.get('/comment/', function (req, res) {
            console.log("Your stupid comments!");
            _this.Comment.retrieveAllComments(res);
        });
        router.post('/comment/', function (req, res) {
            var commentId = crypto.randomBytes(16).toString("hex");
            var jsonObj = req.body;
            jsonObj.commentId = commentId;
            _this.Comment.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send('{"Comment Id is":"' + commentId + '"}');
        });
        router.get('/achievement/', function (req, res) {
            console.log("Better your achievment worth it!");
            _this.Achievement.retrieveAllAchievement(res);
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
