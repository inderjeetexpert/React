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
import MoreDetailSection from '../MoreDetail'

export default class TabThisWeekMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: '',
			location: '',
			errorMsg: null,
			busy: false,
			recordcount: 0,
			data: [],
			errorMsg: null,
			errorItem: null,
			errorLoc: null,
			datailInfo: null,
			searchedName: null,
			searchedLocation: null

		};
		this.handleMoreInfo = this.handleMoreInfo.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);


	}


	handItemChange(event) {
		this.setState({ errorMsg: null });
		this.setState({ errorItem: null });

		this.setState({ item: event.target.value })
	}

	handleLocChange(event) {
		this.setState({ errorMsg: null });

		this.setState({ errorLoc: null });
		this.setState({ location: event.target.value })
	}
	handleMoreInfo(data) {
		this.setState({
			datailInfo: data
		})
	}
	handleClearForm(event) {
		event.preventDefault();
		this.setState({
			errorMsg: null,
			errorItem: null,
			errorLoc: null,
			item: '',
			location: '',

		});


	}

	handleSearch(event) {
		event.preventDefault();

		const data = { what: this.state.item, where: this.state.location };

		this.setState({ errorMsg: null, busy: true, errorItem: null, errorLoc: null });

		if (!data.what && !data.where) {
			//this.setState({errorMsg : 'Please provide item and location to search!!',busy : false});
			this.setState({ errorLoc: 'Please provide item and location to search!!', busy: false })
			this.setState({ errorItem: 'Please provide item and location to search!!', busy: false })
			return;
		}

		if (!data.what) {
			//this.setState({errorMsg : 'Please provide item and location to search!!',busy : false});
			this.setState({ errorItem: 'Please provide item and location to search!!', busy: false })
			return;
		}

		if (!data.where) {
			this.setState({ errorLoc: 'Please provide item and location to search!!', busy: false })
			return;


		}

		axios.defaults.headers.common['Authorization'] = "Token " + localStorage.getItem('key');
		axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.post('https://carderockllc.com/api/v1/business/search/', data).then(res => {
			this.setState({
				data: res.data,
				recordcount: res.data.length,
				busy: false,
				searchedName: this.state.item,
				searchedLocation: this.state.location
			})
			//console.log(this.state.data)
		}).catch(err => {
			this.setState({ busy: false });
			//console.log(err)
		})
	}


	render() {
		let searchButton = null;
		let errorMsg = null;
		let errorItem = null;
		let errorLoc = null;
		let { item, location, recordcount, datailInfo, searchedName, searchedLocation } = this.state;
		if (!this.state.busy) {
			searchButton = <button type="submit" onClick={(event) => this.handleSearch(event)} className="btn btn-primary btn-lg">Search</button>;
		} else {
			searchButton = <button type="button" className="btn btn-primary btn-lg disabled" disabled><i className="fa fa-fw fa-spin fa-spinner"></i>Searching .. </button>
		}

		if (!this.state.errorMsg) {
			errorMsg = null;
		} else {
			errorMsg = <p className="text-danger text-center searcherr">{this.state.errorMsg}</p>
		}

		if (!this.state.errorItem) {
			errorItem = null;
		} else {
			errorItem = <div className="input-group-addon"><i className="ion-alert-circled" style={{ fontSize: 20, color: '#ff0000', float: 'right', marginRight: -18, marginTop: -24 }}></i></div>
		}

		if (!this.state.errorLoc) {
			errorLoc = null;
		} else {
			errorLoc = <div className="input-group-addon"><i className="ion-alert-circled" style={{ fontSize: 20, color: '#ff0000', float: 'right', marginRight: -18, marginTop: -24 }}></i></div>
		}
		return (
			<div>
				<div className="container-fluid">
					<div className="search-header">
						<div className="row">
							<form onSubmit={(event) => this.handleSearch(event)}>
								{errorMsg}
								<div className="col-lg-9 col-md-8 col-sm-8 col-xs-12">
									<div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
										<div className="form-group">
											{/* <label className="control-label" htmlFor="focusedInput">Search Item</label> */}

											<input className="form-control" type="text" value={item} placeholder="Search for Business" onChange={(event) => this.handItemChange(event)} />
											{errorItem}


										</div>
									</div>
									<div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
										<div className="form-group borderless">
											{/* <label className="control-label" htmlFor="focusedInput">Search Location</label> */}

											<input className="form-control" type="text" value={location} placeholder="Enter a location" onChange={(event) => this.handleLocChange(event)} />
											{errorLoc}

										</div>
									</div>
								</div>
								<div className="col-auto pull-right">
									<button onClick={(event) => this.handleClearForm(event)} className="clear-button">Clear</button>
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

								<h5 className="record-count">
									{searchedName && searchedLocation ?
										<p>We found<span> {recordcount}</span> results for <span>{searchedName}</span> in <span>{searchedLocation}</span></p>
										: 'Please provide item and location to search!'}
								</h5>
							</div>
							{recordcount ?
								<div><div className={`${datailInfo ? 'col-md-9 col-sm-7' : 'col-md-12'}`}>
									<div className="body-border">
										<table className="business-table">
											<thead>
												<tr>
													<th width="25%">NAME</th>

													<th width="25%">ADDRESS</th>
													<th width="25%">PHONE</th>
													<th width="25%">EMAIL</th>
													<th width="50"> </th>
												</tr>
											</thead>
											<tbody>
												{this.state.data.map((d) => {
													let image = "images/no-image.png"

													if (d.image && d.image != '') {
														image = d.image
													}



													var dialoadRef = "sd" + d.id
													return (
														<tr key={d.id} onClick={() => this.handleMoreInfo(d)} className={`${datailInfo && (datailInfo.id === d.id) ? 'selected-item' : ''}`}>
															<td><img src={image} className="img-thumbnail" alt="thumbnail image" onClick={() => this.refs[dialoadRef].show()} />
																<p className="table-item-name">{d.name}</p>
																<SkyLight hideOnOverlayClicked ref={dialoadRef} title={d.name}>
																	<img src={image} style={{ height: 300, width: 618 }} alt="" />
																</SkyLight>
															</td>

															<td><p>{d.formatted_address}</p></td>
															<td><p>{d.phone}</p></td>
															<td><p>{d.email}</p></td>
															<td><p>Open Site</p></td>
														</tr>
													)
												})}
											</tbody>
										</table>
									</div>
									<button className="load-more-btn">Load More</button>
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
