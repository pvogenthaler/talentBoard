import {getJobsData} from '../services/glassdoorApi.js';

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: String
    };
  }

  componentDidMount() {
    var component = this;
    getJobsData()
    .then((res) => {
      console.log('response: ', res);
      component.setState({
        data: JSON.stringify(res)
      });
    }).catch((err) => {
      console.log('error on getting jobs data: ', err);
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
      </div>
    );
  }

}

module.exports.Content = Content;
