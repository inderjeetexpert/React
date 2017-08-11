import React, {Component} from 'react';
import {deepOrange500,red500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Topnav from '../../components/Topnav';
import TopnavBar from '../../components/TopnavBar';
import LoginFrom from './components/LoginForm';

const muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500
	},
});

class Login extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
					<div>

							<LoginFrom/>
					</div>
			</MuiThemeProvider>
		);
	}
}

export default Login;
