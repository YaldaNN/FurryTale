export interface CreateProfile {
    accountId : String,
    userId : String,
    accountType : Number,
    payment : Number,
    email : String,
    userName : String,
    userPassword : String,
    tailers : String[],
    tailee : String[],
    about : String,
    openToWork : Boolean,
    verified : Boolean,
    verificationBadgeId : String,
    profilePicture : String
}
