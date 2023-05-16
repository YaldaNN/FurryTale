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
        tailers: ["3c78a513a28f2bf1c680b505955a7bad", "4c78a513a28f2bf1c680b505955a7bad"],
        tailee: ["4c78a513a28f2bf1c680b505955a7bad"],
        about: "I have a brother named Doreo",
        openToWork: false,
        verified: false,
        verificationBadgeId: "",
        profilePic : "https://wallpaper.dog/large/5439024.jpg",
        email : "Oreo@pet.com"
})

usersCollection.insertOne({   
        userId: "3c78a513a28f2bf1c680b505955a7bad",
        userName: "Choco",
        userPassword: "password",
        accountId: "d33e32beea6efc9d43205fa91e732031",
        tailers: [],
        tailee: [],
        about: "Hello I'm Coco",
        openToWork: false,
        verified: false,
        verificationBadgeId: "",
        profilePic : "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600",
        email : "coco@pet.com"
})

usersCollection.insertOne({   
        userId: "4c78a513a28f2bf1c680b505955a7bad",
        userName: "Seattle Animal Shelter",
        userPassword: "password",
        accountId: "d43e32beea6efc9d43205fa91e732031",
        tailers: [],
        tailee: [],
        about: "Come visit Seattle Animal Shelter",
        openToWork: false,
        verified: true,
        verificationBadgeId: "123",
        profilePic : "https://dl5zpyw5k3jeb.cloudfront.net/organization-photos/39343/1/?bust=1613869306",
        email : "seattleAnimalShelter@pet.com",
        email : "meow@pet.com"
    
})

usersCollection.insertOne({
    
        userId: "2c78a513a28f2bf1c680b505955a8mad",
        userName: "Piu",
        userPassword: "password",
        accountId: "d23e32beea6efc9d43205fa91e732542",
        tailers: [],
        tailee: [],
        about: "I have a brother named Doreo",
        openToWork: false,
        verified: false,
        verificationBadgeId: "",
        profilePic : "https://wallpaper.dog/large/5439024.jpg",
        email : "meow@pet.com"
    
})