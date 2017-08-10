import React, {Component} from 'react';
import {deepOrange500,red500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Topnav from '../../components/Topnav';
import Config from '../../config';
const muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500
	},
});

class ForgotPassword extends Component {
	constructor (props,context){
		super(props,context);
		this.state={
			busy : false,
			sessionId : localStorage.getItem('sessionId') || null,
			resetKey : this.props.match.params.resetKey || '',
			password : ''
		};
	}
	handleResetCodeChange(event){
		this.setState({resetKey:event.target.value})
	}
	handleNewPasswordChange(event){
		this.setState({password:event.target.value})
	}

	handleResetPassword(event){
		var data={reset_key:this.state.resetKey,password:this.state.password};
		this.setState({errorMsg : null,busy : true});
		if(!data.reset_key || !data.password){
			this.setState({errorMsg : 'Reset Key or Password should not be blank!!',busy : false});
			return;
		}
		axios.post(Config.api+'account/recover',data).then((res)=>{
			if(res.data.errors){
				this.setState({errorMsg : 'This key is not valid or has been expired/used!!',busy : false});
			}else{
				this.setState({errorMsg : 'Your password has been reset please login.', busy : false});
			}
		}).catch((err)=>{
			this.setState({errorMsg : 'Unable to connect to server, try agin later.', busy : false});
		});
	}


	render() {
		let busy=null;
		let errorMsg = null;
		let loginButton = null;
		if(this.state && this.state.busy){
			busy = <span><i className="fa fa-fw fa-pulse fa-spinner"></i>Working out...</span>;
		}
		if(!this.state.errorMsg){
			errorMsg = null;
		}else{
			errorMsg = <p className="text-danger text-center">{this.state.errorMsg}</p>
		}
		if(!this.state.busy){
			loginButton = <button type="button" onClick={(event)=>this.handleResetPassword(event)} className="btn btn-block btn-lg btn-warning">Reset Password</button>;
		}else{
			loginButton = <button type="button" className="btn btn-block btn-lg btn-warning disabled" disabled>Resetting your password ... </button>
		}
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<Topnav/>
					<div className="container" style={{marginTop:100, marginBottom:150}}>
						<div className="col-md-4 col-md-offset-4">
							<Paper style={{paddingTop:2,paddingLeft:25,paddingRight:25,paddingBottom:2}}>
								<form>
									<h4 className="text-center text-warning">Recover Password</h4><br/>
										{errorMsg}
									<div className="form-group">
										<div className="text-center">{busy}</div>
									</div>
									<div className="form-group">
										<label htmlFor="code">Reset Code</label>
										<input onChange={(event)=>this.handleResetCodeChange(event)} value={this.state.resetKey} type="text" className="form-control" id="code" placeholder="Reset Code"/>
									</div>
									<div className="form-group">
										<label htmlFor="pwd">New Password</label>
										<input onChange={(event)=>this.handleNewPasswordChange(event)} type="password" className="form-control" id="pwd" placeholder="New Password"/>
									</div>
									<div className="text-center">
										{loginButton}
										<p className="text-right" style={{marginTop:30}}>
											<Link to="/login">Login</Link>
										</p>
									</div>
								</form>
							</Paper>
						</div>
				  </div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default ForgotPassword;
