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
import Config from '../../config';



export default class PeopleSearchall extends React.Component{
	constructor (props){
		super(props);
		this.state={
			first_name : '',
			last_name : '',
			company : '',
			errorMsg : null,
			busy : false,
			recordcount: 0,
			phone: '',
			twitter: '',
			data : [],
			datailInfo: null,
			searchedName: null

		};


	}



	handFirstnameChange(event){
		this.setState({errorMsg : null});
		this.setState({first_name:event.target.value})
	}

	handLastnameChange(event){
		this.setState({errorMsg : null});
		this.setState({last_name:event.target.value})
	}

	handCompanyChange(event){
		this.setState({errorMsg : null});
		this.setState({company:event.target.value})
	}

	handPhoneChange(event){
		this.setState({errorMsg : null});
		this.setState({phone:event.target.value})
	}

	handTwitterChange(event){
		this.setState({errorMsg : null});
		this.setState({twitter:event.target.value})
	}

	handleMoreInfo(data) {
		this.setState({
			datailInfo: data
		})
	}


	handlePeopleSearch(event){
		//const data={first_name:this.state.first_name,last_name:this.state.last_name,company:this.state.company};
		const first_name = this.state.first_name;
		const last_name = this.state.last_name;
		const company = this.state.company;
		const phone = this.state.phone;
		const twitter = this.state.twitter;

		this.setState({errorMsg : null,busy : true});
		/*if(!data.first_name || !data.last_name || !data.company){
			this.setState({errorMsg : 'Please provide first name last name and company to search!!',busy : false});
			return;
		}*/

		axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
		axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.get('https://carderockllc.com/api/v1/contacts/search/?first_name='+first_name+'&last_name='+last_name+'&company='+company+'&phone='+phone+'&twitter='+twitter).then(res=>{
			this.setState({
				data: res.data.results,
				recordcount: res.data.results.length,
				busy: false
			})
			console.log(this.state)
		}).catch(err=>{
			this.setState({busy : false});
			//console.log(err)
		})
	}

  render() {
		let searchButton = null;

		let errorMsg = null;
		let { first_name, last_name, company,phone,twitter,recordcount, datailInfo, searchedfirstName, searchedlastName,searchedcompany, searchedphone,searchedtwitter} = this.state;


		if(!this.state.busy){
			searchButton = <button type="submit" onClick={(event)=>this.handlePeopleSearch(event)} className="btn btn-primary btn-lg mr-15">SEARCH</button>;
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
											<form onSubmit={(event) => this.handlePeopleSearch(event)}>
													{errorMsg}
													<div className="col-lg-9 col-md-8 col-sm-8 col-xs-12">
															<div className="col-md-3">
																	<div className="form-group">
																			{/* <label className="control-label" htmlFor="focusedInput">Search Item</label> */}

																			<input className="form-control" type="text" placeholder="Search By  First Name" onChange={(event)=>this.handFirstnameChange(event)} />



																	</div>
															</div>

															<div className="col-lg-3">
																	<div className="form-group">
																			{/* <label className="control-label" htmlFor="focusedInput">Search Location</label> */}

																			<input className="form-control" type="text" placeholder="Search by last name" onChange={(event)=>this.handLastnameChange(event)} />


																	</div>
															</div>
															<div className="col-md-3">
																	<div className="form-group">
																			{/* <label className="control-label" htmlFor="focusedInput">Search Item</label> */}

																			<input className="form-control" type="text" placeholder="Search By Company" onChange={(event)=>this.handCompanyChange(event)}/>



																	</div>
															</div>
															<div className="col-lg-3">
																	<div className="form-group">
																			{/* <label className="control-label" htmlFor="focusedInput">Search Item</label> */}

																			<input className="form-control" type="text" placeholder="Search By Phone" onChange={(event)=>this.handPhoneChange(event)} />



																	</div>
															</div>
															<div className="col-lg-3">
																	<div className="form-group">
																			{/* <label className="control-label" htmlFor="focusedInput">Search Item</label> */}

																			<input className="form-control" type="text" placeholder="Search By Twiiter name" onChange={(event)=>this.handTwitterChange(event)} />



																	</div>
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


											</div>
											{recordcount ?
													<div><div className="">
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
																					<a className="btn btn-default btn-lg mr-15" href="#">ADD NEW CONTACT</a>
																			</div>
																	</div>
															</div>
															<div className="col-md-12">
																	<div className="body-border">
																			<table className="business-table">
																					<thead>
																							<tr>
																									<th width="10%"></th>

																									<th width="20%">Name</th>
																									<th width="20%">Company</th>
																									<th width="20%">Location</th>
																									<th width="20%">Number</th>
																									<th width="20%">Email</th>
																									<th width="40%">Actions</th>


																							</tr>
																					</thead>
																					<tbody>
																							{
																									this.state.data.map((d) => {
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
																															<td>{d.address}</td>
																															<td>{d.email}</td>
																															<td>{d.email}</td>
																															<td><a href="" className="icons ion-ios-email-outline"></a><a href="" className="icons ion-edit"></a></td>
																													</tr>
																											)
																									})
																							}
																					</tbody>
																			</table>
																	</div>
															</div>
															{/*<button className="load-more-btn">Load More</button>*/}
													</div>
															{datailInfo ?
																	<MoreDetailSection datailInfo={datailInfo} />

															: ''}
													</div> : ''}
									</div>
							</div>
					</section>
			</div>
    );
  }
}
