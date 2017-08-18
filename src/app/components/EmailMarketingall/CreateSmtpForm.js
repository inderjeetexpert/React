import React from 'react'
import { LocalForm, Control } from 'react-redux-form'
import axios from 'axios'

class CreateSmtpForm extends React.Component{
	constructor(){
		super()
		this.state={
			busy : false
		}
	}
	handleSubmit(event) {

		const data = event;
		console.log(data);
		//return;
		axios.defaults.headers.common['Authorization'] = "Token " + localStorage.getItem('key');
		axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.post('https://carderockllc.com//api/v1/usersmtp/', data).then(res => {
			this.setState({
				busy: false,
			})
			console.log(this.state.data)
			this.props.closeModal()
		}).catch(err => {
			this.setState({ busy: false });
		})
	}

	handleChange(values){
	}
	handleUpdate(values){}

	render (){
		let searchButton = null;
		if (!this.state.busy) {
			searchButton = <button type="submit" onClick={(event) => this.handleSubmit(event)} className="btn btn-primary btn-lg">Create</button>;
		} else {
			searchButton = <button type="button" className="btn btn-primary btn-lg disabled" disabled><i className="fa fa-fw fa-spin fa-spinner"></i>Creating .. </button>
		}
		return (
			<LocalForm
					onUpdate={(form) => this.handleUpdate(form)}
					onChange={(values) => this.handleChange(values)}
					onSubmit={(values) => this.handleSubmit(values)}
					model="smtp"
			>
					<div className="col-md-12">
							<div className="form-group">
									<label className="control-label" htmlFor="focusedInput" style={{margin: 18,
									fontSize: 25}}>Name</label>
									<Control.text model="smtp.name" className="form-control" type="text" placeholder="Name Your Settings"/>
							</div>
					</div>

					<div className="col-md-12">
							<div className="form-group">
									<label className="control-label" htmlFor="focusedInput" style={{margin: 18,
									fontSize: 25}}>Host</label>
									<Control.text model="smtp.host" className="form-control" type="text" placeholder="Host Name"/>
							</div>
					</div>

					<div className="col-md-12">
							<div className="form-group">
									<label className="control-label" htmlFor="focusedInput" style={{margin: 18,
									fontSize: 25}}>Port</label>
									<Control.text model="smtp.port" className="form-control" type="text" placeholder="Port"/>
							</div>
					</div>

					<div className="col-md-12">

							<div className="form-group">
									<label className="control-label" htmlFor="focusedInput" style={{margin: 18,
									fontSize: 25}}>Username</label>
									<Control.text model="smtp.username" className="form-control" type="text" placeholder="Username"/>
							</div>
					</div>

					<div className="col-md-12">

							<div className="form-group">
									<label className="control-label" htmlFor="focusedInput" style={{margin: 18,
									fontSize: 25}}>Password</label>
									<Control.text model="smtp.password" className="form-control" type="text" placeholder="password"/>
							</div>
					</div>

					<div className="col-md-12">

							<div className="form-group">
									<label className="control-label" htmlFor="focusedInput" style={{margin: 18,
									fontSize: 25}}>User Email</label>
									<Control.text model="smtp.from_email" className="form-control" type="text" placeholder="Your Email"/>
							</div>
					</div>

					<div className="col-md-12">
							<div className="form-group">
									<label className="control-label" htmlFor="focusedInput" style={{margin: 18,
									fontSize: 25}}>User Tls</label>
									<Control.checkbox model="smtp.use_tls"/>
							</div>
					</div>
					<div className="col-auto pull-right">
							{searchButton}

					</div>
			</LocalForm>
		)
	}
}

export default CreateSmtpForm
