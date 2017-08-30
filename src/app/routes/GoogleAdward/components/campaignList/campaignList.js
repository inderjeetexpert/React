import React from 'react';
import CampaignList from 'Components/GoogleAdword/CampaignList'
import moment from 'moment'

class CampaignListDit extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let title = moment().startOf('week').format("MMMM DD") + " - " + moment().endOf('week').format("MMMM DD");

		return (
			<div className="innerbody">
					<div className="container-fluid">
            <div className="tab-body">
              <CampaignList cssClass="tab-background wekly-bg on-the-menu" />
					  </div>
				</div>
			</div>
		)
	}
}


export default CampaignListDit;
