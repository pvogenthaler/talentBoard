import {getJobsData, getChicagoJobs} from '../services/glassdoorApi.js';
import {MyPieChart} from './piechart.jsx';
import {MyBarChart} from './barchart.jsx';

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cityData: [],
    };
  }

  componentDidMount () {
    const component = this;
    // getJobsData()
    // .then((res) => {
    //   let resData = [];
    //   for (let state in res.data.response.states) {
    //     resData.push({
    //       name: res.data.response.states[state].name,
    //       value: res.data.response.states[state].numJobs
    //     });
    //   }
    //   component.setState({ data: resData });
    //   console.log(this.state.data);
    // }).catch((err) => {
    //   console.log('error on getting jobs data: ', err);
    // });

    getChicagoJobs()
    .then((res) => {
      console.log(res.data.response);
      let resCityData = []
      for (let i = 0; i < 8; i++) {
        resCityData.push({
          name: res.data.response.cities[i].name,
          jobs: res.data.response.cities[i].numJobs
        })
      }
      console.log(resCityData);
      component.setState({cityData: resCityData})
    }).catch((err) => {
      console.log('error on getting illinois jobs data: ', err);
    });
  }

  render() {
    return (
      <div>
        <MyBarChart data={this.state.cityData}/>
        {/* <MyPieChart data={this.state.data}/> */}
      </div>
    );
  }

}

module.exports.Content = Content;
