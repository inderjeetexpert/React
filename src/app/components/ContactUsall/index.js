import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import axios from 'axios';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SkyLight from 'react-skylight';
import AddNewContactForm from './AddNewContactForm';


import Config from '../../config';


export default class ContactUsall extends React.Component{
	constructor (props){
		super(props);
		this.state={
      age: '',
      gender: '',
      emails: '',
      company: '',
      contact_name: '',
      phone: '',
      address: '',
			errorMsg : null,
      datailInfo: null,
			busy : false,
			recordcount: 0,
			data : [],

		};

    axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
    axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.get(Config.apiBaseUrl+'api/v1/contacts/').then(res=>{
      this.setState({data:res.data.results,recordcount:res.data.length, busy:false})
      //console.log(this.state.data.results)
    }).catch(err=>{
      this.setState({busy : false});
      //console.log(err)
    })

	}








      render() {

        var myBigGreenDialog = {

      color: '#ffffff',
      width: '60%',
      height: '600px',
      marginTop: '-300px',
      marginLeft: '-35%',
    };


    		let searchButton = null;
    		let recordcount = 0;
    		let errorMsg = null;
let { age, emails,contact_name,address,phones,company,gender, datailInfo } = this.state;

    		if(!this.state.busy){
    			searchButton = <button type="submit"  className="btn btn-primary btn-lg mr-15">SEARCH</button>;
    		}else{
    			searchButton = <button type="button" className="btn btn-primary btn-lg mr-15 disabled" disabled><i className="fa fa-fw fa-spin fa-spinner"></i>Searching .. </button>
    		}

    		if(!this.state.errorMsg){
    			errorMsg = null;
    		}else{
    			errorMsg = <p className="text-danger text-center searcherr">{this.state.errorMsg}</p>
    		}


    		const actions = [
    	       <FlatButton
    						 label="Cancel"
    						 primary={true}
    						 onTouchTap={this.handleClose}
            />,
    	       <FlatButton
    						 label="Submit"
    						 primary={true}
    						 disabled={true}
    						 onTouchTap={this.handleClose}
            />,
    	     ];

           return (
             <div>
                 <div className="container-fluid">
                     <div className="search-header">
                         <div className="row">
                             <form onSubmit={(event)=>this.handlePeopleSearch(event)}>
                                 {errorMsg}
                                 <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                     <div className="form-group">
                                         <label className="control-label" htmlFor="focusedInput">First Name</label>
                                         <input className="form-control" type="text" onChange={(event)=>this.handFirstnameChange(event)}/>
                                     </div>
                                 </div>
                                 <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                     <div className="form-group">
                                         <label className="control-label" htmlFor="focusedInput">Last Name</label>
                                         <input className="form-control" type="text" onChange={(event)=>this.handLastnameChange(event)} />
                                     </div>
                                 </div>
                                 <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                     <div className="form-group">
                                         <label className="control-label" htmlFor="focusedInput">Company</label>
                                         <input className="form-control" type="text" onChange={(event)=>this.handCompanyChange(event)}/>
                                     </div>
                                 </div>
                                 <div className="col-auto pull-right">
                                     {searchButton}

                                 </div>
                             </form>
                         </div>
                     </div>
                 </div>
                 <section className="">
                     <div className="container-fluid">
                         <div className="row">
                             <div className="col-md-12">
                                 <div className="row">
                                     <div className="col-md-3">
                                         <div className="select-all">
                                             <div className="custom_checkbox">
                                                 <input type="checkbox" />
                                                 <span></span>
                                             </div>
                                             <b>Select All</b>
                                         </div>
                                     </div>
                                     <div className="col-auto pull-right">
                                         <a className="btn btn-default btn-lg mr-15" href="#">ACTION</a>
                                         <a className="btn btn-default btn-lg mr-15" onClick={() => this.refs.simpleDialog.show()}>ADD NEW CONTACT</a>
                                     </div>
                                 </div>
                             </div>

                             <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref="simpleDialog" title="Add Contact">
                                 <AddNewContactForm/>
                             </SkyLight>
                             <div className="col-md-9 col-sm-7">
                                 <div className="body-border">
                                     <table className="business-table">
                                         <thead>
                                             <tr>
                                                 <th></th>
                                                 <th>Name</th>
                                                 <th>Company</th>
                                                 <th>Email</th>
                                                 <th>Phone</th>
                                                 <th>Email</th>

                                                 <th></th>
                                             </tr>
                                         </thead>

                                         <tbody>
                                             {this.state.data.map((d) => {
                                                 console.log(d);
                                                 return (
                                                     <tr key={d.id}>
                                                         <td>
                                                             <div className="custom_checkbox">
                                                                 <input type="checkbox" />
                                                                 <span></span>
                                                             </div>
                                                         </td>
                                                         <td>{d.contact_name}</td>
                                                         <td>{d.company}</td>
                                                         <td>{d.email}</td>
                                                         <td><a href="">{d.phones}</a></td>
                                                         <td><a href="">{d.email}</a></td>

                                                         <td><a href="" className="icons ion-ios-email-outline"></a><a href="" className="icons ion-edit"></a></td>

                                                     </tr>
                                                 )
                                             })}

                                         </tbody>
                     </table>
                     </div>
                     </div>
                     <div className="col-md-3 col-sm-5">
                     <div className="body-border">
                     <div className="tbd">
                     <a href=""><b>Selected Business Info TBD</b></a>
                     </div>
                     </div>
                     </div>
                     </div>
                     </div>
                     </section>

             </div>
           );
         }
         }
