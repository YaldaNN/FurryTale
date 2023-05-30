import Mongoose = require("mongoose");

interface ICommentModel extends Mongoose.Document {
    commentId : String,
    postId: String,
    commenterId: String,
    comment: String,
    dateTime: String
}
export {ICommentModel};