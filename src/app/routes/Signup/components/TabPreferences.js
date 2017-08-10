import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import TwoPersonSubscriptionCard from 'Components/TwoPersonSubscriptionCard'
import FamilySubscriptionCard from 'Components/FamilySubscriptionCard'
import {changeTab} from 'Actions/signupActions'

class TabPreferences extends React.Component{
	constructor(props){
		super(props)
		this.state={
		}
	}

	render(){
		let nextButton="";
		if(this.props.finalSubscription && this.props.finalSubscription.id){
			nextButton =<button onClick={()=>this.props.changeTab('tab3')} className="btn btn-success btn-block btn-lg" role="button">Next : Select Meal</button>
		}
		return(
			<div className="tab-body plan-box">
				<h1>Choose your Plan</h1>
				<strong>Select one of the plan </strong>
				<div className="row">
					<div className="col-md-12 margin-15">
						<TwoPersonSubscriptionCard image="img/two-person.jpg"/>
					</div>
					<div className="col-md-12 margin-15">
						<FamilySubscriptionCard image="img/family-person.jpg"/>
					</div>
					<div className="col-md-4 col-md-offset-4" style={{marginTop:15}}>
						{nextButton}
					</div>
				</div>
			</div>
		)
	}
}

TabPreferences.propTypes = {
	finalSubscription : PropTypes.object.isRequired,
	changeTab : PropTypes.func.isRequired
}

const mapStateToProps=(state)=>{
	return{
		finalSubscription : state.selectedSubscription
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		changeTab : (tabName)=>dispatch(changeTab(tabName))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(TabPreferences)
