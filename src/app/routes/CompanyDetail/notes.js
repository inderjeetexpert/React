import React, { Component } from 'react';
import Topnav from 'Components/Topnav';
import CompanyDetailall from 'Components/CompanyDetailall'

class CompanyDetail extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div>
					<Topnav />
					<div className="innerbody">
							<CompanyDetailall/>
					</div>
			</div>
		);
	}
}

export default CompanyDetail;
