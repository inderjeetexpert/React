import React from 'react';
import './social-add.css';
import Config from '../../config';
import SocialAdMarketingFbBtn from './SocialAdMarketingFbBtn';


export default class SocialAdMarketingFbAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }



  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="add-campaign-box">
              <div className="campaign-header-box">
                <div className="clearfix head-part">
                  <div className="RHS">
                    <div className="">
                      <button className="btn btn-secondary rounded"><span className="ion-chevron-left"></span></button>
                      <button className="btn btn-primary campaign-responsive-btn">Next</button>
                      <button className="btn btn-secondary campaign-responsive-btn">Discard</button>
                    </div>
                  </div>
                  <div className="LHS">
                    <h3 className="PT0">Connect Account</h3>
                    <p className="belowHeader">Login with social media</p>
                  </div>
                </div>
                <div>
                  <ul className="shareGroup">
                    <li>
                      <SocialAdMarketingFbBtn />
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-googleplus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
