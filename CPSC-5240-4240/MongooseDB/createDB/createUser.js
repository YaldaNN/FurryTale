// Creating Collection for USERS
db = db.getSiblingDB('FurryTale')
//db.createCollection('users')
usersCollection = db.getCollection("users")
usersCollection.remove({})

usersCollection.insertOne({
    
     
        userId: "2c78a513a28f2bf1c680b505955a7bad",
        userName: "Oreo",
        userPassword: "password",
        accountId: "d23e32beea6efc9d43205fa91e732031",
        tailers: [],
        tailee: [],
        about: "I have a brother named Doreo",
        openToWork: false,
        verified: false,
        verificationBadgeId: "",
        profilePic : "https://wallpaper.dog/large/5439024.jpg"
    
})