import React, { Component } from 'react';
import Topnav from '../../components/Topnav';
import SubNavigation from './components/SubNavigation/SubNavigation';
import TopContols from './components/TopControls/TopControls';
import Dashboard from './components/Dashboard/Dashboard';
import { getUserDetailPiwik, getTokenAuthPiwik } from '../../api/webAnalytics';
import './webanalytics.css'
class WebAnalytics extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			errorMessage: null,
			isLoading: true
		}
	}
	componentDidMount() {

		getUserDetailPiwik()
			.then((response) => {
				getTokenAuthPiwik(response.data[0])
					.then((response) => {
						localStorage.setItem('piwik-key', response.value);
						this.setState({
							errorMessage: null,
							isLoading: false
						})
					})
					.catch((error) => {

					})
			})
			.catch((error) => {
				this.setState({
					errorMessage: error.response ? error.response.statusText : error.message,
					isLoading: false
				})
			});
	}
	render() {
		let { isLoading, errorMessage } = this.state;
		return (
			<div className="web-analytics">
				<Topnav />
				<div>
					{!isLoading && !errorMessage && <TopContols />}
					<div className="page clearfix">
						<SubNavigation />
						<div className="pageWrap clearfix">
							{isLoading ? <div className="loading">Please wait</div> :
								errorMessage ? <div className="errorMessage">{errorMessage}</div> :
									<Dashboard />
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default WebAnalytics;
