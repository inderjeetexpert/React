import React from 'react';
import './companydetail.css';
import { LocalForm, Control } from 'react-redux-form'
import axios ,{post} from 'axios';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class AddNotesFormActivity extends React.Component {
	constructor(props) {
		super(props)
		let url = window.location.hash.split('/')
	  const id=url[url.length-1]
		this.state = {
			id,
      startDate: moment(),
			busy: false,
			isVisible: 'none',
			time: '09:00'
    };

		this.handleChange = this.handleChange.bind(this);

	}

	handleChange(date) {
    this.setState({
      startDate: date
    });
  }

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state.formData);

		//this.setState({ busy: true});

		this.uploadFile(this.state.formData);
		this.setState({
		 busy: false,
	 })
	}

	handleChange(values) {
		//console.log(values);
		this.setState({formData: values})
	}
	handleUpdate(values) {

	 }

	 handletimeChange(time) {

	 	this.setState({ time: time, isVisible: 'none' })

	 }


	render() {
		const timespan= ["01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30","24:00"];
		//console.log(timespan);
		let searchButton = null;
		if (!this.state.busy) {
			searchButton = <button type="submit" onClick={(event) => this.handleSubmit(event)} className="btn btn-primary">Save</button>;
		} else {
			searchButton = <button type="button" className="btn btn-primary btn-lg disabled" disabled><i className="fa fa-fw fa-spin fa-spinner"></i>Saving .. </button>
		}

		return (

			<LocalForm
					onUpdate={(form) => this.handleUpdate(form)}
					onChange={(values) => this.handleChange(values)}
					onSubmit={(values) => this.handleSubmit(values)}
					model="activity"
			>

					<div>

							<div className="activity-box-body">
									<div className="row text-inline">
											<div className="col-md-4">
													<label>Due Date</label>
													<div className="input-group">
															<span className="input-group-addon" id="basic-addon1"><img src="images/calendar.svg" /></span>
															<DatePicker
																	dateFormat="DD/MM/YYYY"
																	selected={this.state.startDate}
																	onChange={this.handleChange} />
													</div>
											</div>
											<div className="col-md-4">
													<div className="input-group " >
															<span className="input-group-addon relativeDiv" id="basic-addon1"><img src="images/clock.svg" />

																	<div  className="timeDropdown" style={{display: this.state.isVisible}}>
																			<div className="innr">
																					<img className="imgArrow" src="images/down-up_y.png" />
																			</div>
																			<ul>
																					{timespan.map((d) => {
																							//console.log(d);
																							return (
																									<li>
																											<a onClick={(event) => this.handletimeChange(d)} >{d}</a>
																									</li>
																							)
																					})}
																			</ul>
																	</div>
															</span>
															<input type="text" className="form-control" placeholder="9:00 am" value={this.state.time} onClick={()=>{this.setState({isVisible:'block'})}} />

															<span className="input-group-addon" id="basic-addon1"><img src="images/clock.svg" />
															</span>
															<input type="text" className="form-control" placeholder="5:00 pm" />
															<vr></vr>
													</div>
											</div>

									</div>

									<Control.text model="activity.subject" className="form-control subject" placeholder="What are you meeting about?" />

									<Control.textarea model="activity.description" placeholder="Start typing to leave a activity" required="required"/>
							</div>
							<div className="activity-box-footer">
									<div className="pull-left">
											<p style={{color: 'red'}}>**you can upload .png,.jpg and .doc file only</p>
											<a style={{position:'relative'}}><Control.file model="notes.notefile" accept=".jpg,.png,.doc,.xlsx" style={{display: 'block',position: 'absolute',width: '100%',zIndex: '999',opacity: '0'}} required="required"/><img src="images/attachment.svg" /></a>
											<a><img src="images/link-1.svg" /></a>
									</div>
									<div className="pull-right">
											{searchButton}
											<button className="btn btn-secondary">Discard</button>
									</div>
							</div>

					</div>
			</LocalForm>

		)
	}
}


export default AddNotesFormActivity;
