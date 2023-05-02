// Creating Collection for ACCOUNTS
db = db.getSiblingDB('FurryTale')
//db.createCollection('posts')
postsCollection = db.getCollection("posts")
postsCollection.remove({})
postsCollection.insertOne(
{
    postId : "1",
    userId : "2",
    postType : 1,
    image : "Image Location",
    caption: "Homeowner can be pronounced as hoMEOWner. Good luck pronouncing it correct again",
    paws : []
}
)

