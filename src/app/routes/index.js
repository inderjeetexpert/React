import React, { Component } from 'react';
import { render } from 'react-dom'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
//import browser history
import history from '../history'

//import Topnav from './components/topnav/topnav'
import Main from './Main'
import People from './People'
import Campaigns from './GoogleAdward'
import Login from './Login'
import Contact from './Contact'
import Company from './Company'
import EmailMarketing from './EmailMarketing'
import CompanyDetail from './CompanyDetail/notes'
import CompanyDetailEmail from './CompanyDetail/email'
import CompanyDetailActivity from './CompanyDetail/activity'
import CompanyDetailTask from './CompanyDetail/task'
import CompanyDetailSchedule from './CompanyDetail/schedule'
import CompanyDetailAttachment from './CompanyDetail/attachment'
import WebAnalytics from './WebAnalytics'
import Social from './Social'
import SocialFbAddCampaign from './SocialFbAddCampaign'
import configureStore from '../store/configureStore'
import CampaignList from './GoogleAdward/components/campaignList'
const store = configureStore()


class MainRoute extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			loggedIn: localStorage.getItem('loggedIn') || false,
			name: localStorage.getItem('name') || 'Guest',
		};
	}

	loggedIn() {
		return false;
	}
	render() {

		return (
			<Provider store={store}>
				<HashRouter history={history}>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/business" component={Main} />
						<Route exact path="/people" component={People} />
						<Route exact path="/campaign/create" component={Campaigns} />
						<Route exact path="/campaigns" component={CampaignList} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/company" component={Company} />
						<Route exact path="/emailMarketing" component={EmailMarketing} />
						<Route exact path="/companyDetail/notes/:id" component={CompanyDetail} />
						<Route exact path="/companyDetail/email/:id" component={CompanyDetailEmail} />
						<Route exact path="/companyDetail/activity/:id" component={CompanyDetailActivity} />
						<Route exact path="/companyDetail/task/:id" component={CompanyDetailTask} />
						<Route exact path="/companyDetail/schedule/:id" component={CompanyDetailSchedule} />

						<Route exact path="/companyDetail/attachment/:id" component={CompanyDetailAttachment} />
						<Route exact path="/social" component={Social} />
						<Route exact path="/fbaddcampaign" component={SocialFbAddCampaign} />

						<Route path="/webAnalytics/:pageName/:subPageName" component={WebAnalytics} />
						<Route exact path="/login" component={Login} />
						<Route component={Login} />
					</Switch>
				</HashRouter>
			</Provider>
		);
	}
}



export default MainRoute;
