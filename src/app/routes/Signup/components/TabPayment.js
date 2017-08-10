import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import UserInfo from 'Components/UserInfo'
import OrderTwoPerson from 'Components/OrderTwoPerson'
import OrderFamily from 'Components/OrderFamily'

class TabPayment extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let OrderBox = "";
		if(this.props.currentProductSelectionContext == "TWO_PERSON_PLAN"){
			OrderBox = <OrderTwoPerson/>
		}
		if(this.props.currentProductSelectionContext == "FAMILY_PLAN"){
			OrderBox = <OrderFamily/>
		}
		return(
			<div className="tab-body">
				<h1>Checkout</h1>
				<div className="row">
					<div className="col-md-8">
						<UserInfo/>
					</div>
					<div className="col-md-4">
						{OrderBox}
					</div>
				</div>
			</div>
		)
	}
}

TabPayment.propTypes = {
	currentProductSelectionContext : PropTypes.string.isRequired
}

const mapStateToProps = (state)=>{
	return {
		currentProductSelectionContext : state.context.currentProductSelectionContext
	}
}

export default connect(mapStateToProps)(TabPayment)
