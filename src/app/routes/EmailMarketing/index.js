import React, { Component } from 'react';
import Topnav from '../../components/Topnav';
import EmailMarketingEditor from './components/EmailMarketingEditor';

class EmailMarketing extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div>
					<Topnav />
					<div>

							<EmailMarketingEditor />
					</div>
			</div>
		);
	}
}

export default EmailMarketing;
