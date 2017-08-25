import React from 'react';
import { Link } from 'react-router-dom';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './topnav.css';
import history from 'Root/history';

class Topnav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			busy: false
		};

	}

	handleLogout(event) {
		var data = {};
		fetch('https://carderockllc.com/rest-auth/logout/', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'application/json'
			}
		}).then(res => res.text()).then(body => {
			body = JSON.parse(body);
			console.log(body);
			if (body.detail) {

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
									<LinkContainer className="nav-business" to="/business">
											<NavItem eventKey={1} href="javascript:void(0)"><img src="../images/store.svg" />Search Business</NavItem>
									</LinkContainer>
									<LinkContainer className="nav-people" to="/people">
											<NavItem eventKey={2} href="javascript:void(0)"><img src="../images/contact.svg" />Search People</NavItem>
									</LinkContainer>
									<LinkContainer className="nav-company" to="/company">
											<NavItem className="nav-company" eventKey={10} href="javascript:void(0)"><img src="../images/group.svg" />Companies</NavItem>
									</LinkContainer>
									<LinkContainer className="nav-contact" to="/contact">
											<NavItem eventKey={4} href="javascript:void(0)"><img src="../images/email_marketing.svg" />Contact</NavItem>
									</LinkContainer>

									{/* <NavItem className="nav-contact" eventKey={4} href="javascript:void(0)">Contact</NavItem> */}
									<NavItem className="nav-contact" eventKey={4} href="javascript:void(0)"><img src="../images/mail.svg" />Leads-LeadScoring</NavItem>
									<LinkContainer className="nav-people" to="/emailMarketing">
											<NavItem eventKey={3} href="javascript:void(0)"><img src="../images/social_media.svg" />Email Marketing</NavItem>
									</LinkContainer>
									<LinkContainer className="nav-contact" to="/social">
											<NavItem eventKey={4} href="javascript:void(0)"><img src="../images/email_marketing.svg" />Social</NavItem>
									</LinkContainer>
									
									<LinkContainer className="nav-contact" to="/fbaddcampaign">
											<NavItem eventKey={4} href="javascript:void(0)"><img src="../images/money.svg" />Fb Add Campaign</NavItem>
									</LinkContainer>

					</Nav>
					<Nav pullRight>
						<NavItem className="nav-logout" eventKey={9} href="javascript:void(0)" onClick={this.handleLogout}><span className="user-image">AA</span> Logout</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

		);
	}
}


export default Topnav;
