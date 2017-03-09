import axios from 'axios';

const getJobsData = () => {
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
      'returnStates': 'true',
      'admLevelRequested': '1',
    }
  });
}

const getChicagoJobs = (query) => {
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
      'returnCities': 'true',
      'state': 'illinois',
      'q': query || '',
    }
  });
}

module.exports.getJobsData = getJobsData;
module.exports.getChicagoJobs = getChicagoJobs;
