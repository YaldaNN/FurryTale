export interface EditProfile {
    _id: string,
    accountId : String,
    userId : String,
    tailers : String[],
    tailee : String[],
    about : String,
    openToWork : Boolean,
    verified : Boolean,
    verificationBadgeId : String,
    profilePic : String,
    userName : String,
    ssoId: String
}
