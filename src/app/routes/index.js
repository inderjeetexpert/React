import React, {Component} from 'react';
import {render} from 'react-dom'
import { HashRouter , Switch, Route, Link } from 'react-router-dom'
import {Provider,connect} from 'react-redux'
import {createStore} from 'redux'
//import browser history
import history from '../history'

//import Topnav from './components/topnav/topnav'
import Home from './Home'
import Main from './Main'
import People from './People'
import Price from './Price'
import Gift from './Gift'
import Refer from './Refer'
import Login from './Login'
import Signup from './Signup'
import ForgotPassword from './ForgotPassword'
import RecoverPassword from './RecoverPassword'
import Profile from './Profile'
import ProfileHome from './Profile/ProfileHome'
import configureStore from '../store/configureStore'
import {loadProducts} from '../actions/productsActions'
import Delivery from './Delivery'
const store = configureStore()


class MainRoute extends Component {
	constructor(props, context) {
		super(props, context);
		this.state ={
			loggedIn:localStorage.getItem('loggedIn') || false,
			name:localStorage.getItem('name') || 'Guest',
		};
	}

	loggedIn(){
		return false;
	}
	render() {

		return (
			<Provider store={store}>
				<HashRouter history={history}>
					<Switch>
						<Route exact path="/" component={Login}/>
						<Route exact path="/main" component={Main}/>
						<Route exact path="/people" component={People}/>
						<Route exact path="/price" component={Price}/>
						<Route exact path="/gift" component={Gift} onEnter={this.requireAuth}/>
						<Route exact path="/refer" component={Refer}/>
						<Route exact path="/login" component={Login}/>
						<Route exact path="/signup" component={Signup}/>
						<Route exact path="/forgot-password" component={ForgotPassword}/>
						<Route exact path="/forgot-password/:resetKey" component={RecoverPassword}/>
						<Route exact path="/profile" component={ProfileHome}/>
						<Route exact path="/delivery/create" component={Delivery}/>
						<Route exact path="/profile/:page" component={Profile}/>
						<Route component={Login}/>
					</Switch>
				</HashRouter>
			</Provider>
		);
	}
}



export default MainRoute;
