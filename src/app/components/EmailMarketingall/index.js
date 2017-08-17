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
import CKEditor from "react-ckeditor-component";
import SkyLight from 'react-skylight';
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import BS from 'react-bootstrap';






export default class EmailMarketingall extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			subject: '',
			content: '<p>Some para</p>',
			ckeChanged : true,
			name: '',
			host: '',
			port: '',
			username: '',
			password: '',
			usertls: false,
			useremail:'',
			errorMsg: null,
			busy: false,
			recordcount: 0,
			data: [],
			dataUser:[],
			errorMsg: null,
			errorName: null,
			errorHost: null,
			errorPort: null,
			errorUsername: null,
			errorPassword: null,
			errorUsertls: null,
			error: null,
			datailInfo: null


  	}
		axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
	  axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
	  axios.get('https://carderockllc.com/api/v1/email/templates/').then(res=>{
			this.setState({data:res.data.results})
	  }).catch(err=>{
			console.error(err);
	 	});

		axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
	  axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
	  axios.get('https://carderockllc.com/api/v1/usersmtp/').then(resuser=>{
			console.log(resuser.data.results);
			this.setState({dataUser:resuser.data.results})
	  }).catch(err=>{
			console.error(err);
	 	});

		this.updateContent = this.updateContent.bind(this)
		this.themeChange = this.themeChange.bind(this)
	}

	themeChange(newContent) {
		this.setState({ckeChanged:false})
		console.log(newContent)
		const self = this
		setTimeout(function () {
			self.setState({
		    content: newContent,
				ckeChanged:true
		  })
		}, 1000);
	}

	updateContent(newContent){
		this.setState({
			content: newContent
		})
	}

	subjectChange(event){
		this.setState({
			subject: event.value
		})
	}

	handNameChange(event) {
		this.setState({ errorMsg: null });
		this.setState({ errorItem: null });

		this.setState({ name: event.target.value })
	}

	handleHostChange(event) {
		this.setState({ errorMsg: null });

		this.setState({ errorLoc: null });
		this.setState({ host: event.target.value })
	}

	handlePortChange(event) {
		this.setState({ errorMsg: null });

		this.setState({ errorLoc: null });
		this.setState({ port: event.target.value })
	}

	handleUsernameChange(event) {
		this.setState({ errorMsg: null });

		this.setState({ errorLoc: null });
		this.setState({ username: event.target.value })
	}

	handlePasswordChange(event) {
		this.setState({ errorMsg: null });

		this.setState({ errorLoc: null });
		this.setState({ password: event.target.value })
	}

	handleTlsChange(event) {
		this.setState({ errorMsg: null });

		this.setState({ errorLoc: null });
		this.setState({ usertls: false })
	}

	handleEmailChange(event) {
		this.setState({ errorMsg: null });

		this.setState({ errorLoc: null });
		this.setState({ useremail: event.target.value })
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
		//event.preventDefault();


		const data = { name: this.state.name, host: this.state.host, port: this.state.port, username: this.state.username, password: this.state.password, use_tls: true, from_email: this.state.useremail};
 console.log(data);
		this.setState({ errorMsg: null, busy: true, errorName: null, errorHost: null, errorPort: null, errorUsername: null,
					errorPassword: null, errorUsertls: null });

		/*if (!data.name && !data.host && !data.port && !data.username && !data.password && !data.user_tls) {
			//this.setState({errorMsg : 'Please provide item and location to search!!',busy : false});
			this.setState({ errorName: 'Please provide Name ', busy: false })
			this.setState({ errorHost: 'Please provide host !!', busy: false })
			this.setState({ errorPort: 'Please provide port!!', busy: false })
			this.setState({ errorUsername: 'Please provide username!!', busy: false })
			this.setState({ errorPassword: 'Please provide password!!', busy: false })
			this.setState({ errorUsertls: 'Please provide usertls!!', busy: false })


			return;
		}

		if (!data.name) {
			//this.setState({errorMsg : 'Please provide item and location to search!!',busy : false});
			this.setState({ errorName: 'Please provide item and location to search!!', busy: false })
			return;
		}

		if (!data.host) {
			this.setState({ errorHost: 'Please provide host!!', busy: false })
			return;


		}
		if (!data.port) {
			//this.setState({errorMsg : 'Please provide item and location to search!!',busy : false});
			this.setState({ errorPort: 'Please provide item and location to search!!', busy: false })
			return;
		}

		if (!data.username) {
			this.setState({ errorUsername: 'Please provide host!!', busy: false })
			return;


		}

		if (!data.password) {
			this.setState({ errorPassword: 'Please provide host!!', busy: false })
			return;


		}
		if (!data.user_tls) {
			this.setState({ errorUsertls: 'Please provide host!!', busy: false })
			return;


		}*/

		axios.defaults.headers.common['Authorization'] = "Token " + localStorage.getItem('key');
		axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.post('https://carderockllc.com//api/v1/usersmtp/', data).then(res => {
			this.setState({
				//data: res.data,
				//recordcount: res.data.length,
				busy: false,

			})
			console.log(this.state.data)
		}).catch(err => {
			this.setState({ busy: false });
			//console.log(err)
		})
	}







  render() {
		 //const { editorState } = this.state;
		let cke = null;
		if(this.state.ckeChanged){
			cke = (
				<CKEditor
						activeClass="p10"
						content={this.state.content}
						onChange={this.updateContent}
				/>
			)
		}
var dialoadRef = "sd"
var dialoadRefmod = "dy"

let searchButton = null;

let errorName= null;
let errorHost= null;
let errorPort= null;
let errorUsername= null;
let errorPassword= null;
let errorUsertls=null;
let { name, host,port,username, password, usertls, useremail, recordcount, datailInfo, searchedName, searchedLocation } = this.state;
if (!this.state.busy) {
	searchButton = <button type="submit" onClick={(event) => this.handleSearch(event)} className="btn btn-primary btn-lg">Create</button>;
} else {
	searchButton = <button type="button" className="btn btn-primary btn-lg disabled" disabled><i className="fa fa-fw fa-spin fa-spinner"></i>Creating .. </button>
}



if (!this.state.errorName) {
	errorName = null;
} else {
	errorName = <div className="input-group-addon"><i className="ion-alert-circled" style={{ fontSize: 20, color: '#ff0000', float: 'right', marginRight: -18, marginTop: -24 }}></i></div>
}

if (!this.state.errorHost) {
	errorHost = null;
} else {
	errorHost = <div className="input-group-addon"><i className="ion-alert-circled" style={{ fontSize: 20, color: '#ff0000', float: 'right', marginRight: -18, marginTop: -24 }}></i></div>
}

if (!this.state.errorPort) {
	errorPort = null;
} else {
	errorPort = <div className="input-group-addon"><i className="ion-alert-circled" style={{ fontSize: 20, color: '#ff0000', float: 'right', marginRight: -18, marginTop: -24 }}></i></div>
}

if (!this.state.errorUsername) {
	errorUsername = null;
} else {
	errorUsername = <div className="input-group-addon"><i className="ion-alert-circled" style={{ fontSize: 20, color: '#ff0000', float: 'right', marginRight: -18, marginTop: -24 }}></i></div>
}


if (!this.state.errorUsertls) {
	errorUsertls = null;
} else {
	errorUsertls = <div className="input-group-addon"><i className="ion-alert-circled" style={{ fontSize: 20, color: '#ff0000', float: 'right', marginRight: -18, marginTop: -24 }}></i></div>
}

const myBigGreenDialog = {

      color: '#ffffff',
      width: '60%',
      height: '600px',
      marginTop: '-300px',
      marginLeft: '-35%',
			overflow: 'scroll'

    }

const ranges = {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Month': [moment().startOf('month'), moment().endOf('month')],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			}

  return (

			<div>
					<div className="container">
							<div className="search-header links">
									<div className="row">
											<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
													<div className="form-group">
															<a onClick={() => this.refs[dialoadRef].show()}>Send Mass Email</a>
															<SkyLight hideOnOverlayClicked ref={dialoadRef} title="Mass Email">
																	<span className="smtp">
																			<i className="ion-ios-plus-outline" style={{float:"right",
																					color: "#212121",
																					backgroundColor: "aquamarine",
																			fontSize: 14,}} onClick={() => this.refs[dialoadRefmod].show()}>
																					<SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref={dialoadRefmod} title="Create Your new Smtp Config Here">
																							<div className="container-fluid">
																									<div className="search-header">

																											<form onSubmit={(event) => this.handleSearch(event)}>

																													<div className="col-md-12">

																															<div className="form-group">
																																	{/* <label className="control-label" htmlFor="focusedInput">Search Item</label> */}
																																	<label className="control-label" htmlFor="focusedInput" style={{margin: 18,
																																	fontSize: 25}}>Name</label>
																																	<input className="form-control" type="text" value={name} placeholder="Name Your Settings" onChange={(event) => this.handNameChange(event)} />
																																	{errorName}


																															</div>
																													</div>

																													<div className="col-md-12">

																															{/* <label className="control-label" htmlFor="focusedInput">Search Location</label> */}
																															<div className="form-group">
																																	<label className="control-label" htmlFor="focusedInput" style={{margin: 18,
																																	fontSize: 25}}>Host</label>
																																	<input className="form-control" type="text" value={host} placeholder="Host Name" onChange={(event) => this.handleHostChange(event)} />
																																	{errorHost}

																															</div>
																													</div>

																													<div className="col-md-12">

																															{/* <label className="control-label" htmlFor="focusedInput">Search Location</label> */}
																															<div className="form-group">
																																	<label className="control-label" htmlFor="focusedInput" style={{margin: 18,
																																	fontSize: 25}}>Port</label>
																																	<input className="form-control" type="text" value={port} placeholder="Port" onChange={(event) => this.handlePortChange(event)} />
																																	{errorPort}

																															</div>
																													</div>

																													<div className="col-md-12">

																															{/* <label className="control-label" htmlFor="focusedInput">Search Location</label> */}
																															<div className="form-group">
																																	<label className="control-label" htmlFor="focusedInput" style={{margin: 18,
																																	fontSize: 25}}>Username</label>
																																	<input className="form-control" type="text" value={username} placeholder="Username" onChange={(event) => this.handleUsernameChange(event)} />
																																	{errorUsername}

																															</div>
																													</div>

																													<div className="col-md-12">

																															{/* <label className="control-label" htmlFor="focusedInput">Search Location</label> */}
																															<div className="form-group">
																																	<label className="control-label" htmlFor="focusedInput" style={{margin: 18,
																																	fontSize: 25}}>Password</label>
																																	<input className="form-control" type="password" value={password} placeholder="password" onChange={(event) => this.handlePasswordChange(event)} />
																																	{errorPassword}

																															</div>
																													</div>

																													<div className="col-md-12">

																															{/* <label className="control-label" htmlFor="focusedInput">Search Location</label> */}
																															<div className="form-group">
																																	<label className="control-label" htmlFor="focusedInput" style={{margin: 18,
																																	fontSize: 25}}>User Email</label>
																																	<input className="form-control" type="email" value={useremail} placeholder="Your Email" onChange={(event) => this.handleEmailChange(event)} />


																															</div>
																													</div>

																													<div className="col-md-12">

																															{/* <label className="control-label" htmlFor="focusedInput">Search Location</label> */}
																															<div className="form-group">
																																	<label className="control-label" htmlFor="focusedInput" style={{margin: 18,
																																	fontSize: 25}}>User Tls</label>
																																	<input  type="checkbox" value={usertls} placeholder="Host Name" onChange={(event) => this.handleTlsChange(event)} />


																															</div>
																													</div>



																													<div className="col-auto pull-right">
																															{/*<button onClick={(event) => this.handleClearForm(event)} className="clear-button">Clear</button>*/}
																															{searchButton}

																													</div>
																											</form>

																									</div>
																							</div>
																					</SkyLight>
																			</i>
																			<select name="cars" style={{float:"right"}}>
																					<option value="volvo">Choose your option</option>
																					{this.state.dataUser.map((m) => {

																							return <option value={m.from_email}>{m.name}</option>
																					})}
																			</select>

																	</span>

																	<p>This will send a mass email to all your saved businesses and Contacts</p>
																	


															</SkyLight>
													</div>
											</div>
											<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
													<div className="form-group">
															<a href="">Send Email to Selected Categories</a>
													</div>
											</div>
											<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
													<div className="form-group">
															<a href="">Send the Promotions</a>
													</div>
											</div>
											<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
													<div className="form-group">
															<a href="">Search New Business and Send Email</a>
													</div>
											</div>

									</div>
							</div>
					</div>
					<section className="">
							<div className="container">
									<div className="row">
											<div className="col-md-8 col-sm-7">
													<div className="body-border">
															<div className="p-15">
																	<div className="form-group">
																			<label className="control-label" htmlFor="focusedInput">Subject</label>
																			<input className="form-control" value={this.state.subject} onChange={this.subjectChange} type="text" placeholder="subject"/>
																	</div>
																	<div className="editor" style={{height:304}}>
																			{cke}

																	</div>
															</div>
													</div>
											</div>
											<div className="col-md-4 col-sm-5">
													<div className="body-border">
															<div className="template-box p-15">
																	<ul>
																			{/*<li style={{background: "url('images/tm-1.jpg')"}}><input type="radio" name="temp"/><span></span></li>
																					<li style={{background: "url('images/tm-2.jpg')"}}><input type="radio" name="temp"/><span></span></li>
																			<li style={{background: "url('images/tm-2.jpg')"}}><input type="radio" name="temp"/><span></span></li>*/}
																			{this.state.data.map((d) => {
																					return <li key={d.id} onClick={()=>this.themeChange(d.html_content)} style={{background: "url(" + d.thumb_image + ")" }}><input type="radio" name="temp"/><span></span></li>
																			})}
																	</ul>
																	<button className="btn btn-primary btn-lg btn-block" href="#">SELECT TEMPLATE</button>
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
