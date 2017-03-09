import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class MyBarChart extends React.Component{
  constructor(props) {
    super(props);
  }

	render () {
  	return (
      <div className="barChartContainer">
        <h3>Jobs in Illinois Cities</h3>
      	<BarChart width={750} height={375} data={this.props.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="jobs" fill="#82ca9d" />
        </BarChart>
    </div>
    );
  }
}

module.exports.MyBarChart = MyBarChart;
