import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Style from './style';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {logout,authStateChanged} from 'Actions/authActions'
import fetch from 'node-fetch';

class Topnav extends React.Component {

	constructor(props) {
		super(props);
		this.state={
			busy : false
		};
		this.props.onAuthChange();
	}


	render() {
		let loginNav=null;
		let busy = null;
		let topNav = null;
		if(this.props.auth && this.props.auth.busy){
			busy = <span><i className="fa fa-fw fa-pulse fa-spinner"></i>Logging out...</span>;
		}
		if(this.props.auth && this.props.auth.loggedIn){
			loginNav=(
				<Nav pullRight>
					<NavItem eventKey={7} href="javascript:void(0)">
						{busy}
					</NavItem>
					<NavDropdown eventKey={6} title={this.props.auth.name} id="basic-nav-dropdown">
						<LinkContainer to="/profile">
							<MenuItem eventKey={6.1}>Profile</MenuItem>
						</LinkContainer>
						<MenuItem divider />
						<MenuItem eventKey={6.4} onClick={this.props.logout}>Logout</MenuItem>
					</NavDropdown>
				</Nav>
			);
			topNav=(
				<Nav>
					<LinkContainer to="/menu">
						<NavItem eventKey={1}>
							On The Menu
						</NavItem>
					</LinkContainer>
					<LinkContainer to="/learn">
						<NavItem eventKey={2}>
							Learn More
						</NavItem>
					</LinkContainer>
					<LinkContainer to="/price">
						<NavItem eventKey={3}>
							Plan & Pricing
						</NavItem>
					</LinkContainer>
					<LinkContainer to="/profile/subscription">
						<NavItem eventKey={3}>
							Account Settings
						</NavItem>
					</LinkContainer>
					<LinkContainer to="/gift">
						<NavItem eventKey={4}>
							Gift
						</NavItem>
					</LinkContainer>
					<LinkContainer to="/refer">
						<NavItem eventKey={5}>
							Refer A Friend
						</NavItem>
					</LinkContainer>
				</Nav>
			)
		}else{
			loginNav=(
				<Nav pullRight>

					<LinkContainer to="/signup">
						<NavItem eventKey={8}>
							<i className="fa fa-arrow-left" aria-hidden="true">
								LogOut
							</i>
						</NavItem>
					</LinkContainer>
				</Nav>
			);
			topNav=(
				<Nav>
					<LinkContainer to="/menu">
						<NavItem eventKey={1}>
							Business
						</NavItem>
					</LinkContainer>
					<LinkContainer to="/learn">
						<NavItem eventKey={2}>
							People
						</NavItem>
					</LinkContainer>
					<LinkContainer to="/price">
						<NavItem eventKey={3}>
							Prices
						</NavItem>
					</LinkContainer>
					<LinkContainer to="/gift">
						<NavItem eventKey={4}>
							Email Marketing
						</NavItem>
					</LinkContainer>
					<LinkContainer to="/refer">
						<NavItem eventKey={5}>
							Social Medial Marketing
						</NavItem>
					</LinkContainer>
					<LinkContainer to="/refer">
						<NavItem eventKey={5}>
							Themes
						</NavItem>
					</LinkContainer>
					<LinkContainer to="/refer">
						<NavItem eventKey={5}>
							Dashboard
						</NavItem>
					</LinkContainer>
				</Nav>
			)
		}
		return (
			<Navbar collapseOnSelect className="navbar-fixed-top navbar-default">
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">

							<b>CardeRock</b>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<span>{topNav}</span>
					<span>{loginNav}</span>
				</Navbar.Collapse>
				<NotificationContainer/>
			</Navbar>
		);
	}
}

Topnav.propTypes = {
	auth : PropTypes.shape({
		name : PropTypes.string.isRequired,
		loggedIn : PropTypes.bool.isRequired,
		busy : PropTypes.bool.isRequired
	}),
	onAuthChange : PropTypes.func.isRequired,
	logout : PropTypes.func.isRequired
}

const mapStateToProps = (state)=>{
	return {
		auth:{
			name : state.auth.name,
			loggedIn : state.auth.loggedIn,
			busy: state.auth.busy
		}
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		onAuthChange: ()=>dispatch(authStateChanged()),
		logout : ()=>{
			dispatch(logout())
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Topnav);
