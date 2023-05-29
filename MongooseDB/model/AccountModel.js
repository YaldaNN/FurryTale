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
        var query = this.model.findOneAndUpdate({ accountId: account.accountId }, account, {
            new: true
        });
        query.exec(function (err, item) {
            response.send(item);
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
    return AccountModel;
}());
exports.AccountModel = AccountModel;
