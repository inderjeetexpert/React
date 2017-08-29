import React, { Component } from 'react';
import VerticalbarGraph from '../../../components/VerticalbarGraph/VerticalbarGraph';
import './times.css';

class Locations extends Component {
	constructor(props) {
		super(props)


	}


	render() {
		return (
			<div className="innerbody">
				<div className="col-md-6">
					<VerticalbarGraph widgetName="Visits per local time" id="localTime" />
				</div>
				<div className="col-md-6">
					<VerticalbarGraph widgetName="Visits per server time" id="serverTime" />

				</div>



			</div>
		)
	}
}


export default Locations;
