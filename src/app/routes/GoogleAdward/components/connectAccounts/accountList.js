import React from 'react';
import GoogleConnectedAccounts from 'Components/GoogleAdword/ConnectedAccounts'
import moment from 'moment'

class ConnectedAccountList extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let title = moment().startOf('week').format("MMMM DD") + " - " + moment().endOf('week').format("MMMM DD");

		return (
			<div className="innerbody">
					<div className="container-fluid">
            <div className="tab-body">
              <GoogleConnectedAccounts cssClass="tab-background wekly-bg on-the-menu" />
					  </div>
				</div>
			</div>
		)
	}
}


export default ConnectedAccountList;
