"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationBadgeModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var VerificationBadgeModel = /** @class */ (function () {
    function VerificationBadgeModel() {
        this.createSchema();
        this.createVerificationBadgeModel();
    }
    VerificationBadgeModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            userId: String,
            verificationBadgeId: String,
            businessEIN: String,
            dateOfVerification: String,
            signature: String
        }, { collection: 'verificationBadge' });
    };
    VerificationBadgeModel.prototype.createVerificationBadgeModel = function () {
        this.model = mongooseConnection.model("verificationBadge", this.schema);
    };
    VerificationBadgeModel.prototype.retrieveAllVerificationBadge = function (response) {
        console.log("retrieve all list ...");
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    VerificationBadgeModel.prototype.retrieveVerificationBadgeCount = function (response) {
        console.log("retrieve Verification Badge Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numOfVerificationBadge) {
            console.log("numberOfVerificationBadges: " + numOfVerificationBadge);
            response.json(numOfVerificationBadge);
        });
    };
    return VerificationBadgeModel;
}());
exports.VerificationBadgeModel = VerificationBadgeModel;
