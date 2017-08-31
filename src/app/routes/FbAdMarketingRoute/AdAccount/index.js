import React from 'react';
import Topnav from '../../../components/Topnav';
import FbAdMarketingAdAccount from '../../../components/FbAdMarketing/AdAccount';
import moment from 'moment';

class FbAdMarketingRouteAdAccount extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    let title = moment().startOf('week').format("MMMM DD")+" - "+moment().endOf('week').format("MMMM DD");
    return (
  			<div className="innerbody">
          <Topnav />
          <div>
            <FbAdMarketingAdAccount />
          </div>
  			</div>
    )
  }
}

export default FbAdMarketingRouteAdAccount;
