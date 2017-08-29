import React from 'react';
import { LocalForm, Control } from 'react-redux-form'
import axios ,{post} from 'axios';
import './companydetail.css';
import AlertContainer from 'react-alert'




class AddNotesForm extends React.Component {
	constructor(props) {
		super(props)
		let url = window.location.hash.split('/')
	  const id=url[url.length-1]
	  this.state={
	   id,
		 data: [],
		 errorMsg:'',
		 notefile: null,
		 busy: false,
	  }

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

	uploadFile(file){
    //console.log(file)
		const notfilenew= file.notefile[0]
		const name = file.name
    if(notfilenew.type != 'image/jpg' && notfilenew.type != 'image/jpeg' && notfilenew.type != 'image/png' && notfilenew.type != 'application/pdf' && notfilenew.type != 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' && notfilenew.type !='application/vnd.openxmlformats-officedocument.wordprocessingml.document'){

			this.msg.error('please upload jpg or png file',{
			time: 5000,
			type: 'success',
			theme: 'dark',
			offset: 14, // the offset of the alert from the page border, can be any number
			position: 'bottom right', // the position of the alert, can be [bottom left, bottom right, top left, top right]
			transition: 'scale' ,// the transition animation, can be [scale, fade]

 		 })
		 return;

		}


    const formData = new FormData();
    const config = {
      headers:{
        'Authorization':"Token "+localStorage.getItem('key'),
        'content-type':'multipart/form-data'
      }
    }
    const url = 'http://www.carderockllc.com/api/v1/company/notes/'
    formData.append('note_file',file.notefile[0])
		formData.append('description',file.name)
		formData.append('company',this.state.id)
    axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key')
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'

    post(url,formData,config).then(res=>{
      console.log(res);
			this.msg.success('You have successfully Created the notes', {
			time: 5000,
			type: 'success',
			theme: 'dark',
			offset: 14, // the offset of the alert from the page border, can be any number
			position: 'bottom right', // the position of the alert, can be [bottom left, bottom right, top left, top right]
			transition: 'scale' ,// the transition animation, can be [scale, fade]
			icon: <img src="images/check.png" style={{height:'50px',width: '50px'}} />
 		 })
     this.props.fetchnotes(this.state.id);
    }).catch(err=>{
      console.log(err);
    })
  }

	handleChange(values) {
		//console.log(values);
		this.setState({formData: values})
	}
	handleUpdate(values) {

	 }


	render() {

		let searchButton = null;
		if (!this.state.busy) {
			searchButton = <button type="submit" onClick={(event) => this.handleSubmit(event)} className="btn btn-primary">Save Note</button>;
		} else {
			searchButton = <button type="button" className="btn btn-primary btn-lg disabled" disabled><i className="fa fa-fw fa-spin fa-spinner"></i>Saving .. </button>
		}


		return (

			<LocalForm
					onUpdate={(form) => this.handleUpdate(form)}
					onChange={(values) => this.handleChange(values)}
					onSubmit={(values) => this.handleSubmit(values)}
					model="notes"
			>
					<AlertContainer ref={a => this.msg = a}  />
					<div>
							<div className="activity-box-body">

									<Control.textarea model="notes.name" placeholder="Name Your Settings" required="required"/>
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


export default AddNotesForm;
