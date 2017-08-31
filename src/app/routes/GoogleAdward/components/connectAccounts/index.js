import React, {Component} from 'react';

import Topnav from '../../../../components/Topnav';
import AccountList from './accountList';


class GoogleAccounts extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div>
					<Topnav />
					<div>
						<AccountList />
					</div>
			</div>
		);
	}
}

export default GoogleAccounts;
