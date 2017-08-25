import React, { Component } from 'react';
import Topnav from '../../components/Topnav';
import FbAddCampaign from './components/FbAddCampaign';

class SocialFbAddCampaign extends Component {
  constructor(props, context) {
		super(props, context);
	}

  render(){
    return(
      <div>
					<Topnav />
					<div>
							<FbAddCampaign/>
					</div>
			</div>
    )
  }
}

export default SocialFbAddCampaign;
