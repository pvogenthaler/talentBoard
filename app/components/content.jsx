import {getJobsData} from '../services/glassdoorApi.js';
import {StraightAnglePieChart} from './piechart.jsx'

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount () {
    const component = this;
    getJobsData()
    .then((res) => {
      let resData = [];
      for (let state in res.data.response.states) {
        resData.push({
          name: res.data.response.states[state].name,
          value: res.data.response.states[state].numJobs
        });
      }
      component.setState({ data: resData });
      console.log(this.state.data);
    }).catch((err) => {
      console.log('error on getting jobs data: ', err);
    });
  }

  render() {
    return (
      <div>
        <StraightAnglePieChart data={this.state.data}/>
      </div>
    );
  }

}

module.exports.Content = Content;
