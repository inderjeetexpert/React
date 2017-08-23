import React from 'react';
import GoogleLogin from 'react-google-login';
import GoogleContacts from 'google-contacts';
import axios from 'axios';
import jsonp from 'jsonp'
import Config from '../../config';
import { LinkContainer } from 'react-router-bootstrap';

class ImportContacts extends React.Component{
  constructor(){
    super()
    this.state={
      data : [],
      errorMsg : null,
      datailInfo: null,
      busy : false,
      recordcount: 0,

    }
    this.handleImportContacts = this.handleImportContacts.bind(this)
    this.importAllProviders = this.importAllProviders.bind(this)
  }

  handleImportContacts(){

    const url = Config.apiBaseUrl+'rest-auth/user/'
    axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
    axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.get(url).then(res=>res.data.social_accounts).then(social_accounts=>{
      const providers = social_accounts.map(a=>a.provider)
      this.importAllProviders(providers)
    }).catch(err=>{
      console.log(err)
    })
  }

  importAllProviders(providers){
    axios.all(providers.map(p=>this.importProvider(p))).then(res=>{
      console.log(res)
      this.props.refreshList()
    }).catch(err=>{
      console.log(err)
    })
  }

  importProvider(providerType){
    const url = Config.apiBaseUrl+'api/v1/contacts/import/'+providerType
    axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
    //axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
    return axios.post(url)
  }




  render(){
    return(
      <a className="btn btn-default" href="javascript:void(0)" onClick={this.handleImportContacts}>
          Import Contacts
      </a>
    )
  }
}
export default ImportContacts
