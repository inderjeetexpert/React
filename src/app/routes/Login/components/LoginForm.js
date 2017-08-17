import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import {NotificationManager} from 'react-notifications';
import axios from 'axios';

import history from 'Root/history';
import {login,authStateChanged} from 'Actions/authActions'

class LoginForm extends Component{
	constructor (props){
		super(props);
		this.state={
			username : '',
			password : '',
			errorMsg : null,
			busy : false
		};


	}
	handleEmailChange(event){
		this.setState({username:event.target.value})
	}

	handlePasswordChange(event){
		this.setState({password:event.target.value})
	}

	handleLogin(event){
		var data={username:this.state.username,password:this.state.password};
		this.setState({errorMsg : null,busy : true});
		if(!data.username || !data.password){
			this.setState({errorMsg : 'Username or password should not be blank!!',busy : false});
			return;
		}

		fetch('https://carderockllc.com/rest-auth/login/',{
			method:'POST',
			body : JSON.stringify(data),
			headers : {
				'Content-type':'application/json'
			}
		}).then(res => res.text()).then(body => {
			body = JSON.parse(body);
			console.log(body)
			if(body.key){
				localStorage.setItem('key',body.key)
				this.setState({errorMsg : null,busy : false});
			}else{
				this.setState({errorMsg : 'Invalid Credentials',busy : false});
			}

		});


	}

	notify(msg){
		return ()=>{
			NotificationManager.warning(msg,'Info');
		}
	}

	render(){
		if(localStorage.getItem('key')){
			history.push('/main')
		}
		const {loggedIn,name,onAuthChange}=this.props
		let loginButton = null;
		let errorMsg = null;
		if(!this.state.busy){
			loginButton = <button type="submit" onClick={(event)=>this.handleLogin(event)} className="btn btn-block btn-lg btn-primary">Log In</button>;
		}else{
			loginButton = <button type="button" className="btn btn-block btn-lg btn-primary disabled" disabled><i className="fa fa-fw fa-spin fa-spinner"></i>Logging you in .. </button>
		}

		if(!this.state.errorMsg){
			errorMsg = null;
		}else{
			errorMsg = <p className="text-danger text-center">{this.state.errorMsg}</p>
		}
		return(
			<div className="container" style={{marginTop:100, marginBottom:150}}>
				<div className="col-md-4 col-md-offset-4">
					<Paper style={{paddingTop:2,paddingLeft:25,paddingRight:25,paddingBottom:2}}>
						<form onSubmit={(event)=>this.handleLogin(event)}>
							<h4 className="text-center" style={{color:'#68a6ff'}}>Log in to Carderock</h4><br/>
							{errorMsg}
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Username</label>
								<input onChange={(event)=>this.handleEmailChange(event)} type="text" className="form-control" id="exampleInputEmail1" placeholder="Username"/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Password</label>
								<input onChange={(event)=>this.handlePasswordChange(event)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
							</div>
							<div className="text-center">
								{loginButton}
								<p className="text-right" style={{marginTop:30}}>
									{/*<Link to="/forgot-password">Forgot Password?</Link>*/}
								</p>
							</div>
						</form>
					</Paper>
				</div>
		  </div>
		)
	}
}

LoginForm.propTypes = {
	auth : PropTypes.shape({
		loggedIn : PropTypes.bool.isRequired,
		name : PropTypes.string.isRequired,
		busy : PropTypes.bool.isRequired
	}),
	onAuthChange : PropTypes.func.isRequired,
	login: PropTypes.func.isRequired
}

const mapStateToProps = (state)=>{
	return {
		auth:{
			name : state.auth.name,
			loggedIn : state.auth.loggedIn,
			busy:state.auth.busy
		}
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		onAuthChange: ()=>dispatch(authStateChanged()),
		login : (email,password,errorHandler)=>dispatch(login(email,password,errorHandler))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
