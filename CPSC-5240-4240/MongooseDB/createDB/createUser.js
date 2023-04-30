// Creating Collection for USERS
db = db.getSiblingDB('FurryTale')
//db.createCollection('users')
usersCollection = db.getCollection("users")
usersCollection.remove({})
usersCollection.insertOne(
{
    userId : "555",
    userName : "Ball of Fur",
    userPassword : "a1b2c3d4e5!",
    accountId : "15155",
    tailers : [],
    tailee : [],
    about : "I am a ball of fur!",
    achievement : [],
    posts : [],
    openToWork : true,
    verified : false,
    verificationBadgeId : ""
}
)