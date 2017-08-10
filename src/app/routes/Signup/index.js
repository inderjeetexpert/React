import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deepOrange500,red500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Topnav from '../../components/Topnav';
import SignupModule from './components/SignupModule';
import history from 'Root/history'


const muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500
	},
});

class Signup extends Component {
	constructor(props, context) {
		super(props, context);
	}

	componentWillMount(){
		if(this.props.auth && this.props.auth.loggedIn){
			this.props.history.push('/profile')
		}
	}
	render() {

		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<Topnav/>
					<SignupModule/>
				</div>
			</MuiThemeProvider>
		);
	}
}

Signup.propTypes = {
	auth : PropTypes.object.isRequired
}

const mapStateToProps = (state)=>{
	return {
		auth:state.auth
	}
}

export default connect(mapStateToProps)(Signup);
