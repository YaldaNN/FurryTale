import Mongoose = require("mongoose");
import { CommentModel } from "../model/CommentModel";
import { ICommentModel } from "./ICommentModel";

interface IPostModel extends Mongoose.Document {
    postId : String,
    userId : String,
    postType : Number,
    image : String,
    caption: String,
    paws : [String]
}
export {IPostModel};