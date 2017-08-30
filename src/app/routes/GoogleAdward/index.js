import React, { Component } from 'react';
import Topnav from '../../components/Topnav';
import CreateCampaign from '../../components/GoogleAdword/createCampaign';


class Campaigns extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div>
					<Topnav />
					<div>
							<CreateCampaign />
					</div>
			</div>
		);
	}
}

export default Campaigns;
