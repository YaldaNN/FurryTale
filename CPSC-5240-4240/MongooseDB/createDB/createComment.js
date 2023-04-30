db = db.getSiblingDB('FurryTale')
//db.createCollection('comments')
commentsCollection = db.getCollection("comments")
commentsCollection.remove({})
commentsCollection.insertOne(
{
    commentId : "111",
    postId: "12",
    commenterId: "1",
    comment: "Cute kitty",
    dateTime: "04.29.2023"
}
)
commentsCollection.insertOne(
{
    commentId : "112",
    postId: "10",
    commenterId: "2",
    comment: "awwwwwww",
    dateTime: "04.25.2023"
}
)