import React, { Component } from 'react';
import Topnav from '../../components/Topnav';
import ContactUs from './components/ContactUs';

class Contact extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div>
					<Topnav />
					<div>

							<ContactUs />
					</div>
			</div>
		);
	}
}

export default Contact;
