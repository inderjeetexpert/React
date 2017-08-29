import React, { Component } from 'react';
import Topnav from '../../components/Topnav';
import SubNavigation from './components/SubNavigation/SubNavigation';
import TopContols from './components/TopControls/TopControls';
import Dashboard from './Views/Dashboard/Dashboard';
import Visitors from './Views/Visitors/Visitors';
import { getUserDetailPiwik, getTokenAuthPiwik } from '../../api/webAnalytics';
import './webanalytics.css'
class WebAnalytics extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errorMessage: null,
			isLoading: true,
			pageName: props.match.params.pageName,
			subPageName: props.match.params.subPageName
		}
	}

	componentDidUpdate(prevProps, prevState) {
		let { pageName, subPageName } = this.props.match.params;
		if (prevProps.match.params.pageName != pageName || prevProps.match.params.subPageName != subPageName) {
			this.setState({ pageName, subPageName })
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
		let { isLoading, errorMessage, pageName, subPageName } = this.state;
		return (
			<div className="web-analytics">
				<Topnav />
				<div>
					{!isLoading && !errorMessage && <TopContols />}
					<div className="page clearfix">
						<SubNavigation pageName={pageName} />
						{isLoading ? <div className="loading">Please wait</div> :
							errorMessage ? <div className="errorMessage">{errorMessage}</div> :
								<div className="pageWrap clearfix">
									{pageName == 'Dashboard' && <Dashboard />}
									{pageName == 'Visitors' && <Visitors subPageName={subPageName} />}

								</div>
						}
					</div>
				</div>
			</div>
		);
	}
}

export default WebAnalytics;
