import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import TabEmail from './TabEmail'
import TabPreferences from './TabPreferences'
import TabMealSelection from './TabMealSelection'
import TabPayment from './TabPayment'
import {submitUserInfo,emailFilled,changeTab} from 'Actions/signupActions'

class SignUpModule extends React.Component{
	constructor(props){
		super(props)
		this.state = {}
	}

	handleTabChange = (value)=>{
		this.props.changeTab(value)
	}

	render(){

		return(
			<div className="innerbody">
				<div className="container">
					<Tabs className="tab-background" onChange={this.handleTabChange} value={this.props.signup.selectedTab}>
						<Tab  label="1.Email & postal" value="tab1" disabled={false}>
							<TabEmail/>
						</Tab>
						<Tab label="2. Preferences" value="tab2" disabled={this.props.signup.isIncompleteEmail}>
							<TabPreferences/>
						</Tab>
						<Tab label="3. Meal Selection" value="tab3" disabled={this.props.signup.isIncompleteEmail||this.props.signup.isIncompletePreferences}>
							<TabMealSelection/>
						</Tab>
						<Tab label="4. Payment" value="tab4" disabled={this.props.signup.isIncompleteEmail||this.props.signup.isIncompletePreferences||this.props.signup.isIncompleteMeal}>
							<TabPayment/>
						</Tab>
					</Tabs>
				</div>
			</div>
		)
	}
}

SignUpModule.propTypes={
	signup : PropTypes.shape({
		selectedTab : PropTypes.string.isRequired,
		isIncompleteEmail : PropTypes.bool.isRequired,
		isIncompletePreferences : PropTypes.bool.isRequired,
		isIncompleteMeal : PropTypes.bool.isRequired
	})
}

const mapStateToProps = (state)=>{
	return {
		signup:{
			selectedTab : state.signup.selectedTab,
			isIncompleteEmail : state.signup.isIncompleteEmail,
			isIncompletePreferences : state.signup.isIncompletePreferences,
			isIncompleteMeal : state.signup.isIncompleteMeal,
			userInfo : state.signup.userInfo
		}
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		submitUserInfo : (email,postalCode,errorHandler)=>{
			return dispatch(submitUserInfo(email,postalCode,errorHandler))
		},
		emailFilled : ()=>dispatch(emailFilled()),
		changeTab : (tabName)=>dispatch(changeTab(tabName))
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(SignUpModule);
