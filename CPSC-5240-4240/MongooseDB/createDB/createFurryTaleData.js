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