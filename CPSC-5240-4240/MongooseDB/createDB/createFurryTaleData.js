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
	profilePic : "https://d1hjkbq40fs2x4.cloudfront.net/2016-07-16/files/cat-sample_1313-5.jpg",
	email : "piu@pet.com"

})

// CREATE POST DATA
//db.createCollection('posts')
postsCollection = db.getCollection("posts")
postsCollection.remove({})

postsCollection.insertOne( {

	postId: "24ab0322f899e7a6389f0857c43b5b1e",
	userId: "2c78a513a28f2bf1c680b505955a8mad",
	postType: 0,
	image: "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
	caption: "Meow meow meow",
	paws: []

})

postsCollection.insertOne( {

	postId: "24ab0322f899e7a6389f0857c43b5b1e",
	userId: "2c78a513a28f2bf1c680b505955a7bad",
	postType: 1,
	image: "https://media.istockphoto.com/id/1310076912/photo/white-cheerful-cat-looks-through-clapperboard-on-a-yellow-background.jpg?s=612x612&w=0&k=20&c=OJjtlzTQsms-4kmTlMKlKWytdGfBNUvqGB2cZEu4wCo=",
	caption: "Become a movie cat! We are in search of a cat to star in an upcoming movie!",
	paws: []

})

postsCollection.insertOne( {

	postId: "24ab0322f899e7a6389f0857c43b5b2b",
	userId: "2c78a513a28f2bf1c680b505955a7bad",
	postType: 2,
	image: "https://images.unsplash.com/photo-1545328951-d483a3667ed0?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFwcHklMjBkb2d8ZW58MHx8MHx8\u0026auto=format\u0026fit=crop\u0026w=900\u0026q=60",
	caption: "Bhau Bhau",
	paws: []

})

postsCollection.insertOne( {

	postId: "24ab0322f899e7a6389f0857c43b5b2b",
	userId: "3c78a513a28f2bf1c680b505955a7bad",
	postType: 3,
	image: "https://www.cesarsway.com/wp-content/uploads/2015/06/benefits-of-dog-agility-training-cesars-way.jpg",
	caption: "Come and join!",
	paws: []

})

postsCollection.insertOne( {

	postId: "24ab0322f899e7a6389f0857c43b5b1f",
	userId: "3c78a513a28f2bf1c680b505955a7bad",
	postType: 1,
	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiNCpSJILEud45hOx0Eal7bkEiYWevWRY_K4l1pXEvQ&usqp=CAU&ec=48665701",
	caption: "We're on the lookout for a dog to grace the cover of a magazine!",
	paws: []

})

postsCollection.insertOne( {

	postId: "24ab0322f899e7a6389f0857c43b5b1f",
	userId: "3c78a513a28f2bf1c680b505955a7bad",
	postType: 4,
	image: "https://alexandrialivingmagazine.com/downloads/7486/download/The%2BDog%2BGames.jpeg?cb=b40c340fd8d6b2766f13e8fec6c51ff7&w=1500",
	caption: "Apply Now! and Join the competition!",
	paws: []

})

postsCollection.insertOne( {

	postId: "24ab0322f899e7a6389f0857c43b5b18",
	userId: "4c78a513a28f2bf1c680b505955a7bad",
	postType: 2,
	image: "https://www.sdhumane.org/assets/images/standard/adopt-me.jpg",
	caption: "Adopt this cute dog!",
	paws: []

})


// CREATE COMMENT DATA
//db.createCollection('comments')
commentsCollection = db.getCollection("comments")
commentsCollection.remove({})
commentsCollection.insertOne(
{
    commentId : "kkhfnfalmfo8wrqwefnlian",
    postId: "24ab0322f899e7a6389f0857c43b5b1f",
    commenterId: "2c78a513a28f2bf1c680b505955a8mad",
    comment: "Cute kitty",
    dateTime: "04.29.2023"
}
)
commentsCollection.insertOne(
{
    commentId : "iwefknkajmnvjkahgnkvkearf",
    postId: "24ab0322f899e7a6389f0857c43b5b1f",
    commenterId: "4c78a513a28f2bf1c680b505955a7bad",
    comment: "awwwwwww",
    dateTime: "04.25.2023"
}
)
