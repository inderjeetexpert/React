import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Autocomplete from 'react-google-autocomplete';
import 'react-datepicker/dist/react-datepicker.css';
import '../social-add.css';

class FbAdMarketingAdSet extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      "token": "",
      "campaign_id": "",
      "parent_id": "",
      "name": "",
      "billing_event": "IMPRESSIONS",
      "bid_amount": "",
      "lifetime_budget": "",
      "start_time": '',
      "end_time": '',
      "targeting": {
        "age_max": "",
        "age_min": "",
        "geo_locations": {
          "countries": []
        }
      },
      countries: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleStartDate(date){
    this.setState({
      'start_time': date
    });
  }
  handleEndDate(date){
    this.setState({
      'end_time': date
    });
  }

  handleSubmit(event){
    if(!this.state.isGoing){
      console.log(this.state);
    }
    event.preventDefault();
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
                        <input type="text" name="name" className="form-control" placeholder="Ad Set Name"/>
                      </div>
                      <p className="belowHeader">Bid Amount</p>
                      <div className="form-group">
                        <input type="number" name="bid_amount" className="form-control" placeholder="Bid Amount"/>
                      </div>

                      <div>
                        <p className="belowHeader">Audience</p>
                      </div>
                      <div>
                        <p>Locations</p>
                        <div className="row">
                          <div className="col-md-9">
                            <div className="locSrchBox">
                              <div className="dropdown">
                                <button className="btn btn-secondary campaign-responsive-btn">Action <span className="caret"></span></button>
                              </div>
                              <div className="serchBox">
                                <span className="ion-ios-location-outline"></span>
                                <Autocomplete
          												className="form-control"
          												onPlaceSelected={(place) => {
                                    let countryObj = place.address_components.filter(a=>{
                                      if(a.types[0]==="country"){
                                        return a;
                                      }
                                    })
                                    let country = {};
                                    country.fullName = countryObj[0].long_name;
                                    country.ShortName = countryObj[0].short_name;
                                    let countries = this.state.countries;
                                    countries.push(country);
                                    this.setState({countries:countries});
          												}}
                                  className="form-control"
          											/>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <button className="btn btn-primary campaign-responsive-btn">Browse By</button>
                          </div>
                        </div>
                        <ul className="locList">
                          {
                            this.state.countries.map((a, key)=>{
                              return(
                                <li key={key}>{a.fullName}
                                  <a href="#" className="close "> <span className="ion-ios-close-outline"></span></a>
                                </li>
                              )
                            })
                          }
                        </ul>

                        <p>Age <span className="ion-ios-information-outline ML8"></span></p>
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="form-group">
                              <input type="text" name="age_min" className="form-control" placeholder="Min Age"/>
                            </div>
                          </div>
                          <div className="col-xs-6">
                            <div className="form-group">
                              <input type="text" name="age_max" className="form-control" placeholder="Max Age"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="belowHeader">Budget & Scheudle</p>
                        <p>Budget <span className="ion-ios-information-outline ML8"></span></p>
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="form-group">
                              <select className="form-control">
                                <option value="daily">Daily Budget</option>
                                <option value="life_time">Life Time</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xs-6">
                            <div className="form-group">
                              <input type="text" name="lifetime_budget" className="form-control" placeholder="Budget"/>
                            </div>
                          </div>
                        </div>
                        <p>Schedule <span className="ion-ios-information-outline ML8"></span></p>
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="form-group">
                              {/* <input type="text" name="start_time" className="form-control" placeholder="Start Date"/> */}
                              <DatePicker className="form-control"
                                selected={this.state.start_time}
                                onChange={this.handleStartDate.bind(this)}
                                dateFormat="MM/DD/YYYY"
                                placeholderText="Start Date"
                              />
                            </div>
                          </div>
                          <div className="col-xs-6">
                            <div className="form-group">
                              <DatePicker className="form-control"
                                selected={this.state.end_time}
                                onChange={this.handleEndDate.bind(this)}
                                dateFormat="MM/DD/YYYY"
                                placeholderText="End Date"
                              />
                            </div>
                          </div>
                        </div>
                        <p className="infop">You will spend no more than $140 per week</p>
                      </div>
                      <div className="campaign-footer-box">
                        <button className="btn btn-primary">Next</button>
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

export default FbAdMarketingAdSet;
