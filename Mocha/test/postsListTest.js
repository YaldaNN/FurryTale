var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test retriving all posts result', function () {

	var allPosts;
	var response;
		 
    before(function (done) {
        chai.request("http://localhost:8080")
			.get("/TESTposts")
			.end(function (err, res) {
				allPosts = res.body.posts;
				response = res;
				console.log(res);
                expect(err).to.be.null;              
				done();
			});
        });
		
    it('Should return an array object with more than 1 object', function (){
		expect(response).to.have.status(200);
		expect(response.body.posts).to.have.length.above(2);
		expect(response).to.have.headers;
    });
   
	
	it('The elements in the post array result have the expected properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					expect(allPosts[i]).to.include.keys('caption');
	    			expect(allPosts[i]).to.have.property('image');
					expect(allPosts[i]).to.have.property('paws');
					expect(allPosts[i]).to.have.property('postAndComment');
	    			expect(allPosts[i]).to.have.property('postId');
					expect(allPosts[i]).to.have.property('postType');
					expect(allPosts[i]).to.have.property('userId');
					expect(allPosts[i]).to.not.be.a.string;
				}
				return true;
			});
	});	

	it('The elements in the post array result have the expected data types', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					expect(allPosts[i]).to.have.property('userId').that.is.a('string');
					expect(allPosts[i]).to.have.property('caption').that.is.a('string');
					expect(allPosts[i]).to.have.property('image').that.is.a('string');
					expect(allPosts[i]).to.have.property('paws').that.is.a('array');
					expect(allPosts[i]).to.have.property('postAndComment').that.is.a('array');
					expect(allPosts[i]).to.have.property('userAndPost').that.is.a('array');
					expect(allPosts[i]).to.have.property('userAndPost').that.is.a('array').to.have.lengthOf(1);
					expect(allPosts[i]).to.have.property('postId').that.is.a('string');
					expect(allPosts[i]).to.have.property('postType').that.is.a('number');
				}
				return true;
			});
	});	

	it('userId at top level and at user info level should be same', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					var topLevelUserID  = allPosts[i].userId;
					var userInfoUserID  = allPosts[i].userAndPost[0].userId;
					assert.equal(topLevelUserID, userInfoUserID)
				}
				return true;
			});
	});	

	it('Commenter ID and commentAndUser user ID should be same', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					if(allPosts[i].postAndComment.length > 0){	
						for(var j=0; j< allPosts[i].postAndComment.length; j++){
							var commenterId  = allPosts[i].postAndComment[j].commenterId;
							var commentAndUserUserId  = allPosts[i].postAndComment[j].commentAndUser.userId;
							assert.equal(commenterId, commentAndUserUserId)
						}
					}
				}
				return true;
			});
	});	
	
});