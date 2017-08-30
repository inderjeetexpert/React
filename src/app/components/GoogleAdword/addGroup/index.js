import React from 'react';
import moment from 'moment';
import Autocomplete from 'react-google-autocomplete';

class GoogleAdGroup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      adGroupObj: {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    let self = this
    let obj = self.state.adGroupObj
    obj[event.target.name] = event.target.value
    this.setState({ adGroupObj: obj})
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.adGroupObj);
  }

  render(){

    return(
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <div className="add-campaign-box">
                <form onSubmit={this.handleSubmit}>
                  <div className="campaign-header-box">
                    <div className="clearfix head-part">
                      <div className="RHS">
                        <div>
                          <button className="btn btn-secondary rounded"><span className="ion-chevron-left"></span></button>
                          <button className="btn btn-primary campaign-responsive-btn">Next</button>
                          <button className="btn btn-secondary campaign-responsive-btn">Discard</button>
                        </div>
                      </div>
                      <div className="LHS">
                        <h3 className="PT0">Ad Setup</h3>
                      </div>
                    </div>
                    <div className="social-small-form">
                      <p className="belowHeader">Ad Set Name</p>
                      <div className="form-group">
                        <input type="text" name="name" onChange={(event) => this.handleInputChange(event)} className="form-control" placeholder="Ad Set Name"/>
                      </div>
                      <p className="belowHeader">Bid Amount</p>
                      <div className="form-group">
                        <input type="number" name="bid_amount" onChange={(event) => this.handleInputChange(event)} className="form-control" placeholder="Bid Amount"/>
                      </div>

                      <div>
                        <div className="row">
                          <div className="col-md-9">
                            <div className="locSrchBox">
                              <div className="dropdown">
                                <button type="submit" className="btn btn-secondary campaign-responsive-btn">Create</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
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
      </div>
    )
  }
}

export default GoogleAdGroup;
