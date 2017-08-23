import React from 'react';
import GoogleLogin from 'react-google-login';
import GoogleContacts from 'google-contacts';
import axios from 'axios';
import jsonp from 'jsonp'
import Config from '../../config';
import { LinkContainer } from 'react-router-bootstrap';
//const script = document.createElement("script");

// const getGoogleContacts=(email,token)=>{
//   const url = "https://carderockllc.com/rest-auth/google/connect/"
//   //const url = "https://people.googleapis.com/v1/people/me/connections"   axios.defaults.headers.common['Authorization'] = "Bearer " + token
//    axios.post(url).then(res=>{
//    console.log(res);
//   }).catch(err=>{
//    console.error(err);
//   })
// }

class ImportGoogle extends React.Component{
  constructor(){
    super()
    this.state={
      data : [],
      errorMsg : null,
      datailInfo: null,
			busy : false,
			recordcount: 0,

    }
  }

  responseGoogle(response){
    console.log('responseGoogle:',response);
    const data = { code:response.code};
    axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
    axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.post(Config.apiBaseUrl+'rest-auth/google/connect/', data)
    .then(res=>{
        console.log('rest-auth/google/connect/',res)
       return res.data
     })
     .then(data=>{
       console.log(data)
       return axios.post(Config.apiBaseUrl+'api/v1/contacts/import/google/',{code:data.key} )
     }).then(res=>{
       console.log(res)
       //TODO : do something with final resolve
     })
     .catch(err=>err)
  }


render(){
return(
  // <a className="btn btn-default btn-lg mr-15" href="https://carderockllc.com/accounts/google/login/?next=http%3A%2F%2Flocalhost%3A3000%2F%23%2Fcontact%2Fmarketing%2Fsocial%2F&process=connect&action=reauthenticate">
  //     Login with Google
  // </a>
      <a className="btn btn-default" href="https://carderockllc.com/accounts/google/login/?next=http%3A%2F%2F13.59.44.47%2F%23%2Fcontact%2F&process=connect&action=reauthenticate">
          Login with Google
      </a>

)
}
}
export default ImportGoogle
