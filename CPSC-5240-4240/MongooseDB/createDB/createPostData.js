// Creating Collection for ACCOUNTS
db = db.getSiblingDB('FurryTale')
//db.createCollection('posts')
postsCollection = db.getCollection("posts")
postsCollection.remove({})

postsCollection.insertOne( {
   
    postId: "24ab0322f899e7a6389f0857c43b5b1e",
    userId: "2c78a513a28f2bf1c680b505955a7bad",
    postType: 1,
    image: "https://images.unsplash.com/photo-1545328951-d483a3667ed0?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFwcHklMjBkb2d8ZW58MHx8MHx8\u0026auto=format\u0026fit=crop\u0026w=900\u0026q=60",
    caption: "Meow meow meow",
    paws: []
  
})

postsCollection.insertOne( {
   
    postId: "24ab0322f899e7a6389f0857c43b5b2b",
    userId: "2c78a513a28f2bf1c680b505955a7bad",
    postType: 1,
    image: "https://images.unsplash.com/photo-1545328951-d483a3667ed0?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFwcHklMjBkb2d8ZW58MHx8MHx8\u0026auto=format\u0026fit=crop\u0026w=900\u0026q=60",
    caption: "Bhau Bhau",
    paws: []
  
})

postsCollection.insertOne( {
   
    postId: "24ab0322f899e7a6389f0857c43b5b2b",
    userId: "2c78a513a28f2bf1c680b505955a7bad",
    postType: 2,
    image: "https://images.unsplash.com/photo-1545328951-d483a3667ed0?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFwcHklMjBkb2d8ZW58MHx8MHx8\u0026auto=format\u0026fit=crop\u0026w=900\u0026q=60",
    caption: "Come and join!",
    paws: []
  
})

postsCollection.insertOne( {
   
    postId: "24ab0322f899e7a6389f0857c43b5b1f",
    userId: "3c78a513a28f2bf1c680b505955a7bad",
    postType: 2,
    image: "https://images.unsplash.com/photo-1545328951-d483a3667ed0?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFwcHklMjBkb2d8ZW58MHx8MHx8\u0026auto=format\u0026fit=crop\u0026w=900\u0026q=60",
    caption: "Woof Woof Woof",
    paws: []
  
})

postsCollection.insertOne( {
   
    postId: "24ab0322f899e7a6389f0857c43b5b1f",
    userId: "3c78a513a28f2bf1c680b505955a7bad",
    postType: 3,
    image: "https://images.unsplash.com/photo-1545328951-d483a3667ed0?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFwcHklMjBkb2d8ZW58MHx8MHx8\u0026auto=format\u0026fit=crop\u0026w=900\u0026q=60",
    caption: "competition",
    paws: []
  
})

postsCollection.insertOne( {
   
    postId: "24ab0322f899e7a6389f0857c43b5b1f",
    userId: "3c78a513a28f2bf1c680b505955a7bad",
    postType: 4,
    image: "https://images.unsplash.com/photo-1545328951-d483a3667ed0?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFwcHklMjBkb2d8ZW58MHx8MHx8\u0026auto=format\u0026fit=crop\u0026w=900\u0026q=60",
    caption: "Adopt this cute dog!",
    paws: []
  
})