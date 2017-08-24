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
import configureStore from '../store/configureStore'
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
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/company" component={Company} />
						<Route exact path="/emailMarketing" component={EmailMarketing} />
						<Route exact path="/companyDetail/notes" component={CompanyDetail} />
						<Route exact path="/companyDetail/email" component={CompanyDetailEmail} />
						<Route exact path="/companyDetail/activity" component={CompanyDetailActivity} />
						<Route exact path="/companyDetail/task" component={CompanyDetailTask} />
						<Route exact path="/companyDetail/schedule" component={CompanyDetailSchedule} />
						<Route exact path="/companyDetail/attachment" component={CompanyDetailAttachment} />
						<Route exact path="/webAnalytics" component={WebAnalytics} />
						<Route exact path="/login" component={Login} />
						<Route component={Login} />
					</Switch>
				</HashRouter>
			</Provider>
		);
	}
}



export default MainRoute;
