var glassdoor = require('./glassdoorApiKey');
var axios = require('axios');

module.exports = {

  post: function(req, res) {
    const query = req.body.query;
    const returnStates = req.body.returnStates;
    const state = req.body.state;
    const returnCities = req.body.returnCities;
    const fromAge = req.body.fromAge;
    const userAgent = req.body.userAgent;
    const url = 'http://api.glassdoor.com/api/api.htm?';

    axios.get(url, {
      params: {
        't.p': glassdoor.myPartnerId,
        't.k': glassdoor.myPartnerKey,
        'userip': '000.000.00.00',
        'useragent': userAgent,
        'v': '1',
        'format': 'json',
        'action': 'jobs-stats',
        'admLevelRequested': '1',
        'q': query || '',
        'returnStates': returnStates,
        'state': state,
        'returnCities': returnCities,
        'fromAge': fromAge || '-1',
      }
    })
    .then(function(gdRes) {
      console.log('response from glassdoor: ', gdRes.data.response);
      res.send({
        glassdoor: gdRes.data.response
      });
    })
    .catch(function(err) {
      console.log('error on glassdoor post: ', err);
    });
  }

};
