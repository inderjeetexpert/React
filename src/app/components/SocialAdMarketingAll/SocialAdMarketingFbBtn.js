import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Config from '../../config';

class SocialAdMarketingFbBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    const params = window.location.hash.split('?');
    if(params.length===2){
      this.sendToFacebook(params[1]);
      window.location.hash=params[0];
    }

    this.sendToFacebook = this.sendToFacebook.bind(this);
  }

  sendToFacebook(prov){
    const url = Config.apiBaseUrl+'rest-auth/user/'
    axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
    axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.get(url).then(res=>res.data.social_accounts).then(social_accounts=>{
      const providers = social_accounts.filter(a=>{
        if(a.provider===prov){
          return a
        }
      }).map(a=>{
        return a.provider
      })
      console.log(providers)
      if(providers.length===0){
        window.location.replace("https://carderockllc.com/custom/accounts/facebook/login/?process=connect&token="+localStorage.getItem('key')+"&action=reauthenticate&next=http%3A%2F%2Flocalhost%3A3000%2F%23%2Fsocial%3F"+prov)
      }else{
        this.props.history.push('/social/fbaddcampaign');
      }
    }).catch(err=>{
      console.log(err)
    });
  }

  render(){
    return(
      <a href="javascript:void(0)" onClick={()=>this.sendToFacebook('facebook')}>
        <i className="ion-social-facebook"></i>
      </a>
    )
  }
}

//export default SocialAdMarketingFbBtn;
export default withRouter(SocialAdMarketingFbBtn);
