import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
  {name: 'Chicago', jobs: 4000, },
  {name: 'Springfield', jobs: 3000, },
  {name: 'Napperville', jobs: 2000, },
];

class MyBarChart extends React.Component{
  constructor(props) {
    super(props);
  }

	render () {
  	return (
    	<BarChart width={600} height={300} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="jobs" fill="#82ca9d" />
      </BarChart>
    );
  }
}

module.exports.MyBarChart = MyBarChart;
