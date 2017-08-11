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
import SkyLight from 'react-skylight';

export default class TabThisWeekMenu extends React.Component{
	constructor (props){
		super(props);
		this.state={
			item : '',
			location : '',
			errorMsg : null,
			busy : false,
			recordcount: 0,
			data : [],
			errorMsg : null,
			errorItem : null,
			errorLoc : null,

		};


	}


	handItemChange(event){
		this.setState({errorMsg : null});
		this.setState({errorItem : null});

		this.setState({item:event.target.value})
	}

	handleLocChange(event){
		this.setState({errorMsg : null});

		this.setState({errorLoc : null});
		this.setState({location:event.target.value})
	}


	handleSearch(event){
		event.preventDefault();

		const data={what:this.state.item,where:this.state.location};

		this.setState({errorMsg : null,busy : true});
		this.setState({errorItem : null,busy : true});
		this.setState({errorLoc : null,busy : true});
		if(!data.what && !data.where){
			//this.setState({errorMsg : 'Please provide item and location to search!!',busy : false});
			this.setState({errorLoc : 'Please provide item and location to search!!',busy : false})
			this.setState({errorItem : 'Please provide item and location to search!!',busy : false})
			return;
		}

		if(!data.what ){
			//this.setState({errorMsg : 'Please provide item and location to search!!',busy : false});
			this.setState({errorItem : 'Please provide item and location to search!!',busy : false})
			return;
		}

		if(!data.where){
			this.setState({errorLoc : 'Please provide item and location to search!!',busy : false})
			return;


		}

		axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
		axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.post('https://carderockllc.com/api/v1/business/search/',data).then(res=>{
			this.setState({data:res.data,recordcount:res.data.length, busy:false})
			//console.log(this.state.data)
		}).catch(err=>{
			this.setState({busy : false});
			//console.log(err)
		})
	}


  render() {
		let searchButton = null;
		let recordcount = 0;
		let errorMsg = null;
		let errorItem = null;
		let errorLoc = null;

		if(!this.state.busy){
			searchButton = <button type="submit" onClick={(event)=>this.handleSearch(event)} className="btn btn-primary btn-lg mr-15">SEARCH</button>;
		}else{
			searchButton = <button type="button" className="btn btn-primary btn-lg mr-15 disabled" disabled><i className="fa fa-fw fa-spin fa-spinner"></i>Searching .. </button>
		}

		if(!this.state.errorMsg){
			errorMsg = null;
		}else{
			errorMsg = <p className="text-danger text-center searcherr">{this.state.errorMsg}</p>
		}

		if(!this.state.errorItem){
			errorItem = null;
		}else{
			errorItem = <div className="input-group-addon"><i className="ion-alert-circled" style={{fontSize:20,color:'#ff0000',float:'right',marginRight: -18,marginTop: -24}}></i></div>
		}

		if(!this.state.errorLoc){
			errorLoc = null;
		}else{
			errorLoc = <div className="input-group-addon"><i className="ion-alert-circled" style={{fontSize:20,color:'#ff0000',float:'right',marginRight: -18,marginTop: -24}}></i></div>
					}
					return (
					<div>
					<div className="container-fluid">
							<div className="search-header">
									<div className="row">
											<form onSubmit={(event)=>this.handleSearch(event)}>
													{errorMsg}
													<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
															<div className="form-group">
																	<label className="control-label" htmlFor="focusedInput">Search Item</label>

																	<input className="form-control"  type="text" onChange={(event)=>this.handItemChange(event)}/>
																	{errorItem}


															</div>
													</div>
													<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
															<div className="form-group">
																	<label className="control-label" htmlFor="focusedInput">Search Location</label>

																	<input className="form-control" type="text" onChange={(event)=>this.handleLocChange(event)}/>
																	{errorLoc}

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

													<h5>We found {this.state.recordcount} business matching your query !</h5>
											</div>
											<div className="col-md-9 col-sm-7">
													<div className="body-border">
															<table className="business-table">
																	<tbody>
																			{this.state.data.map((d)=>{
																					let image= "images/no-image.png"

																					if(d.image && d.image != ''){
																							image= d.image
																					}



																					var dialoadRef = "sd"+d.id
																					return (
																							<tr key={d.id}>
																									<td><img src={image} className="img-thumbnail" style={{height:59, width:59}} alt="" onClick={() => this.refs[dialoadRef].show()} />
																											<SkyLight hideOnOverlayClicked ref={dialoadRef} title={d.name}>
																													<img src={image} style={{height:300, width:618}} alt="" />
																											</SkyLight></td>
																									<td><p>{d.name}</p></td>
																									<td><p>{d.source}</p></td>
																									<td><p>{d.formatted_address}</p></td>
																									<td><a href="">{d.phone}</a></td>
																									<td><a href="">{d.email}</a></td>
																									<td><a href="">Open Site</a></td>
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
