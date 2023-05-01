import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {ICommentModel} from '../interfaces/ICommentModel';
import {PostModel} from './PostModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class CommentModel {
    public schema:any;
    public model:any;
    public postModel:PostModel;
    public constructor() {
        this.createSchema();
        this.createCommentModel();
        
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                commentId : String,
                postId: String,
                commenterId: String,
                comment: String,
                dateTime: String
            }, {collection: 'comments'}
        );
    }

    public createCommentModel(): void {
        this.model = mongooseConnection.model<ICommentModel>("comments", this.schema);
    }

    public retrieveAllComments(response:any): any {
        console.log("retrieve all comments ...");
        
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public updateComment(commentInfo:any, response:any){
        console.log("updating comment");
        const commentId = commentInfo.commenterId;
        
        var query = this.model.findOneAndUpdate(commentId, commentInfo, {
            new: true
          });
          query.exec( (err, item) => {
            response.json(item) ;
        });
    }

}
export {CommentModel};