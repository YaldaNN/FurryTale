"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var AchievementModel = /** @class */ (function () {
    function AchievementModel() {
        this.createSchema();
        this.createAchievementModel();
    }
    AchievementModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            achievementId: String,
            userId: String,
            achievementType: Number,
            achievementDetail: String
        }, { collection: 'achievements' });
    };
    AchievementModel.prototype.createAchievementModel = function () {
        this.model = mongooseConnection.model("achievement", this.schema);
    };
    AchievementModel.prototype.retrieveAllAchievement = function (response) {
        console.log("retrieve all Achievement ...");
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    AchievementModel.prototype.retrieveAchievementCount = function (response) {
        console.log("retrieve Achievement Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numOfAchievement) {
            console.log("numberOfAchievement: " + numOfAchievement);
            response.json(numOfAchievement);
        });
    };
    return AchievementModel;
}());
exports.AchievementModel = AchievementModel;
