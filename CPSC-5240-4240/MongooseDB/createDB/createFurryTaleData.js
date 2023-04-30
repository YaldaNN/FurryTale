// Creating Collection for ACCOUNTS
db = db.getSiblingDB('FurryTale')
//db.createCollection('accounts')
accountsCollection = db.getCollection("accounts")
accountsCollection.remove({})
accountsCollection.insertOne(
{
	  accountId: "1",
	  userId: "1",
	  accountType: 1,
	  payment: 0.0,
}
)
accountsCollection.insertOne(
{
	accountId: "2",
	userId: "2",
	accountType: 1,
	payment: 0.0,
}
)

// Creating Collection for ACHIEVEMENTS
db.createCollection('achievements')
achievementsCollection = db.getCollection("achievements")
achievementsCollection.remove({})
achievementsCollection.insert(
{
	acheivementId: "1",
	userId: "1",
	achievementType: 2,
	achievementDetail: "WON 1st PLACE",
}
)
achievementsCollection.insert(
	{
		acheivementId: "2",
		userId: "1",
		achievementType: 1,
		achievementDetail: "Went to furry competition",
	}
	)
	
// db.createCollection('users')
// usersCollection = db.getCollection("users")
// usersCollection.remove({})
// usersCollection.insert(
// {
// 	userId: "1",
	
// }
// )