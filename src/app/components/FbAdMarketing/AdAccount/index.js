import React from 'react';
import { withRouter } from 'react-router-dom';
import '../social-add.css';

class FbAdMarketingAdAccount extends React.Component {
  constructor(props){
    super(props)

    this.state = {}
  }

  handleSubmit(event){
    this.props.history.push('/social/fbadset');
    event.preventDefault();
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <div className="add-campaign-box">
              <div className="campaign-header-box">
                <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="clearfix head-part">
                  <div className="RHS">
                    <div className="pull-right">
                      <button className="btn btn-secondary rounded"><span className="ion-chevron-left"></span></button>
                      <button className="btn btn-primary campaign-responsive-btn">Next</button>
                      <button className="btn btn-secondary campaign-responsive-btn">Discard</button>
                    </div>
                  </div>
                  <div className="LHS">
                    <div className="hdIcon">
                      <i className="ion-social-facebook"></i>
                    </div>
                  </div>
                </div>
                <div className="social-small-form">
                  <h3>Ad Account</h3>
                  <p className="belowHeader">Set up your ad account ?</p>

                    <div className="form-group">
                      <select className="form-control">
                        <option>What is your marketing objective?</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                      <div className="level">ACCOUNT COUNTRY</div>
                    </div>
                    <div className="form-group">
                      <select className="form-control">
                        <option>Country</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>

                </div>
                <div className="campaign-footer-box">
                  <button className="btn btn-primary">Next</button>
                </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="generation2">
              <h4>Lead Generation</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(FbAdMarketingAdAccount);
