// Creating Collection for ACCOUNTS
db = db.getSiblingDB('FurryTale')
//db.createCollection('accounts')
accountsCollection = db.getCollection("accounts")
accountsCollection.remove({})
accountsCollection.insertOne(
{
	  accountId: "d23e32beea6efc9d43205fa91e732031",
	  userId:  "2c78a513a28f2bf1c680b505955a7bad",
	  accountType: 1,
	  payment: 0.0,
}
)
accountsCollection.insertOne(
{
	accountId: "d23e32beea6efc9d43205fa91e732542",
	userId:  "2c78a513a28f2bf1c680b505955a8mad",
	accountType: 1,
	payment: 0.0,
}
)
accountsCollection.insertOne(
	{
		accountId: "d23e32beea6efc9d43205fa91e732543",
		userId:  "3c78a513a28f2bf1c680b505955a7bad",
		accountType: 1,
		payment: 0.0,
	}
)
accountsCollection.insertOne(
	{
		accountId: "d23e32beea6efc9d43205fa91e732544",
		userId:  "4c78a513a28f2bf1c680b505955a7bad",
		accountType: 1,
		payment: 0.0,
	}
)
// Creating Collection for ACHIEVEMENTS
//db.createCollection('achievements')
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
	

// Creating Collection for Users
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
	profilePic : "https://wallpaper.dog/large/5439024.jpg",
	email : "meow@pet.com"

})

usersCollection.insertOne({

 
	userId: "2c78a513a28f2bf1c680b505955a8mad",
	userName: "Piu",
	userPassword: "password",
	accountId: "d23e32beea6efc9d43205fa91e732542",
	tailers: [],
	tailee: [],
	about: "I love my meowmy",
	openToWork: false,
	verified: false,
	verificationBadgeId: "",
	profilePic : "https://d1hjkbq40fs2x4.cloudfront.net/2016-07-16/files/cat-sample_1313-5.jpg",
	email : "piu@gmail.com"

})

// CREATE POST DATA
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
    userId: "2c78a513a28f2bf1c680b505955a8mad",
    postType: 1,
    image: "https://images.unsplash.com/photo-1545328951-d483a3667ed0?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFwcHklMjBkb2d8ZW58MHx8MHx8\u0026auto=format\u0026fit=crop\u0026w=900\u0026q=60",
    caption: "Bhau Bhau",
    paws: []
  
})

postsCollection.insertOne( {
   
    postId: "24ab0322f899e7a6389f0857c43b5b1f",
    userId: "2c78a513a28f2bf1c680b505955a8mad",
    postType: 1,
    image: "https://images.unsplash.com/photo-1545328951-d483a3667ed0?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFwcHklMjBkb2d8ZW58MHx8MHx8\u0026auto=format\u0026fit=crop\u0026w=900\u0026q=60",
    caption: "Woof Woof Woof",
    paws: []
  
})

