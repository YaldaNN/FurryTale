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
                paws : [String]
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

    public updatePost(postId: String, post:any, response:any): any {
        console.log("Updating your Posts ...");
        
        var query = this.model.findOneAndUpdate(postId, post, {
            new: true
          });
        query.exec( (err, item) => {
            if(err){
                console.log(err);
            }
            response.json(item) ;
        });
    }

    public updatePostPaw(postId: String, pawerId : String, response:any): any {
        console.log("Updating Paw in post id number ..."+postId);
       
        var query = this.model.findOne({postId: postId});
        query.exec( (err, item) => {
            if(err){
                console.log("error while exec query");
                console.log(err);
            }
            
            console.log("no error, came here");
            var isPresent = item.paws.find(elem => elem == pawerId)
            if(isPresent == undefined){
                
                item.paws.push(pawerId);

            }
            else{
                
                item.paws.forEach( (elem, index) => {
                    console.log(elem == pawerId)
                    if(elem == pawerId){
                    console.log("entered")
                     item.paws.splice(index,1);
                    }
                  });
                console.log(item.paws.length)
            }
            
            var queryUpdatePaw = this.model.findOneAndUpdate(postId, item, {
                new: true
              });

              queryUpdatePaw.exec( (err, itemUpdatePaw) => {
                response.json(itemUpdatePaw) ;
            });
            
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