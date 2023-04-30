import Mongoose = require("mongoose");

interface IAchievementModel extends Mongoose.Document {
    achievementId : String,
    userId : String,
    achievementType : Number,
    achievementDetail : String
}
export {IAchievementModel};