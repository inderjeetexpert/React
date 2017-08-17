import React from 'react';
import ContactUsall from 'Components/ContactUsall'
import moment from 'moment'

class ContactUs extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		let title = moment().startOf('week').format("MMMM DD")+" - "+moment().endOf('week').format("MMMM DD");

		return (
			<div className="innerbody">

					{/*<h1>{title} <a>></a></h1>*/}

					<ContactUsall/>

			</div>
		)
	}
}


export default ContactUs;
