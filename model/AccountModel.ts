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
        console.log("updating account type info");
        var query = this.model.findOneAndUpdate(
            {accountId : account.accountId}, 
            {$set: {accountType: account.accountType}}, 
            {new : true}
        );
        query.exec((err, item) => {
            if(err){
                console.log("Update Account type failed");
                response.send(err);
            }
            else{
                console.log("Updated account type successfully");
                response.send(item);
            }
        })
    }
    public getAccountDetailUsingAccountId(accountId : String, response : any) : any{
        console.log("retrieving a account details");
        var query = this.model.findOne({accountId : accountId});
        query.exec((err, item) => {
            if(err){
                console.log("error while retrieving account details");
                response.send("error");
            }
            else{
                console.log("get account details successfully");
                response.send(item);
            }
            
        })
    }

    public getOneUserAccount(userId : string, response : any) : any {
        console.log("retrieving a account type for current user");
        var query = this.model.findOne({userId : userId});
        query.exec((err, item) => {
            if (err){
                console.log("error while retrieving user's account type");
                response.send("error");
            }
            else {
                response.send(item);
            }
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
            if(err){
                console.log("error retrieving account type");
                res.send("error retrieving account type");
            }
            res.send(item.accountType.toString());
        })
    }

}
export {AccountModel};
