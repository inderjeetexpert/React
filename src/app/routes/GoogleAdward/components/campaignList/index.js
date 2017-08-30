import React, {Component} from 'react';

import Topnav from '../../../../components/Topnav';
import CampaignListDet from './campaignList';


class CampaignList extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div>
					<Topnav />
					<div>
						<CampaignListDet />
					</div>
			</div>
		);
	}
}

export default CampaignList;
