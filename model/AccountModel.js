"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var AccountModel = /** @class */ (function () {
    function AccountModel() {
        this.createSchema();
        this.createAccountModel();
    }
    AccountModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            accountId: String,
            userId: String,
            accountType: Number,
            payment: Number
        }, { collection: 'accounts' });
    };
    AccountModel.prototype.createAccountModel = function () {
        this.model = mongooseConnection.model("accounts", this.schema);
    };
    AccountModel.prototype.retrieveAllAccounts = function (response) {
        console.log("retrieve all list ...");
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    AccountModel.prototype.updateAccountType = function (account, response) {
        console.log("updating account type info");
        var query = this.model.findOneAndUpdate({ accountId: account.accountId }, { $set: { accountType: account.accountType } }, { new: true });
        query.exec(function (err, item) {
            if (err) {
                console.log("Update Account type failed");
                response.send(err);
            }
            else {
                console.log("Updated account type successfully");
                response.send(item);
            }
        });
    };
    AccountModel.prototype.getAccountDetailUsingAccountId = function (accountId, response) {
        console.log("retrieving a account details");
        var query = this.model.findOne({ accountId: accountId });
        query.exec(function (err, item) {
            if (err) {
                console.log("error while retrieving account details");
                response.send("error");
            }
            else {
                console.log("get account details successfully");
                response.send(item);
            }
        });
    };
    AccountModel.prototype.getOneUserAccount = function (userId, response) {
        console.log("retrieving a account type for current user");
        var query = this.model.findOne({ userId: userId });
        query.exec(function (err, item) {
            if (err) {
                console.log("error while retrieving user's account type");
                response.send("error");
            }
            else {
                response.send(item);
            }
        });
    };
    AccountModel.prototype.retrieveAccountCount = function (response) {
        console.log("retrieve Account Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numOfAccounts) {
            console.log("numberOfAccounts: " + numOfAccounts);
            response.json(numOfAccounts);
        });
    };
    AccountModel.prototype.retrieveOneAccount = function (userId, res) {
        var query = this.model.findOne({ userId: userId });
        query.exec(function (err, item) {
            if (err) {
                console.log("error retrieving account type");
                res.send("error retrieving account type");
            }
            res.send(item.accountType.toString());
        });
    };
    return AccountModel;
}());
exports.AccountModel = AccountModel;
