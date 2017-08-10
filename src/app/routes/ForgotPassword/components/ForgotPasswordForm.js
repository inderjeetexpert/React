import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { Alert,Button } from 'react-bootstrap';

import Config from '../../../config';

class ForgotPasswordForm extends React.Component{
	constructor (props){
		super(props);
		this.state={
			busy : false,
			sessionId : localStorage.getItem('sessionId') || null
		};
	}

	componentWillMount(){

	}

	componentDidMount(){

	}

	handleEmailChange(event){
		this.setState({username:event.target.value})
	}

	handleSendResetInstruction(event){
		var data={email:this.state.username};
		this.setState({errorMsg : null,busy : true});
		if(!data.email || validator.isEmpty(data.email)){
			this.setState({errorMsg : 'Email should not be blank!!',busy : false});
			return;
		}
		if(!validator.isEmail(data.email)){
			this.setState({errorMsg : "Please enter a valid email!",busy : false});
			return;
		}
		axios.post(Config.api+'account/isUserExists',data).then(res=>{
			if(res.data && res.data.emailRegistered){
				data.reset_url=Config.baseUrl+'#/forgot-password/{key}';
				axios.post(Config.api+'account/recover',data).then((res)=>{
					if(res.data.errors){
						this.setState({errorMsg : 'Something went wrong, please try again!!',busy : false});
					}else{
						this.setState({errorMsg : 'We have sent you a mail containing instructions for resetting your password, please check your mail.', busy : false});
					}
				}).catch((err)=>{
				});
			}else{
				this.setState({errorMsg : 'No customer found for email address',busy : false});
			}

		}).catch(err=>{
			this.setState({errorMsg : "Something went wrong please try again!",busy : false});
		})

	}

	render(){
		let loginButton = null;
		let errorMsg = null;
		if(!this.state.busy){
			loginButton = <button type="button" onClick={(event)=>this.handleSendResetInstruction(event)} className="btn btn-block btn-lg btn-warning">Send Reset Instructions</button>;
		}else{
			loginButton = <button type="button" className="btn btn-block btn-lg btn-warning disabled" disabled>Resetting your password ... </button>
		}

		if(!this.state.errorMsg){
			errorMsg = null;
		}else{
			errorMsg = <p className="text-danger text-center">{this.state.errorMsg}</p>
		}

		return (
			<div className="container" style={{marginTop:100, marginBottom:150}}>
				<div className="col-md-4 col-md-offset-4">
					<Paper style={{paddingTop:2,paddingLeft:25,paddingRight:25,paddingBottom:2}}>
						<form>
							<h4 className="text-center text-warning">Forgot Password</h4><br/>
							{errorMsg}
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Email</label>
								<input onChange={(event)=>this.handleEmailChange(event)} type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
							</div>
							<div className="text-center">
								{loginButton}
								<p className="text-right" style={{marginTop:30}}>
									<Link to="/login">Login</Link>
									<span>{this.state.ticks}</span>
								</p>
							</div>
						</form>
					</Paper>
				</div>
		  </div>
		);
	}
}


export default ForgotPasswordForm;
