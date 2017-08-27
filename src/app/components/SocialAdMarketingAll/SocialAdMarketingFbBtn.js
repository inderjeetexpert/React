import React from 'react';

class SocialAdMarketingFbBtn extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  sendToFacebook(){
    let url = "https://carderockllc.com/custom/accounts/facebook/login/?process=connect&token="+localStorage.getItem('key')+"&action=reauthenticate&next=http%3A%2F%2Flocalhost%3A3000%2F%23%2Fsocial";
    window.location.href = url;
  }

  render(){
    return(
      <a className="btn btn-icon btn-facebook" href="javascript:void(0)" onClick={this.sendToFacebook}>
        <i className="ion-social-facebook"></i><span>Facebook</span>
      </a>
    )
  }
}

export default SocialAdMarketingFbBtn
