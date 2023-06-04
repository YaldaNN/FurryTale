import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IAccountModel} from '../interfaces/IAccountModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class AccountModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createAccountModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                accountId : String,
                userId : String,
                accountType : Number,
                payment : Number
            }, {collection: 'accounts'}
        );
    }

    public createAccountModel(): void {
        this.model = mongooseConnection.model<IAccountModel>("accounts", this.schema);
    }

    public retrieveAllAccounts(response:any): any {
        console.log("retrieve all list ...");
        
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
    public updateAccountType(account : any, response : any) : any {
        var query = this.model.findOneAndUpdate({accountId : account.accountId}, account, {
            new : true
        });
        query.exec((err, item) => {
            response.send(item);
        })
    }
    public retrieveAccountCount(response:any): any {
        console.log("retrieve Account Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numOfAccounts) => {
            console.log("numberOfAccounts: " + numOfAccounts);
            response.json(numOfAccounts) ;
        });
    }

    public retrieveOneAccount(userId : String, res : any){
        var query = this.model.findOne({userId : userId});
        query.exec((err, item) => {
            res.send(item.accountType);
        })
    }

}
export {AccountModel};