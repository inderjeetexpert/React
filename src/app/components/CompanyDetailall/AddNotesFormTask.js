import React from 'react';
import './companydetail.css';
import { LocalForm, Control } from 'react-redux-form'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios ,{post} from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import {ButtonToolbar, DropdownButton, MenuItem,SplitButton} from 'react-bootstrap';
import Config from '../../config';
import AlertContainer from 'react-alert'

class AddNotesFormTask extends React.Component {
	constructor(props) {
		super(props)

		let url = window.location.hash.split('/')
		const id=url[url.length-1]
		this.state = {
			id,
			startDate: moment(),
			busy: false,
			isVisible: 'none',
			isActive:'none',
			time: '',
			totime:'',
			isShow:'none',
			recordcount: 0,
			contactid:'',
			data : [],
			dataUser: []
		};

		axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
		axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.get(Config.apiBaseUrl+'api/v1/contacts/').then(res=>{
			this.setState({dataUser:res.data.results,recordcount:res.data.length, busy:false})
			console.log(this.state.data)
			 this.props.fetchtask(this.state.id);
		}).catch(err=>{
			this.setState({busy : false});
			//console.log(err)
		})


		this.handleChange = this.handleChange.bind(this);
		this.hideFromTime = this.hideFromTime.bind(this);
    this.hideToTime = this.hideToTime.bind(this);
  this.hidebutttonDropdown = this.hidebutttonDropdown.bind(this);

}


	handleChange(date) {
    this.setState({
      startDate: date
    });
  }

	// handleSubmit(event) {
	// 	event.preventDefault();
	// 	//console.log(this.state.formData);
	// 	this.uploadFile(this.state.formData);
	// 	this.setState({
	// 	 busy: false,
	//  })
	// }

	handleChangeform(values) {
		this.setState({formData: values})
	}
	handleUpdate(values) {

	 }



	 handletimeChange(time) {
	 	this.setState({ time: time, isVisible: 'none' })

	 }
	 handletotimeChange(totime) {
		this.setState({ totime: totime, isActive: 'none' })

	 }
	 hideFromTime(){
		 const self = this
		 setTimeout(function () {
		 	self.setState({isVisible:'none'})
		}, 500)
	 }
	 hideToTime(){
		const self = this
		setTimeout(function () {
		 self.setState({isActive:'none'})
	 }, 500)
	}
	handlebuttonDropdown(id) {

		this.setState({ contactid: id, isShow: 'none' })

	}
	hidebutttonDropdown(){
		const self = this
		setTimeout(function () {
		 self.setState({isShow:'none'})
	 }, 500)
	}

	handleSubmit(values){
const act_date = this.state.startDate
const activty_date = act_date.format("YYYY-MM-DD")
const data={link:'',company:this.state.id,email_remainder_time:'',due_date:activty_date,contact:this.state.contactid,task:values.task,task_notes:values.task_notes,email_reminder_type:values.email_reminder_type,start_time:this.state.time,end_time:this.state.totime};

if (!data.contact) {
	this.msg.error('Please Chose An Assignee', {
	time: 5000,
	type: 'success',
	theme: 'dark',
	offset: 14,
	position: 'bottom right',
	transition: 'scale' ,

	 })

	return
}

if (!data.task) {
	this.msg.error('Please Add a Subject', {
	time: 5000,
	type: 'success',
	theme: 'dark',
	offset: 14,
	position: 'bottom right',
	transition: 'scale' ,

	 })
	 return
	 }
	 if (!data.task_notes) {
	 	this.msg.error('Please Add a Description', {
	 	time: 5000,
	 	type: 'success',
	 	theme: 'dark',
	 	offset: 14,
	 	position: 'bottom right',
	 	transition: 'scale' ,
	 	 })
	return
}
if (!data.email_reminder_type) {
 this.msg.error('Please Choose a Reminder', {
 time: 5000,
 type: 'success',
 theme: 'dark',
 offset: 14,
 position: 'bottom right',
 transition: 'scale' ,
	})
return
}
if (!data.start_time) {
 this.msg.error('Please Choose a StartTime', {
 time: 5000,
 type: 'success',
 theme: 'dark',
 offset: 14,
 position: 'bottom right',
 transition: 'scale' ,
	})
return
}

if (!data.end_time) {
 this.msg.error('Please Choose a EndTime', {
 time: 5000,
 type: 'success',
 theme: 'dark',
 offset: 14,
 position: 'bottom right',
 transition: 'scale' ,
	})
return
}





    axios.defaults.headers.common['Authorization'] = "Token " + localStorage.getItem('key');
    axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.post(Config.apiBaseUrl+'api/v1/company/tasks/',data).then(res=>{
			this.msg.success('You have successfully Created the Task', {
			time: 5000,
			type: 'success',
			theme: 'dark',
			offset: 14,
			position: 'bottom right',
			transition: 'scale' ,
			icon: <img src="images/check.png" style={{height:'50px',width: '50px'}} />
			 })
      this.setState({data:res.data,recordcount:res.data.length, busy:false})
      console.log(res)

			 this.props.fetchtask(this.state.id);
    }).catch(err=>{
      this.setState({busy : false});
      //console.log(err)
    })
  }



	render() {

const timespan= ["01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30","24:00"];

		return (

			<LocalForm
					onUpdate={(form) => this.handleUpdate(form)}
					onChange={(values) => this.handleChangeform(values)}
					onSubmit={(values) => this.handleSubmit(values)}
					model="tasks"
			>
					<AlertContainer ref={a => this.msg = a}  />

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
																											<a key={d} onClick={(event) => this.handletimeChange(d)} >{d}</a>
																									</li>
																							)
																					})}
																			</ul>
																	</div>
															</span>
															<input type="text" className="form-control" placeholder="9:00 am" value={this.state.time} onClick={()=>{this.setState({isVisible:'block'})}}  onBlur={this.hideFromTime}/>

															<span className="input-group-addon relativeDiv" id="basic-addon1"><img src="images/clock.svg" />

																	<div  className="timeDropdown" style={{display: this.state.isActive}}>
																			<div className="innr">
																					<img className="imgArrow" src="images/down-up_y.png" />
																			</div>
																			<ul>
																					{timespan.map((m) => {
																							//console.log(d);
																							return (
																									<li>
																											<a key={m} onClick={(event) => this. handletotimeChange(m)} >{m}</a>
																									</li>
																							)
																					})}
																			</ul>
																	</div>
															</span>
															<input type="text" className="form-control" placeholder="5:00 pm"  value={this.state.totime} onClick={()=>{this.setState({isActive:'block'})}}  onBlur={this.hideToTime}/>

															<vr></vr>
													</div>
											</div>
											<div className="col-md-4">
													<label>Set Reminder</label>
													<Control.select model="tasks.email_reminder_type"  placeholder="Set Reminder" required="required">
				                     	<option>None</option>
				                      <option value="The day of">The day of</option>
				                      <option value="The day before">The day before</option>
															<option value="The week before">The week before</option>
				                  </Control.select>

											</div>
									</div>
									<Control.text model="tasks.task" className="form-control subject" placeholder="What are you meeting about?"  />

									<Control.textarea model="tasks.task_notes" placeholder="Start typing to leave a activity" />

							</div>
							<div className="activity-box-footer">
									<div className="pull-left">
											<a className="btn btn-primary" onClick={()=>{this.setState({isShow:'block'})}}  onBlur={this.hidebutttonDropdown} >Add Assignee</a>
											<div className="relativeBtnWarp">

													<div  className="timeDropdown" style={{display: this.state.isShow}}>
															<ul>

																	{this.state.dataUser.map((d) => {
																			//console.log(d);
																			return (
																					<li>
																							<a key={d.id} onClick={(event) => this.handlebuttonDropdown(d.id)} >{d.contact_name}</a>
																					</li>
																			)
																	})}
															</ul>
															<div className="innr">
																	<img className="imgArrow" src="images/down-up_y.png" />
															</div>
													</div>
											</div>

									</div>
									<div className="pull-right">
											<button className="btn btn-primary">Save</button>
											<button className="btn btn-secondary">Discard</button>
									</div>
							</div>
					</div>
			</LocalForm>


		)
	}
}


export default AddNotesFormTask;
