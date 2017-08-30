import React from 'react';
import Topnav from '../../../components/Topnav';
import FbAdMarketingAdSet from '../../../components/FbAdMarketing/AdSet';

class FbAdMarketingRouteAdSet extends React.Component {
  constructor(props){
    super()

    this.state = {}
  }

  render(){
    return(
      <div className="innerbody">
        <Topnav />
        <div>
          <FbAdMarketingAdSet />
        </div>
      </div>
    )
  }
}

export default FbAdMarketingRouteAdSet;
