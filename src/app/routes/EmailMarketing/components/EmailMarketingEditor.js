import React from 'react';
import EmailMarketingall from 'Components/EmailMarketingall'
import moment from 'moment'

class EmailMarketingEditor extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		let title = moment().startOf('week').format("MMMM DD")+" - "+moment().endOf('week').format("MMMM DD");

		return (
			<div className="innerbody">

					{/*<h1>{title} <a>></a></h1>*/}

					<EmailMarketingall/>

			</div>
		)
	}
}


export default EmailMarketingEditor;
