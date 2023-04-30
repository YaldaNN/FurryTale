"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express = require("express");
var bodyParser = require("body-parser");
var AccountModel_1 = require("./model/AccountModel");
var PostModel_1 = require("./model/PostModel");
var crypto = require("crypto");
var CommentModel_1 = require("./model/CommentModel");
var AchievementModel_1 = require("./model/AchievementModel");
var VerificationBadgeModel_1 = require("./model/VerificationBadgeModel");
var UserModel_1 = require("./model/UserModel");
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
        this.VerificationBadge = new VerificationBadgeModel_1.VerificationBadgeModel();
        this.Post = new PostModel_1.PostModel();
        this.User = new UserModel_1.UserModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    // ACCOUNT
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
        // COMMENT
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
        // ACHIEVEMENT
        router.get('/achievement/', function (req, res) {
            console.log("Better your achievment worth it!");
            _this.Achievement.retrieveAllAchievement(res);
        });
        router.post('/achievement/', function (req, res) {
            var achievementId = crypto.randomBytes(16).toString("hex");
            var userId = crypto.randomBytes(16).toString("hex");
            var jsonObj = req.body;
            jsonObj.achievementId = achievementId;
            jsonObj.userId = userId;
            _this.Achievement.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send('{"Achievement Id is":"' + achievementId + '"}');
        });
        //VERIFICATION BADGE
        router.get('/verificationBadge/', function (req, res) {
            console.log("Here is your verification badge docs!");
            _this.VerificationBadge.retrieveAllVerificationBadge(res);
        });
        router.post('/verificationBadge/', function (req, res) {
            var verificationBadgeId = crypto.randomBytes(16).toString("hex");
            var userId = crypto.randomBytes(16).toString("hex");
            var jsonObj = req.body;
            jsonObj.verificationBadgeId = verificationBadgeId;
            jsonObj.userId = userId;
            _this.VerificationBadge.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send('{"Verification Badge Id is":"' + verificationBadgeId + '"}');
        });
        //POST
        router.get('/posts/', function (req, res) {
            console.log("Here are your posts");
            _this.Post.retrieveAllPosts(res);
        });
        //USER
        router.get('/users/', function (req, res) {
            console.log("Here are users");
            _this.User.retrieveAllUsers(res);
        });
        router.post('/users/', function (req, res) {
            var accountId = crypto.randomBytes(16).toString("hex");
            var userId = crypto.randomBytes(16).toString("hex");
            var jsonObj = req.body;
            jsonObj.accountId = accountId;
            jsonObj.userId = userId;
            _this.User.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send('{"User Id is":"' + userId + '"}');
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
