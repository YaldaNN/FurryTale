var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test posting one post from a user', function () {


	var postId;
	var responseOfPost;
    var newPost;
	const postBody = {
        "postId": "anything",
        "userId": "2c78a513a28f2bf1c680b505955a7bad",
        "postType": 1,
        "image": "Image Location",
        "caption": "Meow meow meow",
        "paws": [],
        "comments": []
    }


      
    before(function (done) {
        
        chai.request("https://furrytale.azurewebsites.net")
			.post("/TESTposts/")
            .send(postBody)
			.end(function (err, res) {
				//console.log(res)
				newPost = res.body;
                postId = res.body.postId
				responseOfPost = res;
                expect(err).to.be.null;            
				done();
        
        });
    });

    after(function (done)  {
        chai.request("https://furrytale.azurewebsites.net")
        .delete("/TESTdelete/"+postId).end(function (err, response) {
            var responseOfDelete = response.body.status;
            console.log("deleted respose");
            console.log(response.body.status)
            expect(err).to.be.null;
            expect(responseOfDelete).to.equal("deleted")
           
           done();
        });
      });


        it('Should return the postID', function (){
            expect(responseOfPost).to.have.status(200);
            expect(this.postId).to.be.a.string;
            expect(responseOfPost).to.have.headers;
        });

        it('Should return the post', function (){
            console.log(newPost)
            expect(responseOfPost).to.have.status(200);
            expect(responseOfPost).to.have.headers;
        });

        it('Should return posts with proper values', function (){
            expect(newPost.userId).to.equal(postBody.userId);
            expect(newPost.postType).to.equal(postBody.postType);
            expect(newPost.image).to.equal(postBody.image);
            expect(newPost.caption).to.equal(postBody.caption);
        });



});