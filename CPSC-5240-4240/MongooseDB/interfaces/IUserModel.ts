import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
    userId : String,
    userName : String,
    userPassword : String,
    accountId : String,
    tailers : String[],
    tailee : String[],
    about : String,
    openToWork : Boolean,
    verified : Boolean,
    verificationBadgeId : String,
    profilePic : String
}
export {IUserModel};