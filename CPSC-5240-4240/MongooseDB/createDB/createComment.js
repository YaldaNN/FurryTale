db = db.getSiblingDB('FurryTale')
//db.createCollection('comments')
commentsCollection = db.getCollection("comments")
commentsCollection.remove({})
commentsCollection.insertOne(
{
    commentId : "kkhfnfalmfo8wrqwefnlian",
    postId: "24ab0322f899e7a6389f0857c43b5b1e",
    commenterId: "2c78a513a28f2bf1c680b505955a7bad",
    comment: "Cute kitty",
    dateTime: "04.29.2023"
}
)
commentsCollection.insertOne(
{
    commentId : "iwefknkajmnvjkahgnkvkearf",
    postId: "24ab0322f899e7a6389f0857c43b5b1e",
    commenterId: "2c78a513a28f2bf1c680b505955a7bad",
    comment: "awwwwwww",
    dateTime: "04.25.2023"
}
)