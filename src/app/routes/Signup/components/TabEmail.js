import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import validator from 'validator'
import {submitUserInfo,emailFilled,icompleteEmail} from 'Actions/signupActions' //Actions are defined in Webpack Config resolve alias

class TabEmail extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			email : '',
			postalCode : '',
			error:null,
			busy:false
		}
	}

	handleEmailChange = (e)=>{
		this.setState({email:e.target.value})
	}

	handlePostalCodeChange = (e)=>{
		let postalCode = e.target.value.replace(/ /g,'').toUpperCase().substring(0,6)
		this.setState({postalCode})
	}

	componentWillReceiveProps(){
		this.setState({email : this.props.signup.userInfo.email , postalCode : this.props.signup.userInfo.postalCode});
	}

	handleSubmit = (e)=>{
		this.setState({error:null})
		e.preventDefault();
		this.setState({busy:true})
		this.props.submitUserInfo(this.state.email,this.state.postalCode,(res)=>{
			if(!res.success){
				this.setState({error:res.message})
			}
			this.setState({busy:false})
		});
	}



	render(){
		let errorMsg='';
		if(this.state.error){
			errorMsg=<p className="text-danger"><strong>{this.state.error}</strong></p>
		}
		let submitButton=(
			<button type="submit" className="btn btn-default">Get started</button>
		)

		if(this.state.email==='' || this.state.postalCode===''){
			submitButton=(
				<button type="button" disabled className="btn btn-default">Get started</button>
			)
		}
		if(this.state.busy){
			submitButton=(
				<button type="button" disabled className="btn btn-default">Validating Info <i className="fa fa-fw fa-spin fa-spinner"></i></button>
			)
		}
		return(
			<div className="tab-body">
				<h1>Start Your Cooking Journey</h1>
				<strong>Enter your email and postal code to get started </strong>
				{errorMsg}
				<form className="form-inline" onSubmit={this.handleSubmit}>

					<div className="form-group">
						<input type="email" className="form-control" onChange={this.handleEmailChange} value={this.state.email} placeholder="Email"/>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" onChange={this.handlePostalCodeChange} value={this.state.postalCode} placeholder="Postal Code"/>
					</div>
					{submitButton}
				</form>
				<div className="row">
					<div className="col-md-6">
						<ul className="cooking-journy">
							<li>
								<h4>No Commitment</h4>
								<p>Only get deliveries when it is convenient for you.
								Choose your recipes</p>
							</li>
							<li>
								<h4>Choose your recipes</h4>
								<p>Select which recipes you would like delivered. You can choose from our 2-Person or Family Plans. Menus are personalized to your taste preferences.</p>
							</li>
							<li>
								<h4>Convenient Delivery</h4>
								<p>Ingredients are carefully packaged in a refrigerated box so food stays fresh even if you are not home when we deliver.</p>
							</li>
						</ul>
					</div>
					<div className="col-md-6">
						<img className="img-responsive" src="img/chef.jpg"/>
					</div>
				</div>
			</div>
		)
	}
}

TabEmail.propTypes = {
	signup:PropTypes.shape({
		userInfo:PropTypes.shape({
			email : PropTypes.string.isRequired,
			postalCode : PropTypes.string.isRequired
		})
	}),
	submitUserInfo:PropTypes.func.isRequired
}

const mapStateToProps = (state)=>{
	return {
		signup : {
			userInfo : {
				email : state.signup.userInfo.email,
				postalCode : state.signup.userInfo.postalCode
			}
		}
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		submitUserInfo : (email,postalCode,errorHandler)=>dispatch(submitUserInfo(email,postalCode,errorHandler)),
		emailFilled : ()=>dispatch(emailFilled()),
		incomplteEmail : (value)=>dispatch(icompleteEmail(value))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(TabEmail)
