var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test retriving all users result', function () {
//	this.timeout(15000);

	var requestResult;
	var response;
		 
    before(function (done) {
        chai.request("http://localhost:8080")
			.get("/users")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
				console.log(res);
                expect(err).to.be.null;
               
				done();
			});
        });
		
    it('Should return an array object with more than 1 object', function (){
		expect(response).to.have.status(200);
	// expect(response.body).to.be.an.object;
		expect(response.body).to.have.length.above(2);
		expect(response).to.have.headers;
    });
   
	it('The first entry in the array has known properties', function(){
	    expect(requestResult[0]).to.include.keys('about');
	    expect(requestResult[0]).to.have.property('_id');
		expect(response.body[0]).to.have.deep.property('userName');
		expect(response.body).to.not.be.a.string;
	});
	
	it('The elements in the array have the expecte properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					expect(body[i]).to.have.property('about');
					expect(body[i]).to.have.property('userName');
					expect(body[i]).to.have.property('_id');
					//expect(body[i]).to.have.property('email').to.have.length(1);
					expect(body[i]).to.have.property('profilePic').that.is.a('string');
				}
				return true;
			});
	});	
	
});