"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var CommentModel = /** @class */ (function () {
    function CommentModel() {
        this.createSchema();
        this.createCommentModel();
    }
    CommentModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            commentId: String,
            postId: String,
            commenterId: String,
            comment: String,
            dateTime: String
        }, { collection: 'comments' });
    };
    CommentModel.prototype.createCommentModel = function () {
        this.model = mongooseConnection.model("comments", this.schema);
    };
    CommentModel.prototype.retrieveAllComments = function (response) {
        console.log("retrieve all comments ...");
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    CommentModel.prototype.retrieveCommentCount = function (response) {
        console.log("retrieve Comment Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numOfComments) {
            console.log("numberOfComments: " + numOfComments);
            response.json(numOfComments);
        });
    };
    return CommentModel;
}());
exports.CommentModel = CommentModel;
