import React, {Component} from 'react';
import {deepOrange500,red500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Topnav from '../../components/Topnav';
import LearnMore from './components/LearnMore';

const muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500
	},
});

class Learn extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<Topnav/>
					<LearnMore/>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Learn;
