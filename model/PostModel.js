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
        this.createCommentsModel();
    }
    PostModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            postId: String,
            userId: String,
            postType: Number,
            image: String,
            caption: String,
            paws: [String]
        }, { collection: 'posts' });
    };
    PostModel.prototype.createPostModel = function () {
        this.model = mongooseConnection.model("posts", this.schema);
    };
    PostModel.prototype.createCommentsModel = function () {
        this.commentModel = mongooseConnection.model("comments");
    };
    PostModel.prototype.retrieveAllPosts = function (response, session, isTesting) {
        var _this = this;
        console.log("retrieve all Posts ...");
        var query = this.model.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: 'userId',
                    as: 'userAndPost'
                }
            },
            {
                $lookup: {
                    from: 'comments',
                    localField: 'postId',
                    foreignField: 'postId',
                    as: 'postAndComment'
                }
            }
        ]);
        query.exec(function (err, itemArray) {
            //console.log(itemArray);
            var commentQuery = _this.commentModel.aggregate([
                {
                    $lookup: {
                        from: 'users',
                        localField: 'commenterId',
                        foreignField: 'userId',
                        as: 'commentAndUser'
                    }
                }
            ]);
            commentQuery.exec(function (err, commentUserInfoArray) {
                //console.log(err);
                //console.log(commentUserInfoArray);
                console.log(itemArray.length);
                for (var j = 0; j < itemArray.length; j++) {
                    var assignedComment = commentUserInfoArray.filter(_this.matchCommentWithPost, itemArray[j].postId);
                    //var commentAndUser = [];
                    if (assignedComment.length > 0) {
                        for (var i = 0; i < assignedComment.length; i++) {
                            //commentAndUser.push(assignedComment[i]);
                            itemArray[j].postAndComment[i].commentAndUser = assignedComment[i].commentAndUser[0];
                            //console.log(assignedComment[i].commentAndUser)
                        }
                    }
                    //itemArray[j].postAndComment.commentAndUser = commentAndUser;
                }
                // console.log(itemArray);
                var postsWithUserSessionInfo = {};
                if (isTesting == false) {
                    postsWithUserSessionInfo["userInfo"] = {
                        userId: session.userId,
                        userName: session.userName,
                        email: session.email
                    };
                }
                postsWithUserSessionInfo["posts"] = itemArray;
                console.log(postsWithUserSessionInfo);
                response.send(postsWithUserSessionInfo);
            });
        });
    };
    PostModel.prototype.matchCommentWithPost = function (comment) {
        return comment.postId == this;
    };
    PostModel.prototype.updatePost = function (postId, post, response) {
        console.log("Updating your Posts ...");
        var query = this.model.findOneAndUpdate(postId, post, {
            new: true
        });
        query.exec(function (err, item) {
            if (err) {
                console.log(err);
            }
            response.json(item);
        });
    };
    PostModel.prototype.retrieveOnePost = function (userId, postId, response) {
        console.log("retrieving a post6.4");
        var query = this.model.findOne({ userId: userId, postId: postId });
        query.exec(function (err, item) {
            if (err) {
                console.log("error while retrieving post");
                response.send("error");
            }
            else {
                response.send(item);
            }
        });
    };
    PostModel.prototype.updatePostPaw = function (postId, pawerId, response) {
        var _this = this;
        console.log("Updating Paw in post id number ..." + postId);
        var query = this.model.findOne({ postId: postId });
        query.exec(function (err, item) {
            if (err) {
                console.log("error while exec query");
                console.log(err);
            }
            console.log("no error, came here");
            var isPresent = item.paws.find(function (elem) { return elem == pawerId; });
            if (isPresent == undefined) {
                console.log("added paaw");
                item.paws.push(pawerId);
            }
            else {
                item.paws.forEach(function (elem, index) {
                    console.log(elem == pawerId);
                    if (elem == pawerId) {
                        console.log("removed paw");
                        item.paws.splice(index, 1);
                    }
                });
                console.log(item.paws.length);
            }
            var queryUpdatePaw = _this.model.findOneAndUpdate({ postId: postId }, item, {
                new: true
            });
            queryUpdatePaw.exec(function (err, itemUpdatePaw) {
                console.log("done updating paw");
                console.log(itemUpdatePaw);
                response.json(itemUpdatePaw);
            });
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
    PostModel.prototype.retrievePostsByUserId = function (userId, response) {
        console.log("retrieving a post by user Id");
        var query = this.model.find({ userId: userId });
        query.exec(function (err, item) {
            if (err) {
                console.log("error while retrieving user");
                response.send("error");
            }
            else {
                response.send(item);
            }
        });
    };
    return PostModel;
}());
exports.PostModel = PostModel;
