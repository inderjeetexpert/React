import React from 'react';
import GoogleLogin from 'react-google-login';
import GoogleContacts from 'google-contacts';
import axios from 'axios';
import jsonp from 'jsonp'
import Config from '../../config';



class ImportGoogle extends React.Component{

  constructor(props){
    super(props)
    this.state={
      data : [],
      errorMsg : null,
      datailInfo: null,
			busy : false,
			recordcount: 0,
    }
    this.handleImportContacts = this.handleImportContacts.bind(this)
    this.importAllProviders = this.importAllProviders.bind(this)

    const params = window.location.hash.split('?');
    if(params.length===2){
      this.handleImportContacts(params[1])
      window.location.hash=params[0]
    }

  }



  handleImportContacts(prov){
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
        window.location.replace('https://carderockllc.com/custom/accounts/'+prov+'/login/?process=connect&token='+localStorage.getItem('key')+'&action=reauthenticate&next=http%3A%2F%2F13.59.44.47%2F%23%2Fcontact%2F%3F'+prov)
      }else{
        this.importAllProviders(providers.slice(0,1))
      }
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
    const url = Config.apiBaseUrl+'api/v1/contacts/import/'+providerType+'/'
    axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    return axios.post(url)
  }

render(){

return(
  <div className="col-md-12">
      <div className="col-auto pull-right">
          <a className="btn btn-default" href="javascript:void(0)" onClick={()=>this.handleImportContacts('google')}>
              Import contacts from Google
          </a>
      </div>
      <div className="col-auto pull-right">
          <a className="btn btn-default" href="javascript:void(0)" onClick={()=>this.handleImportContacts('windowslive')}>
              Import contacts from Live
          </a>
      </div>
      </div>

)
}
}
export default ImportGoogle
