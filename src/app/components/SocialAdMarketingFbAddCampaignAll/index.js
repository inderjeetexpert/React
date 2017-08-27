import React from 'react';
import './social-add.css';

class SocialAdMarketingFbAddCampaignAll extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <div className="add-campaign-box">
              <div className="campaign-header-box">
                <i className="ion-social-facebook pull-left"></i>
                <div className="pull-right">
                  <button className="btn btn-secondary rounded"><span className="ion-chevron-left"></span></button>
                  <button className="btn btn-primary">Next</button>
                  <button className="btn btn-secondary">Discard</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="generation">
              <h4>Lead Generation</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SocialAdMarketingFbAddCampaignAll
