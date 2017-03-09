import { PieChart, Pie, Legend, Tooltip } from 'recharts';


class StraightAnglePieChart extends React.Component {
  constructor(props) {
    super(props);
  }

	render () {
  	// return (
    // 	<PieChart width={800} height={400}>
    //     <Pie startAngle={180} endAngle={0} data={this.props.data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
    //    </PieChart>
    // );

    return (
    	<PieChart width={800} height={400}>
        <Pie isAnimationActive={false} data={this.props.data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
        <Tooltip/>
      </PieChart>
    );
  }
}

module.exports.StraightAnglePieChart = StraightAnglePieChart;
