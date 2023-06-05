import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IAchievementModel} from '../interfaces/IAchievementModel';
import * as crypto from 'crypto';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class AchievementModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createAchievementModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
               achievementId : String,
               userId : String,
               achievementType : Number,
               achievementDetail : String
            }, 
            {
                collection: 'achievements',
                versionKey: false // to disable the versionKey
            },
        );
    }

    public createAchievementModel(): void {
        this.model = mongooseConnection.model<IAchievementModel>("achievement", this.schema);
    }

    public createNewAchievement(req: any, resp: any) {
        const achievementId = crypto.randomBytes(16).toString("hex");
        req.achievementId = achievementId;
        console.log("creating achievement with id:", achievementId);

        var query = this.model.create([req], (err) => {
            if (err) {
                console.log('achievement creation failed');
                resp.send(err);
            }
            else {
                console.log("Achievement created")
                resp.send(achievementId);
            }
        }); 
    }

    public retrieveAllAchievement(response:any): any {
        console.log("retrieve all Achievement ...");
        
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public retrieveAchievementCount(response:any): any {
        console.log("retrieve Achievement Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numOfAchievement) => {
            console.log("numberOfAchievement: " + numOfAchievement);
            response.json(numOfAchievement) ;
        });
    }
    
    public retrieveAchievementByUserId(userId : String, response : any) : any{
        console.log("retrieving a achievement by user Id");
        var query = this.model.find({userId : userId});
        query.exec((err, item) => {
            if(err){
                console.log("error while retrieving user");
                response.send("error");
            }
            else{
                response.send(item);
            }            
        })
    }    

   

}
export {AchievementModel};