import React, {Component} from 'react';
import {deepOrange500,red500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Topnav from 'Components/Topnav';
import CallForAction from './components/CallForAction';

import ClientSpeeks from './components/ClientSpeeks/index';
import ReadyCook from './components/ReadyCook';
import NavbarHome from './components/NavbarHome';
import HappyClient from './components/HappyClient';


import HomeHeader from './components/NewComponents/HomeHeader';
import MealTime from './components/NewComponents/MealTime';
import HowItWorks from './components/NewComponents/HowItWorks';
import SkipStore from './components/NewComponents/SkipStore';
import AboutQuality from './components/NewComponents/AboutQuality';
import GetCooking from './components/NewComponents/GetCooking';
import AboutHalal from './components/NewComponents/AboutHalal';
import CantWaitCooking from './components/NewComponents/CantWaitCooking';


const muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500
	},
});

class Home extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<HomeHeader/>
					<MealTime/>
					<HowItWorks/>
					<SkipStore/>
					<AboutQuality/>
					<GetCooking/>
					<AboutHalal/>
					<CantWaitCooking/>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Home;
