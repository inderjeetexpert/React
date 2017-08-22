import React, { Component } from 'react';
import Topnav from '../../components/Topnav';
import SubNavigation from './components/SubNavigation/SubNavigation';
import TopContols from './components/TopControls/TopControls';
import Dashboard from './components/Dashboard/Dashboard';
import './webanalytics.css'
class WebAnalytics extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div className="web-analytics">
				<Topnav />
				<div>
					<TopContols />
					<div className="page clearfix">
						<SubNavigation />
						<div className="pageWrap clearfix">
							<Dashboard />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default WebAnalytics;
