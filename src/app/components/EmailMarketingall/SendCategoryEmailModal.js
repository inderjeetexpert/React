import React from 'react'
import CreateSmtpForm from './CreateSmtpForm'
import { Button, Modal } from 'react-bootstrap'
import CreateSmtpModel from './CreateSmtpModel'

import axios from 'axios'
import moment from 'moment';
import BS from 'react-bootstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import TabMenuall from './TabMenuall'

const styles = {
	headline: {
		fontSize: 24,
		paddingTop: 16,
		marginBottom: 12,
		fontWeight: 400,
	},
};
class SendCategoryEmailModal extends React.Component {
	constructor() {
		super()
		this.state = {
			showModal: true,
			dataUser: [],
			data: [],
			dataUser: [],
			busy: true,
			ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Month': [moment().startOf('month'), moment().endOf('month')],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			},
			startDate: moment().subtract(29, 'days'),
			endDate: moment(),

			recordcount: null

		}

		axios.defaults.headers.common['Authorization'] = "Token " + localStorage.getItem('key');
		axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.get('https://carderockllc.com/api/v1/business/searches/').then(res => {
			this.setState({ data: res.data.results })
		}).catch(err => {
			console.error(err);
		});

		axios.defaults.headers.common['Authorization'] = "Token " + localStorage.getItem('key');
		axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.get('https://carderockllc.com/api/v1/contacts/').then(result => {
			//console.log(result.data.results);
			this.setState({ dataUser: result.data.results, recordcount: result.data.length, busy: false })
			//console.log(this.state.data.results)
		}).catch(err => {
			this.setState({ busy: false });
			//console.log(err)
		})

		this.close = this.close.bind(this)
		this.handleEvent = this.handleEvent.bind(this)
	}
	close() {
		this.setState({ showModal: false });
	}

	handleEvent(event, picker) {
		this.setState({
			startDate: picker.startDate,
			endDate: picker.endDate
		});
}


	render() {
		let closeModal = () => this.setState({ open: false })
		let start = this.state.startDate.format('YYYY-MM-DD')
		let end = this.state.endDate.format('YYYY-MM-DD')
		let label = start + ' - ' + end;
		if (start === end) {
			label = start;
		}


		return (
			<div>
					<Modal
							show={this.props.showModal}
							onHide={this.props.closeModal}
					>
							<Modal.Header>
									<h4 className="pull-left">Send Email to Selected Categories</h4>
									<a className="pull-right" onClick={this.props.closeModal}><i className="ion-android-close"></i></a>
							</Modal.Header>
							<Modal.Body>
									<div className="row">
											<div className="col-md-6">

													<div className="row">
															<div className="col-md-12 business-header">
																	<TabMenuall />
															</div>



													</div>
											</div>
											<div className="col-md-4 col-md-offset-1">

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

															<DateRangePicker startDate={this.state.startDate} endDate={this.state.endDate} ranges={this.state.ranges} onEvent={this.handleEvent}>

																	<input type="text" className="form-control" placeholder="Select Interval ?" />
															</DateRangePicker>
													</div>
													<div className="form-group">

															<span className="smtp">
																	<select className="form-control" name="cars" style={{ float: "right" }}>
																			<option value="">Select Time ? Time will be according to UTC</option>
																			<option value="00:00">00:00</option>
																			<option value="00:30">00:30</option>
																			<option value="01:00">01:00</option>
																			<option value="01:30">01:30</option>
																			<option value="02:00">02:00</option>
																			<option value="02:30">02:30</option>
																			<option value="03:00">03:00</option>
																			<option value="03:30">03:30</option>
																			<option value="04:00">04:00</option>
																			<option value="04:30">04:30</option>
																			<option value="05:00">05:00</option>
																			<option value="05:30">05:30</option>
																			<option value="06:00">06:00</option>
																			<option value="06:30">06:30</option>
																			<option value="07:00">07:00</option>
																			<option value="07:30">07:30</option>
																			<option value="08:00">08:00</option>
																			<option value="08:30">08:30</option>
																			<option value="09:00">09:00</option>
																			<option value="09:30">09:30</option>
																			<option value="10:00">10:00</option>
																			<option value="10:30">10:30</option>
																			<option value="11:00">11:00</option>
																			<option value="11:30">11:30</option>
																			<option value="12:00">12:00</option>
																			<option value="12:30">12:30</option>
																			<option value="13:00">13:00</option>
																			<option value="13:30">13:30</option>
																			<option value="14:00">14:00</option>
																			<option value="14:30">14:30</option>
																			<option value="15:00">15:00</option>
																			<option value="15:30">15:30</option>
																			<option value="16:00">16:00</option>
																			<option value="16:30">16:30</option>
																			<option value="17:00">17:00</option>
																			<option value="17:30">17:30</option>
																			<option value="18:00">18:00</option>
																			<option value="18:30">18:30</option>
																			<option value="19:00">19:00</option>
																			<option value="19:30">19:30</option>
																			<option value="20:00">20:00</option>
																			<option value="20:30">20:30</option>
																			<option value="21:00">21:00</option>
																			<option value="21:30">21:30</option>
																			<option value="22:00">22:00</option>
																			<option value="22:30">22:30</option>
																			<option value="23:00">23:00</option>
																			<option value="23:30">23:30</option>
																			<option value="24:00">24:00</option>

																	</select>
															</span>
													</div>
													<div className="radio">
															<label>
																	<div className="custome-radio"><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" /><span></span></div>
																	Monthly
															</label>
													</div>
													<div className="radio">
															<label>
																	<div className="custome-radio"><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"  /><span></span></div>
																	Weekly
															</label>
													</div>
													<div className="radio">
															<label>
																	<div className="custome-radio"><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" /><span></span></div>
																	Daily
															</label>
													</div>
													<div className="radio">
															<label>
																	<div className="custome-radio"><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" /><span></span></div>
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
