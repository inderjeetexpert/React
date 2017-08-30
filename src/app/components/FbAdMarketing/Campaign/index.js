import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import '../social-add.css';
import Config from '../../../config';

class FbAdMarketingCampaign extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [],
      objective: '',
      campaign_name: '',
      fbUserToken: '',
      tokenID: '',
      parent_id: ''
    };

    axios.get('http://www.carderockllc.com/api/v1/facebook/campaigns/objectives/').then(res=>{
        this.setState({options: res.data.data});
    }).catch(err=>{
        console.error(err);
    });

    this.getUserDetails('facebook');
    this.handleObjectiveChange = this.handleObjectiveChange.bind(this);
    this.handleCampaignName = this.handleCampaignName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUserDetails(prov){
    const url = Config.apiBaseUrl+'rest-auth/user/'
    axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
    axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.get(url).then(res=>res.data.social_accounts).then(social_accounts=>{
      const providers = social_accounts.filter(a=>{
        if(a.provider===prov){
          return a
        }
      }).map(a=>{
        return a.social_token[0];
      })
      this.setState({fbUserToken: providers[0].token});

      axios.get(Config.apiBaseUrl+'api/v1/facebook/adaccounts/')
      .then(res=>{
        res.data.data.map(b=>{
          if(b.token_id === providers[0].id){
            this.setState({tokenID: b.token_id});
            this.setState({parent_id: b.id});
          }
        })
      }).catch(err=>{
        console.log(err)
      });

    }).catch(err=>{
      console.log(err)
    });
  }

  handleObjectiveChange(event){
    this.setState({objective: event.target.value});
  }

  handleCampaignName(event) {
    this.setState({campaign_name: event.target.value});
  }

  handleSubmit(event){
    //alert(this.state.objective+' '+this.state.campaign_name);
    /*axios.post('http://carderockllc.com/api/v1/facebook/campaigns/?fields=name,objective,adlabels', {
      "token": this.state.tokenID,
      "parent_id": this.state.parent_id,
      "name": this.state.campaign_name,
      "objective": this.state.objective,
      "buying_type": "AUCTION",
      "adlabels": [
        {
          "name": this.state.campaign_name
        }
      ]
    })
    .then(function (response) {
      console.log('Success');
      console.log(response);
    })
    .catch(function (error) {
      console.log('Error');
      console.log(error);
    });*/
    this.props.history.push('/social/fbadaccount');
    event.preventDefault();
  }

  render(){
    return(
      <div className="container-fluid">
             <div className="row">
                    <div className="col-md-9">
                           <div className="add-campaign-box">
                               <div className="campaign-header-box">
                                  <form onSubmit={this.handleSubmit}>
                                    <div className="clearfix head-part">
                                             <div className="RHS">
                                                    <div className="">
                                                           <button className="btn btn-secondary rounded" type="button"><span className="ion-chevron-left"></span></button>
                                                           <button className="btn btn-primary campaign-responsive-btn" type="submit">Next</button>
                                                           <button className="btn btn-secondary campaign-responsive-btn" type="button">Discard</button>
                                                    </div>
                                             </div>
                                             <div className="LHS">
                                                    <div className="hdIcon">
                                                           <i className="ion-social-facebook"></i>
                                                    </div>
                                             </div>
                                      </div>
                                      <div className="social-small-form">
                                             <h3>Campaign </h3>
                                             <p className="belowHeader">What is your objective ?</p>

                                                    <div className="form-group">
                                                           <select className="form-control" name="obj" onChange={this.handleObjectiveChange} required>
                                                                  <option value="">What is your marketing objective?</option>
                                                                  {this.state.options.map((d,key) => {
                                                                      return (
                                                                        <option value={d} key={key}>{d}</option>
                                                                      )
                                                                    })}
                                                           </select>
                                                    </div>
                                                    <div className="form-group">
                                                           <input type="text" className="form-control" onChange={this.handleCampaignName} name="cn" placeholder="Campaign name" required />
                                                           <div className="info-icon">
                                                                  <i className="ion-ios-information-outline"></i>
                                                           </div>
                                                    </div>


                                      </div>
                                      <div className="campaign-footer-box">
                                             <button type="submit" className="btn btn-primary">Next</button>
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

export default withRouter(FbAdMarketingCampaign);
