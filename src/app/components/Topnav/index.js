import React from 'react';
import { Link } from 'react-router-dom';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Style from './style';
import history from 'Root/history';

class Topnav extends React.Component {

	constructor(props) {
		super(props);
		this.state={
			busy : false
		};

	}

	handleLogout(event){
		var data={};
		fetch('https://carderockllc.com/rest-auth/logout/',{
			method:'POST',
			body : JSON.stringify(data),
			headers : {
				'Content-type':'application/json'
			}
		}).then(res => res.text()).then(body => {
			body = JSON.parse(body);
			console.log(body);
			if(body.detail){

				console.log(body.detail);
				localStorage.clear();
				history.push('/login')
			}

		});


	}


	render() {



		return (
			<Navbar collapseOnSelect fluid>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="javascript:void(0)">Carderock</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<LinkContainer to="/main">
							<NavItem eventKey={1} href="javascript:void(0)">Business</NavItem>
						</LinkContainer>
						<LinkContainer to="/people">
							<NavItem eventKey={2} href="javascript:void(0)">People</NavItem>
						</LinkContainer>
						<NavItem eventKey={3} href="javascript:void(0)">Price</NavItem>
						<NavItem eventKey={4} href="javascript:void(0)">Email Marketing</NavItem>
						<NavItem eventKey={5} href="javascript:void(0)">Social Media Marketing</NavItem>
						<NavItem eventKey={6} href="javascript:void(0)">Marketing Analysis</NavItem>
						<NavItem eventKey={7} href="javascript:void(0)">Dashboard</NavItem>
						<NavItem eventKey={8} href="javascript:void(0)">Themes</NavItem>
					</Nav>
					<Nav pullRight>
						<NavItem eventKey={9} href="javascript:void(0)" onClick={this.handleLogout}><i className="ion-ios-arrow-thin-left"></i> Logout</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

		);
	}
}


export default Topnav;
