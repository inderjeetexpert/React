import React, {Component} from 'react';

import Topnav from '../../components/Topnav';
import CompanyListDet from './components/CompanyListDet';


class Company extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div>
					<Topnav/>
					<CompanyListDet/>
			</div>
		);
	}
}

export default Company;
