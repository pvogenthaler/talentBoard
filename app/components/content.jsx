import {getJobsData} from '../services/glassdoorApi.js';
import {MyBarChart} from './barchart.jsx';
import {PubSub} from '../services/pubsub.js';


class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      totalJobs: '',
      weeksJobs: '',
      todaysJobs: '',
      searchQuery: '',
    };
  }

  componentDidMount () {

    let component = this;

    const loadGraphs = function() {
      let component = this;
      console.log('component', component);
      console.log('this', this);
      let query = component.state.searchQuery;

      // retrieve city job data for barchart
      getJobsData(query, false, 'illinois', true, null)
      .then((res) => {
        let resCityData = []
        for (let i = 0; i < 8; i++) {
          resCityData.push({
            name: res.data.response.cities[i].name.slice(0, -4),
            jobs: res.data.response.cities[i].numJobs
          });
        }
        component.setState({cityData: resCityData})
      }).catch((err) => {
        console.log('error on getting illinois city jobs data: ', err);
      });

      // retrieve job data for total jobs
      getJobsData(query, true, 'illinois', false, null)
      .then((res) => {
        component.setState({
          totalJobs: res.data.response.states.Illinois.numJobs
        });
      }).catch((err) => {
        console.log('error on getting total illinois jobs: ', err);
      });

      // retrieve job data for this week
      getJobsData(query, true, 'illinois', false, '7')
      .then((res) => {
        component.setState({
          weeksJobs: res.data.response.states.Illinois.numJobs
        });
      }).catch((err) => {
        console.log('error on getting this week\'s illinois jobs: ', err);
      });

      // retrieve job data for today
      getJobsData(query, true, 'illinois', false, '1')
      .then((res) => {
        component.setState({
          todaysJobs: res.data.response.states.Illinois.numJobs
        });
      }).catch((err) => {
        console.log('error on getting this week\'s illinois jobs: ', err);
      });
    };

    loadGraphs.call(this);

    // update state and graphs on new search
    this.token = PubSub.subscribe('newSearch', function(newQuery) {
      console.log('newQuery: ', newQuery);
      console.log('component', component);
      component.setState({searchQuery: newQuery}, function() {
        loadGraphs.call(component);
      });
    });

  }

  render() {
    return (
      <div className="charts">
        <div className ="leftVerticalContainer">
          <div className="totalJobsContainer">
            <h2 className="totalJobsDescription">Total Illinois Jobs</h2>
            <h1 className="totalJobsNum">{this.state.totalJobs}</h1>
          </div>
          <div className="recentJobsContainer">
            <h3 className="todaysJobsDescription">Jobs Posted Today</h3>
            <h2 className="todaysJobsNum">{this.state.todaysJobs}</h2>
            <h3 className="weeksJobsDescription">Jobs Posted This Week</h3>
            <h2 className="weeksJobsNum">{this.state.weeksJobs}</h2>
          </div>
        </div>
        <MyBarChart data={this.state.cityData}/>
      </div>
    );
  }

}

module.exports.Content = Content;
