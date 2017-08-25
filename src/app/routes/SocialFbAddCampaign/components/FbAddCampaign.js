import React from 'react';
import SocialAdMarketingFbAddCampaignAll from 'Components/SocialAdMarketingFbAddCampaignAll';
import moment from 'moment';

class FbAddCampaign extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		let title = moment().startOf('week').format("MMMM DD")+" - "+moment().endOf('week').format("MMMM DD");

		return (
			<div className="innerbody">
					<SocialAdMarketingFbAddCampaignAll/>
			</div>
		)
	}
}


export default FbAddCampaign;
