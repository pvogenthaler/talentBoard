import axios from 'axios';

const getJobsData = (query, returnStates, state, returnCities, fromAge) => {
  const myPartnerId =	'129184';
  const myPartnerKey =	'iRYYMRiPc0S';
  const url = 'http://api.glassdoor.com/api/api.htm?';

  return axios.get(url, {
    params: {
      't.p': myPartnerId,
      't.k': myPartnerKey,
      'userip': '192.168.43.42',
      useragent: navigator.userAgent,
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
  });
}

module.exports.getJobsData = getJobsData;
