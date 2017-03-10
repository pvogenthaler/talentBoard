process.env.NODE_ENV = 'test';
let chai = require('chai');
let expect = require('chai').expect;
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('./server/server.js');
var glassdoor = require('./server/glassdoorApiKey.js');

chai.use(chaiHttp);


describe ('Sever Endpoints', function() {

  describe('/glassdoor - post', function() {

    it('it should get jobs data', (done) => {
      var params = {
        'query': '369330056769823',
        'returnStates': 'true',
        'state': 'illinois',
        'returnCities': 'true',
        'fromAge': '1',
        'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
      };

      chai.request(server)
        .post('/glassdoor')
        .send(params)
        .end((err, res) => {
          console.log(res.body.glassdoor.states);
          res.should.have.status(200);
          res.body.glassdoor.should.have.property('states');
          res.body.glassdoor.states.should.be.a('object');
          res.body.glassdoor.cities.should.be.an('array');
          done();
      });
    });

  });
});
