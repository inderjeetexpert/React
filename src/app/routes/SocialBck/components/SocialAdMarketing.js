import React from 'react';
import SocialAdMarketingAll from 'Components/SocialAdMarketingAll'
import moment from 'moment';

class SocialAdMarketing extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		let title = moment().startOf('week').format("MMMM DD")+" - "+moment().endOf('week').format("MMMM DD");

		return (
			<div className="innerbody">
					<SocialAdMarketingAll/>
			</div>
		)
	}
}


export default SocialAdMarketing;
