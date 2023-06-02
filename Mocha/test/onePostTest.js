var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test retriving one post from a user result', function () {


	var requestResult;
	var response;
		 
    before(function (done) {
        chai.request("http://localhost:8080")
			.get("/onePost?postId=24ab0322f899e7a6389f0857c43b5b1e")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
				console.log(res);
                expect(err).to.be.null;
               
				done();
			});
        });
		
    it('Should return one post object', function (){
		expect(response).to.have.status(200);
        expect(response).to.be.json;
        expect(response.body).to.be.a('Object');
	    expect(response).to.have.headers;
    });

	it('Should have known properties', function () {
		expect(requestResult).to.include.all.keys('postId', 'userId', 'postType', 'image', 'caption', 'paws');
		expect(requestResult).to.have.property('_id');
		expect(response.body).to.not.be.a.string;
	});
   
	it('Should have all expected properties with expected types', function () {
		var thePost = response.body;
		expect(thePost).to.have.property('_id').that.is.a('string');
		expect(thePost).to.have.property('postId').that.is.a('string');
		expect(thePost).to.have.property('userId').that.is.a('string');
		expect(thePost).to.have.property('postType').that.is.a('number');
		expect(thePost).to.have.property('image').that.is.a('string');
		expect(thePost).to.have.property('caption').that.is.a('string');
		expect(thePost).to.have.property('paws').that.is.a('array');
	});

});