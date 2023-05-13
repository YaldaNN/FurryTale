db = db.getSiblingDB('FurryTale')
db.createCollection('verificationBadge')
//verificationBadgeCollection = db.getCollection("verificationBadge")
verificationBadgeCollection.remove({})
verificationBadgeCollection.insertOne(
{
    userId : "111",
    verificationBadgeId: "11111",
    businessEIN: "1111111",
    dateOfVerification : "03/03/2023",
    signature : "My paw is under this contract!"
}
)
verificationBadgeCollection.insertOne(
{
    userId : "222",
    verificationBadgeId: "22222",
    businessEIN: "2222222",
    dateOfVerification : "02/02/2022",
    signature : "Mr. Pawrthur McPawland"
}
)