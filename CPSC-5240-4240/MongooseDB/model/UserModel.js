"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var UserModel = /** @class */ (function () {
    function UserModel() {
        this.createSchema();
        this.createUserModel();
    }
    UserModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            userId: String,
            userName: String,
            userPassword: String,
            accountId: String,
            tailers: [String],
            tailee: [String],
            about: String,
            achievement: [String],
            posts: [String],
            openToWork: Boolean,
            verified: Boolean,
            verificationBadgeId: String
        }, { collection: 'users' });
    };
    UserModel.prototype.createUserModel = function () {
        this.model = mongooseConnection.model("users", this.schema);
    };
    UserModel.prototype.retrieveAllUsers = function (response) {
        console.log("retrieve all users ...");
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    UserModel.prototype.updateUser = function (user, response) {
        console.log("updating user info");
        var query = this.model.findOneAndUpdate(user.userId, user, {
            new: true
        });
        query.exec(function (err, item) {
            if (err) {
                console.log("Update user failed");
            }
            else {
                console.log("Updated user");
                response.send(item);
            }
        });
    };
    UserModel.prototype.addTailer = function (tailerId, taileeId, response) {
        var _this = this;
        var queryToGetTailer = this.model.findOne({ userId: tailerId });
        var queryToGetTailee = this.model.findOne({ userId: taileeId });
        queryToGetTailee.exec(function (err, tailee) {
            if (err) {
                console.log("Failed to get tailee");
            }
            else {
                console.log("step 1. tailee id is " + taileeId);
                console.log("Adding tailer to tailee");
                tailee.tailers.push(tailerId);
                console.log(tailee);
                var updateTailyQuery = _this.model.findOneAndUpdate({ userId: taileeId }, tailee, {
                    new: true
                });
                updateTailyQuery.exec(function (err, updatedTailee) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("step 2");
                    console.log("Updated tailee");
                    console.log(updatedTailee);
                });
            }
        });
        queryToGetTailer.exec(function (err, tailer) {
            if (err) {
                console.log("Failer to add tailer");
            }
            else {
                console.log("step 3");
                console.log("Addid tailee to tailer");
                tailer.tailee.push(taileeId);
                var updateTailerQuery = _this.model.findOneAndUpdate({ userId: tailerId }, tailer, {
                    new: true
                });
                updateTailerQuery.exec(function (err, updatedTailer) {
                    console.log("step 4");
                    console.log("Updated tailer");
                });
                response.send("done updating tailer and tailee!");
            }
        });
    };
    UserModel.prototype.retrieveUserCount = function (response) {
        console.log("retrieve User Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numOfUsers) {
            console.log("numberOfUsers: " + numOfUsers);
            response.json(numOfUsers);
        });
    };
    return UserModel;
}());
exports.UserModel = UserModel;
