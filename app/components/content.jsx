import {getJobsData} from '../services/glassdoorApi.js';
import {MyPieChart} from './piechart.jsx';
import {MyBarChart} from './barchart.jsx';

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      totalJobs: '',
    };
  }

  componentDidMount () {
    const component = this;

    getJobsData(null, false, 'illinois', true)
    .then((res) => {
      let resCityData = []
      for (let i = 0; i < 8; i++) {
        resCityData.push({
          name: res.data.response.cities[i].name.slice(0, -4),
          jobs: res.data.response.cities[i].numJobs
        });
      }
      console.log(resCityData);
      component.setState({cityData: resCityData})
    }).catch((err) => {
      console.log('error on getting illinois city jobs data: ', err);
    });

    getJobsData(null, true, 'illinois', false)
    .then((res) => {
      console.log(res.data.response);
      component.setState({
        totalJobs: res.data.response.states.Illinois.numJobs
      });
    }).catch((err) => {
      console.log('error on getting total illinois jobs: ', err);
    });
  }


  render() {
    return (
      <div className="charts">
        <div className="totalJobs">
          <h2>Total Illinois Jobs</h2>
          <h1>{this.state.totalJobs}</h1>
        </div>
        <MyBarChart data={this.state.cityData}/>
        {/* <MyPieChart data={this.state.data}/> */}
      </div>
    );
  }

}

module.exports.Content = Content;
