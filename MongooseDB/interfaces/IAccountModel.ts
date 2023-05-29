import Mongoose = require("mongoose");

interface IAccountModel extends Mongoose.Document {
    accountId : String,
    userId : String,
    accountType : Number,
    payment : Number
}
export {IAccountModel};