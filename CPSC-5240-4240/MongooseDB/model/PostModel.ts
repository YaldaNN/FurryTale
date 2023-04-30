import Mongoose = require("mongoose");
import {Schema, Types} from "mongoose";
import {DataAccess} from './../DataAccess';
import {IPostModel} from '../interfaces/IPostModel';
import { CommentModel } from "./CommentModel";

import { type } from "os";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class PostModel {
    public schema:any;
    public model:any;
    
    public constructor() {
        this.createSchema();
        this.createPostModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                postId : String,
                userId : String,
                postType : Number,
                image : String,
                caption: String,
                paws : [Number],
                comments: [Number]
            }, {collection: 'posts'}
        );
    }

    public createPostModel(): void {
        this.model = mongooseConnection.model<IPostModel>("posts", this.schema);
    }

    public retrieveAllPosts(response:any): any {
        console.log("retrieve all Posts ...");
        
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public retrievePostCount(response:any): any {
        console.log("retrieve Post Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numOfPosts) => {
            console.log("numberOfPosts: " + numOfPosts);
            response.json(numOfPosts) ;
        });
    }

}
export {PostModel};