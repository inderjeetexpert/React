import React from 'react'
import GoogleLogin from 'react-google-login';
import GoogleContacts from 'google-contacts'
import axios from 'axios'
import jsonp from 'jsonp'
const script = document.createElement("script");

const getGoogleContacts=(email,token)=>{
  const url = "https://www.google.com/m8/feeds/contacts/default/full?alt=json"
  //const url = "https://people.googleapis.com/v1/people/me/connections"
  axios.defaults.headers.common['Authorization'] = "Bearer " + token
  axios.get(url).then(res=>{
    console.log(res);
  }).catch(err=>{
    console.error(err);
  })
}
class ImportGoogle extends React.Component{
  constructor(){
    super()
    this.state={
    }
  }

  responseGoogle(response){
    console.log(response);
    if(response.accessToken){
      getGoogleContacts(response.profileObj.email,response.accessToken)
    }
  }


render(){
return(
  <GoogleLogin
      clientId="128034852494-of2julhgcpoep20bhu52g5dipo4g3qv3.apps.googleusercontent.com"
      buttonText="G+"
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoogle}
  />
)
}
}
export default ImportGoogle
