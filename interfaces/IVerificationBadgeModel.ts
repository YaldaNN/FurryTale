import Mongoose = require("mongoose");

interface IVerificationBadgeModel extends Mongoose.Document {
    userId : String,
    verificationBadgeId: String,
    businessEIN: String,
    dateOfVerification : String,
    signature : String
}
export {IVerificationBadgeModel};