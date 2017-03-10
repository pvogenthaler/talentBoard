import axios from 'axios';

const getJobsData = (query, returnStates, state, returnCities, fromAge) => {
  return axios.post('/glassdoor', {
    query: query,
    returnStates: returnStates,
    state: state,
    returnCities: returnCities,
    fromAge: fromAge,
    userAgent: navigator.userAgent,
  });
}

module.exports.getJobsData = getJobsData;
