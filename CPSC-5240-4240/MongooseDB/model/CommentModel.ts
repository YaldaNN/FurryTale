import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {ICommentModel} from '../interfaces/ICommentModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class CommentModel {
    public schema:any;
    public model:any;

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

    public retrieveCommentCount(response:any): any {
        console.log("retrieve Comment Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numOfComments) => {
            console.log("numberOfComments: " + numOfComments);
            response.json(numOfComments) ;
        });
    }

}
export {CommentModel};