"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var PostModel = /** @class */ (function () {
    function PostModel() {
        this.createSchema();
        this.createPostModel();
    }
    PostModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            postId: String,
            userId: String,
            postType: Number,
            image: String,
            caption: String,
            paws: [Number],
            comments: [Number]
        }, { collection: 'posts' });
    };
    PostModel.prototype.createPostModel = function () {
        this.model = mongooseConnection.model("posts", this.schema);
    };
    PostModel.prototype.retrieveAllPosts = function (response) {
        console.log("retrieve all Posts ...");
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    PostModel.prototype.retrievePostCount = function (response) {
        console.log("retrieve Post Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numOfPosts) {
            console.log("numberOfPosts: " + numOfPosts);
            response.json(numOfPosts);
        });
    };
    return PostModel;
}());
exports.PostModel = PostModel;
