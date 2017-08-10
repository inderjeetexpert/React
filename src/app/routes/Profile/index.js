import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deepOrange500,red500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Topnav from 'Components/Topnav'
import CommingSoon from 'Components/CommingSoon'
import Subscription from './components/Subscription'
import DeliveryAddress from './components/DeliveryAddress'
import Account from './components/Account'
import Payment from './components/Payment'
import history from 'Root/history'
const muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500
	},
});

class Profile extends Component {
	constructor(props, context) {
		super(props, context)
		if(!this.props.auth.loggedIn){
			history.push('/login')
		}
	}
	render() {
		let page;
		if(this.props.match.params.page){
			switch(this.props.match.params.page){
				case 'subscription':
					page=<Subscription/>
					break
				case 'delivery':
					page=<DeliveryAddress/>
					break
				case 'account':
					page=<Account/>
					break
				case 'payment':
					page=<Payment/>
					break
				default:
					page=<CommingSoon/>
			}
		}
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<Topnav/>
					<div className="profile-title">
						<h1>Account Settings</h1>
					</div>
					<div className="account-body">
						<div className="row">
							<div className="col-md-12">
								<div className="back-to">
									<LinkContainer className="btn-blue pull-left" to="/profile">
										<button><i className="fa fa-angle-left "></i>Profile</button>
									</LinkContainer>
								</div>
							</div>
							<div className="col-md-12">
								<Paper zDepth={1}>
									<Nav bsStyle="tabs" justified>
										<LinkContainer to="/profile/subscription">
											<NavItem><i className="fa fa-user"></i>Subscription</NavItem>
										</LinkContainer>
										<LinkContainer to="/profile/delivery">
											<NavItem><i className="fa fa-map-marker"></i>Delivery Address</NavItem>
										</LinkContainer>
										<LinkContainer to="/profile/account">
											<NavItem><i className="fa fa-database"></i>Account Details</NavItem>
										</LinkContainer>
										<LinkContainer to="/profile/payment">
											<NavItem><i className="fa fa-address-card"></i>Payment Details</NavItem>
										</LinkContainer>
									</Nav>
								</Paper>
							</div>
							<div className="col-md-12">
								<Paper zDepth={1} style={{minHeight:400}}>
									{page}
								</Paper>
							</div>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

const mapStateToProps = (state)=>{
	return {
		auth : state.auth
	}
}

export default connect(mapStateToProps)(Profile);
