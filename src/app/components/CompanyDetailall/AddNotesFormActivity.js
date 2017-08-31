import React from 'react';
import './companydetail.css';
import { LocalForm, Control } from 'react-redux-form'
import axios ,{post} from 'axios';
import DatePicker from 'react-datepicker';
import AlertContainer from 'react-alert'
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
			isVisiblefrom: 'none',
			isVisibleLink: 'none',
			link:'',
			timenew: '05:00',
			time: '09:00'
    };

		this.handleChange = this.handleChange.bind(this);
		this.handletimefromChange = this.handletimefromChange.bind(this);
		this.handleChangeform = this.handleChangeform.bind(this);
		this.hideFromTime = this.hideFromTime.bind(this);
		this.hideTime = this.hideTime.bind(this);

	}

	handleChange(date) {
    this.setState({
      startDate: date
    });
  }

	handleSubmit(event) {
		event.preventDefault();
		//console.log(this.state.formData);

		this.setState({ busy: true});

		this.uploadFile(this.state.formData);
		this.setState({
			 busy: false
		 })
		const targeForm = document.getElementById('activityForm');
 		targeForm.reset()
	}

	handleChangeform(values) {
		//console.log(values);
		this.setState({formData: values})
	}
	handleUpdate(form) {
		//console.log(form)

	}

	 handletimeChange(time) {

	 	this.setState({ time: time, isVisible: 'none' })

	 }

	 handletimefromChange(timenew) {

	 this.setState({ timenew: timenew, isVisiblefrom: 'none' })

	}

	 hideFromTime(){
   const self = this
   setTimeout(function () {
    self.setState({isVisible:'none'})
  }, 500)
  }

	hideTime(){
	const self = this
	setTimeout(function () {
	 self.setState({isVisiblefrom:'none'})
 }, 500)
 }

 hideLink(){
 const self = this
 setTimeout(function () {
	self.setState({isVisibleLink:'none'})
 }, 500)
 }

 uploadFile(file){
   const subject= file.subject
   const description= file.description
	 const activty_type = file.activity_type
	 const act_date = this.state.startDate
	 const activty_date = act_date.format("YYYY-MM-DD")
	 const activity_file = file.notefile[0]
	 const start_time = this.state.time
	 const end_time = this.state.timenew
	 const link = this.state.link
	 const company = this.state.id
	 const formData = new FormData();
	 const config = {
	 			headers:{
	 				'Authorization':"Token "+localStorage.getItem('key'),
	 				'content-type':'multipart/form-data'
	 			}
	 		}
	 		const url = 'http://www.carderockllc.com/api/v1/company/activities/'
			formData.append('subject',subject)
	 		formData.append('description',description)
	 	  formData.append('activty_type',activty_type)
	 	  formData.append('activty_date',activty_date)
			formData.append('activity_file',activity_file)
	 	  formData.append('start_time',start_time)
	 	  formData.append('end_time',end_time)
			formData.append('link',link)
	 	  formData.append('company',company)

	 		axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key')
	 		axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'

     if(!subject || subject==''){
			 this.msg.error('Subject must not be  blank', {
	 		 time: 5000,
	 		 type: 'success',
	 		 theme: 'dark',
	 		 offset: 14,
	 		 position: 'bottom right',
	 		 transition: 'scale' ,

	 			})
			 return

		 }
		 if(!activty_type || activty_type==''){
			this.msg.error('Please choose a activity type', {
			time: 5000,
			type: 'success',
			theme: 'dark',
			offset: 14,
			position: 'bottom right',
			transition: 'scale' ,

			 })
			return

		}

		if(!description || description==''){
		 this.msg.error('Description can not be  blank', {
		 time: 5000,
		 type: 'success',
		 theme: 'dark',
		 offset: 14,
		 position: 'bottom right',
		 transition: 'scale' ,

			})
		 return

	 }




	 		post(url,formData,config).then(res=>{
	 			console.log(res);
	 		 this.msg.success('You have successfully Created the Activity', {
	 		 time: 5000,
	 		 type: 'success',
	 		 theme: 'dark',
	 		 offset: 14,
	 		 position: 'bottom right',
	 		 transition: 'scale' ,
	 		 icon: <img src="images/check.png" style={{height:'50px',width: '50px'}} />
	 			})
	 		 this.props.fetchactivity(this.state.id);
	 		}).catch(err=>{
	 			console.log(err);
	 		})




	}


	render() {
		const timespan= ["01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30","24:00"];

		let searchButton = null;
		if (!this.state.busy) {
			searchButton = <button type="submit" onClick={(event) => this.handleSubmit(event)} className="btn btn-primary">Save</button>;
		} else {
			searchButton = <button type="button" className="btn btn-primary btn-lg disabled" disabled><i className="fa fa-fw fa-spin fa-spinner"></i>Saving .. </button>
		}

		return (

			<LocalForm
					onUpdate={(form) => this.handleUpdate(form)}
					onChange={(values) => this.handleChangeform(values)}
					onSubmit={(values) => this.handleSubmit(values)}
					model="activity"
					id="activityForm"
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
																											<a onClick={(event) => this.handletimeChange(d)} >{d}</a>
																									</li>
																							)
																					})}
																			</ul>
																	</div>
															</span>
															<Control.text model="activity.fromtime" className="form-control" placeholder="9:00 am" value={this.state.time} onClick={()=>{this.setState({isVisible:'block'})}} onBlur={this.hideFromTime} />

															<span className="input-group-addon relativeDiv" id="basic-addon1"><img src="images/clock.svg" />
																	<div  className="timeDropdown" style={{display: this.state.isVisiblefrom}}>
																			<div className="innr">
																					<img className="imgArrow" src="images/down-up_y.png" />
																			</div>
																			<ul>
																					{timespan.map((m) => {
																							//console.log(d);
																							return (
																									<li>
																											<a onClick={(event) => this.handletimefromChange(m)} >{m}</a>
																									</li>
																							)
																					})}
																			</ul>
																	</div>
															</span>
															<Control.text model="activity.totime" className="form-control" placeholder="9:00 am" value={this.state.timenew} onClick={()=>{this.setState({isVisiblefrom:'block'})}} onBlur={this.hideTime} />
															<vr></vr>
													</div>
											</div>
											<div className="col-md-4">
													<label>Activity Type</label>

													<Control.select model="activity.activity_type" style={{width: '150px'}}>
															<option value selected>None</option>
															<option value="call">Call</option>
															<option value="meeting">Meeting</option>
															<option value="email">Email</option>
													</Control.select>
											</div>

									</div>

									<Control.text model="activity.subject" className="form-control subject" placeholder="What are you meeting about?" />

									<Control.textarea model="activity.description" placeholder="Start typing to leave a activity" required="required"/>
							</div>
							<div className="activity-box-footer">
									<div className="pull-left">
											<p style={{color: 'red'}}>**you can upload .png,.jpg and .doc file only</p>
											<a style={{position:'relative'}}><Control.file model="activity.notefile" accept=".jpg,.png,.doc,.xlsx" style={{display: 'block',position: 'absolute',width: '100%',zIndex: '999',opacity: '0'}} required="required"/><img src="images/attachment.svg" /></a>
											<a style={{position: 'relative', zIndex: '9999'}} onClick={()=>{this.setState({isVisibleLink:'block'})}} onBlur={this.hideLink}><img src="images/link-1.svg" /></a>
											<Control.text model="activity.link" className="form-control subject" placeholder="Ex: http://www.carderockllc.com/ " name="activity.link" style={{display: this.state.isVisibleLink}}/>
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
