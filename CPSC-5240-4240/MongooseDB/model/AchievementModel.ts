import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IAchievementModel} from '../interfaces/IAchievementModel';

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
            }, {collection: 'achievements'}
        );
    }

    public createAchievementModel(): void {
        this.model = mongooseConnection.model<IAchievementModel>("achievement", this.schema);
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

}
export {AchievementModel};