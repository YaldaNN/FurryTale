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
                accountId : String,
                tailers : [String],
                tailee : [String],
                about : String,
                openToWork : Boolean,
                verified : Boolean,
                verificationBadgeId : String,
                profilePic : String,
                ssoId : String,
                userName : String
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

    public retireveOneUser(userId : String, response : any) : any{
        console.log("retrieving a user");
        var query = this.model.findOne({userId : userId});
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

   
    public updateUser(user:any, response:any) : any {
        console.log("updating user info");
        var query = this.model.findOneAndUpdate(
            {userId: user.userId}, 
            {
                $set: {
                    about: user.about,
                    openToWork: user.openToWork,
                    profilePic: user.profilePic,
                    userName: user.userName
                }
            }, 
            {new : true}
        );

        query.exec((err, item) => {
            if(err){
                console.log("Update user failed");
                response.send(err);
            }
            else{
                console.log("Updated user");
                response.send(item);
            }
        })
    }

    public addTailer(tailerId:String, taileeId: String, response: any) : any{
        var queryToGetTailer = this.model.findOne({userId : tailerId});
        var queryToGetTailee = this.model.findOne({userId : taileeId});

       queryToGetTailee.exec((err, tailee) => {
            if(err){
                console.log("Failed to get tailee");
            }
            else{
                console.log("step 1. tailee id is "+taileeId)
                console.log("Adding tailer to tailee");
                tailee.tailers.push(tailerId);
                console.log(tailee)
                var updateTailyQuery = this.model.findOneAndUpdate({userId : taileeId}, tailee, {
                    new : true
                });
                
                updateTailyQuery.exec((err, updatedTailee) => {
                    if(err){
                        console.log(err)
                    }
                    console.log("step 2")
                    console.log("Updated tailee");
                    console.log(updatedTailee)
                })
            }
        });

        queryToGetTailer.exec((err, tailer) => {
            if(err){
                console.log("Failer to add tailer");
            }
            else{
                console.log("step 3")
                console.log("Addid tailee to tailer");
                tailer.tailee.push(taileeId);
                var updateTailerQuery = this.model.findOneAndUpdate({userId : tailerId}, tailer, {
                    new : true
                });
                updateTailerQuery.exec((err, updatedTailer) =>{
                    console.log("step 4")
                    console.log("Updated tailer");
                })
                response.send("done updating tailer and tailee!");
            }
        })
    }

    public removeTail(tailerId:String, taileeId: String, response: any) : any {
        console.log("Untailing: " + tailerId);

        var queryTailee = this.model.findOne({userId: taileeId});
        var queryTailer = this.model.findOne({userId : tailerId});

        queryTailee.exec((err, currUser) => {
            if (err) {
                console.log("error while exec query");
                console.log(err);
            }
            else {
                currUser.tailers.forEach((item, index) => {
                    if (item == tailerId) {
                        currUser.tailers.splice(index, 1);
                        console.log("User untailed " + tailerId);
                    }
                });
                var updateCurrUserQuery = this.model.findOneAndUpdate({userId : taileeId}, currUser, {
                    new : true
                });
                updateCurrUserQuery.exec((err, updatedTailer) =>{
                    console.log("Updated tailer list");
                })
            }
        });
        
        queryTailer.exec((err, tailAtUser) => {
            if (err) {
                console.log("error while exec query");
                console.log(err);
            }
            else {
                tailAtUser.tailee.forEach((item, index) => {
                    if (item == taileeId) {
                        tailAtUser.tailee.splice(index, 1);
                        console.log("untailed by user");
                    }
                });
                var updateTailAtUserQuery = this.model.findOneAndUpdate({userId : tailerId}, tailAtUser, {
                    new : true
                });
                updateTailAtUserQuery.exec((err, updatedTailee) =>{
                    console.log("Updated tailee list");
                    response.json(updatedTailee);
                })
            }
        });
    }

    public isTailing(tailerId: string, taileeId: string, res: any) : any {
        //var queryTailer = this.model.findOne({userId : tailerId});
        var queryTailee = this.model.findOne({userId : taileeId});
        let tailing: boolean = false;

        queryTailee.exec((err, tailee) => {
            if(err){
                console.log("error while exec query");
                console.log(err);
                res.json({tailing: tailing})
            }
            else {
                tailee.tailers.forEach((item, index) => {
                    if (item == tailerId) { 
                        console.log("FOUND!");
                        tailing = true;
                        res.json({tailing: tailing})
                    }
                });
            }
        });
    }

    public retrieveAllUsersOpenToWork(response : any) :any{
        var query = this.model.find({openToWork : true});
        query.exec((err, item) => {
            if(err){
                console.log("error retrieving users open to work");

            }
            else{
                response.send(item);
            }
        })
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