import React from 'react';
import Config from '../../config';
import axios from 'axios';
import ReactLoginMS from "react-ms-login";



class ImportHotmail extends React.Component{
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

  render(){
  return(
    <a className="btn btn-default" href="https://carderockllc.com/accounts/windowslive/login/?next=http%3A%2F%2F13.59.44.47%2F%23%2Fcontact%2F&process=connect&action=reauthenticate">
        Login with Hotmail
    </a>
  )
  }
  }
  export default ImportHotmail
