import React from 'react';
import Topnav from '../../../components/Topnav';
import FbAdMarketingCampaign from '../../../components/FbAdMarketing/Campaign';
import moment from 'moment';

class FbAdMarketingRouteCampaign extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let title = moment().startOf('week').format("MMMM DD")+" - "+moment().endOf('week').format("MMMM DD");
    return (
  			<div className="innerbody">
          <Topnav />
          <div>
            <FbAdMarketingCampaign />
          </div>
  			</div>
    )
  }
}

export default FbAdMarketingRouteCampaign;
