import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IVerificationBadgeModel} from '../interfaces/IVerificationBadgeModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class VerificationBadgeModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createVerificationBadgeModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                userId : String,
                verificationBadgeId: String,
                businessEIN: String,
                dateOfVerification : String,
                signature : String
            }, {collection: 'verificationBadge'}
        );
    }

    public createVerificationBadgeModel(): void {
        this.model = mongooseConnection.model<IVerificationBadgeModel>("verificationBadge", this.schema);
    }

    public retrieveAllVerificationBadge(response:any): any {
        console.log("retrieve all list ...");
        
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public retrieveVerificationBadgeCount(response:any): any {
        console.log("retrieve Verification Badge Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numOfVerificationBadge) => {
            console.log("numberOfVerificationBadges: " + numOfVerificationBadge);
            response.json(numOfVerificationBadge) ;
        });
    }

}
export {VerificationBadgeModel};