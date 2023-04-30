import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IUserModel} from '../interfaces/IUserModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class UserModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createUserModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                userId : String,
                userName : String,
                userPassword : String,
                accountId : String,
                tailers : [String],
                tailee : [String],
                about : String,
                achievement : [String],
                posts : [String],
                openToWork : Boolean,
                verified : Boolean,
                verificationBadgeId : String
            }, {collection: 'users'}
        );
    }

    public createUserModel(): void {
        this.model = mongooseConnection.model<IUserModel>("users", this.schema);
    }

    public retrieveAllUsers(response:any): any {
        console.log("retrieve all users ...");
        
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public retrieveUserCount(response:any): any {
        console.log("retrieve User Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numOfUsers) => {
            console.log("numberOfUsers: " + numOfUsers);
            response.json(numOfUsers) ;
        });
    }

}
export {UserModel};