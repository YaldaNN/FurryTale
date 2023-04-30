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
