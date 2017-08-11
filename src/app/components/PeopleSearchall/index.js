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
			data : [],


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

	handlePeopleSearch(event){
		//const data={first_name:this.state.first_name,last_name:this.state.last_name,company:this.state.company};
		const first_name = this.state.first_name;
		const last_name = this.state.last_name;
		const company = this.state.company;

		this.setState({errorMsg : null,busy : true});
		/*if(!data.first_name || !data.last_name || !data.company){
			this.setState({errorMsg : 'Please provide first name last name and company to search!!',busy : false});
			return;
		}*/

		axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
		axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.get('https://carderockllc.com/api/v1/contacts/search/?'+first_name +last_name+ company).then(res=>{
			this.setState({data:res.data,recordcount:res.data.length, busy:false})
			console.log(this.state.data)
		}).catch(err=>{
			this.setState({busy : false});
			//console.log(err)
		})
	}





  render() {
		let searchButton = null;
		let recordcount = 0;
		let errorMsg = null;

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
																	<a className="btn btn-default btn-lg mr-15" href="#">ADD NEW CONTACT</a>
															</div>
													</div>
											</div>
											<div className="col-md-9 col-sm-7">
													<div className="body-border">
															<table className="business-table">
																	<tbody>
																			<tr>
																					<th></th>
																			<th>Name</th>
																			<th>Company</th>
																			<th>Location</th>
																			<th>Number</th>
																			<th>Email</th>
																			<th></th>
																	</tr>
																	<tr>
																			<td>
																					<div className="custom_checkbox">
																							<input type="checkbox" />
																							<span></span>
																					</div>
																			</td>
																			<td>Sayed Rahman Ali</td>
																			<td>Google</td>
																			<td>Lorem ipsum , United States</td>
																			<td><a href="">443-251-6322</a></td>
																			<td><a href="">sample@gmail.com</a></td>
																			<td><a href="" className="icons ion-ios-email-outline"></a><a href="" className="icons ion-edit"></a></td>
																	</tr>
																	<tr>
																			<td>
																					<div className="custom_checkbox">
																							<input type="checkbox" />
																							<span></span>
																					</div>
																			</td>
																			<td>Sayed Rahman Ali</td>
																			<td>Google</td>
																			<td>Lorem ipsum , United States</td>
																			<td><a href="">443-251-6322</a></td>
																			<td><a href="">sample@gmail.com</a></td>
																			<td><a href="" className="icons ion-ios-email-outline"></a><a href="" className="icons ion-edit"></a></td>
																	</tr>
																	<tr>
																			<td>
																					<div className="custom_checkbox">
																							<input type="checkbox" />
																							<span></span>
																					</div>
																			</td>
																			<td>Sayed Rahman Ali</td>
																			<td>Google</td>
																			<td>Lorem ipsum , United States</td>
																			<td><a href="">443-251-6322</a></td>
																			<td><a href="">sample@gmail.com</a></td>
																			<td><a href="" className="icons ion-ios-email-outline"></a><a href="" className="icons ion-edit"></a></td>
																	</tr>
																	<tr>
																			<td>
																					<div className="custom_checkbox">
																							<input type="checkbox" />
																							<span></span>
																					</div>
																			</td>
																			<td>Sayed Rahman Ali</td>
																			<td>Google</td>
																			<td>Lorem ipsum , United States</td>
																			<td><a href="">443-251-6322</a></td>
																			<td><a href="">sample@gmail.com</a></td>
																			<td><a href="" className="icons ion-ios-email-outline"></a><a href="" className="icons ion-edit"></a></td>
																	</tr>
																	<tr>
																			<td>
																					<div className="custom_checkbox">
																							<input type="checkbox" />
																							<span></span>
																					</div>
																			</td>
																			<td>Sayed Rahman Ali</td>
																			<td>Google</td>
																			<td>Lorem ipsum , United States</td>
																			<td><a href="">443-251-6322</a></td>
																			<td><a href="">sample@gmail.com</a></td>
																			<td><a href="" className="icons ion-ios-email-outline"></a><a href="" className="icons ion-edit"></a></td>
																	</tr>
																	<tr>
																			<td>
																					<div className="custom_checkbox">
																							<input type="checkbox" />
																							<span></span>
																					</div>
																			</td>
																			<td>Sayed Rahman Ali</td>
																			<td>Google</td>
																			<td>Lorem ipsum , United States</td>
																			<td><a href="">443-251-6322</a></td>
																			<td><a href="">sample@gmail.com</a></td>
																			<td><a href="" className="icons ion-ios-email-outline"></a><a href="" className="icons ion-edit"></a></td>
																	</tr>
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
