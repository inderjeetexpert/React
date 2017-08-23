import React, { Component } from 'react';
import Topnav from '../../components/Topnav';
import CompanyDetailList from './components/CompanyDetailList';

class CompanyDetail extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div>
					<Topnav />
					<div>

							<CompanyDetailList />
					</div>
			</div>
		);
	}
}

export default CompanyDetail;
