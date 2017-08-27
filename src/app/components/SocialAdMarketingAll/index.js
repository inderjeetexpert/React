import React from 'react';
import SocialAdMarketingFbBtn from './SocialAdMarketingFbBtn';


export default class SocialAdMarketingFbAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (
      <div>
        <div className="no-data-center network">
          <img src="../images/network.png" />
          <p className="social-align-text">Login with social media</p>
        </div>
        <div id="social-platforms">
          <SocialAdMarketingFbBtn/>
          <a className="btn btn-icon btn-twitter" href="javascript:void(0)"><i className="ion-social-twitter"></i><span>Twitter</span></a>
          <a className="btn btn-icon btn-googleplus" href="javascript:void(0)"><i className="ion-social-googleplus"></i><span>Google+</span></a>
          <a className="btn btn-icon btn-pinterest" href="javascript:void(0)"><i className="ion-social-pinterest"></i><span>Pinterest</span></a>
          <a className="btn btn-icon btn-linkedin" href="javascript:void(0)"><i className="ion-social-linkedin"></i><span>LinkedIn</span></a>
        </div>
      </div>
    )
  }
}
