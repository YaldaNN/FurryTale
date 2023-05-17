// Creating Collection for ACHIEVEMENTS
db = db.getSiblingDB('FurryTale')
//db.createCollection('achievements')
achievementsCollection = db.getCollection("achievements")
achievementsCollection.remove({})

achievementsCollection.insertOne(
    {
        acheivementId: "24ab032256bh78a6389f0857c43b5b1e",
        userId: "2c78a513a28f2bf1c680b505955a7bad",
        achievementType: 2,
        achievementDetail: "WON 1st PLACE",
    })
