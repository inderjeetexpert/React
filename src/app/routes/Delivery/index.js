import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import moment from 'moment'
import {deepOrange500,red500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import { LinkContainer } from 'react-router-bootstrap'
import Topnav from 'Components/Topnav'
import history from 'Root/history'
import Config from 'Root/config'
import TwoPersonBox from 'Components/TwoPersonBox'
import FamilyBox from 'Components/FamilyBox'
import TabThisWeekMenu from 'Components/TabThisWeekMenu'
const muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500
	},
});

class Delivery extends Component {
	constructor(props, context) {
		super(props, context)

	}
	render() {
		let page;
		let nextDay = Config.DeliveryDay; // Monday
		let current = moment();
		let currentDay = current.day();
		if (nextDay <= currentDay)
		nextDay += 7;
		let deliveryDate = current.day(nextDay).format("dddd MMMM Do");
		let yourBox = "";
		if(this.props.currentProductSelectionContext == "TWO_PERSON_PLAN"){
			yourBox = <TwoPersonBox/>
		}
		if(this.props.currentProductSelectionContext == "FAMILY_PLAN"){
			yourBox = <FamilyBox/>
		}
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<Topnav/>
					<div className="profile-title">
						<h1>Delivery for {deliveryDate}</h1>
					</div>
					<div className="col-md-12">
						<div className="back-to">
							<LinkContainer className="btn-blue pull-left" to="/profile">
								<button><i className="fa fa-angle-left "></i>Profile</button>
							</LinkContainer>
						</div>
					</div>
					<div className="tab-body" style={{padding:0}}>
						<div className="col-md-9">
							<div className="">
								<TabThisWeekMenu showAddButton={true} cssClass="tab-background"/>
							</div>
						</div>
						<div className="col-md-3">
							{yourBox}
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}
Delivery.propTypes = {
	currentProductSelectionContext : PropTypes.string.isRequired
}

const mapStateToProps = (state)=>{
	return {
		currentProductSelectionContext : state.context.currentProductSelectionContext
	}
}

export default connect(mapStateToProps)(Delivery)
