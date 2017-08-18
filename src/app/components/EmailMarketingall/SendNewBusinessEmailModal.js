import React from 'react'
import CreateSmtpForm from './CreateSmtpForm'
import { Button, Modal } from 'react-bootstrap'
import CreateSmtpModel from './CreateSmtpModel'
import axios from 'axios'

class SendCategoryEmailModal extends React.Component{
	constructor(){
		super()
		this.state = {
			showModal:true,
			dataUser:[],
			data:[],
			busy:true,
			recordcount:null

		}

		axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
	  axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
	  axios.get('https://carderockllc.com/api/v1/business/searches/').then(res=>{
			//console.log(res.data.results);
			this.setState({data:res.data.results})
	  }).catch(err=>{
			console.error(err);
	 	});

		axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
    axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.get('https://carderockllc.com/api/v1/contacts/').then(result=>{
			//console.log(result.data.results);
      this.setState({dataUser:result.data.results,recordcount:result.data.length, busy:false})
      //console.log(this.state.data.results)
    }).catch(err=>{
      this.setState({busy : false});
      //console.log(err)
    })

		this.close = this.close.bind(this)
	}
	close() {
    this.setState({ showModal: false });
  }

	render(){
		let closeModal = () => this.setState({ open: false })
		return (
			<div>
					<Modal
							show={this.props.showModal}
							onHide={this.props.closeModal}
					>
							<Modal.Header>
									<h4 className="pull-left">Search New Business</h4>
									<a className="pull-right" onClick={this.props.closeModal}><i className="ion-android-close"></i></a>
							</Modal.Header>
							<Modal.Body>
									<div className="row">
											<div className="col-md-6">

													<div className="row">
															<div className="col-md-6">
																	<h5>Business</h5>
																	<div className="checkbox">
																			<label>
																					<div className="custome-check"><input type="checkbox" value="" /><span></span></div>
																					Manually Added
																			</label>
																	</div>
																	{this.state.data.map((m) => {
																			//console.log(m);
																			return (<div className="checkbox">
																					<label>
																							<div className="custome-check"><input type="checkbox" value="" /><span></span></div>
																							{m.search.what} | {m.search.where}
																					</label>
																			</div>

																			)
																	})}




															</div>

													</div>
											</div>
											<div className="col-md-5">

													<div className="form-group">
															<span className="smtp">
																	<select className="form-control" name="cars" style={{ float: "right" }}>
																			<option value="volvo">Select Your Email Server</option>
																			{this.props.dataUser.map((m) => {

																					return <option key={m.id} value={m.from_email}>{m.name}</option>
																			})}
																	</select>
															</span>
													</div>
													<div className="form-group">
															<label>Select Interval ?</label>
															<input type="text" className="form-control" placeholder="Select Interval ?" />
													</div>
													<div className="form-group">
															<label>Select Time ? Time will be according to UTC</label>
															<input type="text" className="form-control" placeholder="Select Time" />
													</div>
													<div className="radio">
															<label>
																	<div className="custome-radio"><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked /><span></span></div>
																	Monthly
															</label>
													</div>
													<div className="radio">
															<label>
																	<div className="custome-radio"><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked /><span></span></div>
																	Weekly
															</label>
													</div>
													<div className="radio">
															<label>
																	<div className="custome-radio"><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked /><span></span></div>
																	Daily
															</label>
													</div>
													<div className="radio">
															<label>
																	<div className="custome-radio"><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked /><span></span></div>
																	Hourly
															</label>
													</div>
											</div>
											<div className="col-md-1">

													<button className="btn btn-primary circle-plus" onClick={() => this.setState({ showSmtpCreateModel: true })}>
															<CreateSmtpModel showModal={this.state.showSmtpCreateModel} closeModal={() => { this.setState({ showSmtpCreateModel: false }) }} /><i className="ion-ios-plus-empty"></i>
													</button>
											</div>
									</div>





							</Modal.Body>
							<Modal.Footer>
									<button className="btn btn-primary btn-lg">SEND</button>
							</Modal.Footer>
					</Modal>
			</div>
		)
	}
}

export default SendCategoryEmailModal
