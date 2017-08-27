import React from 'react';
import CompanyDetailall from 'Components/CompanyDetailall'
import moment from 'moment'

class CompanyDetailList extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		let title = moment().startOf('week').format("MMMM DD")+" - "+moment().endOf('week').format("MMMM DD");

		return (
			<div className="innerbody">

					{/*<h1>{title} <a>></a></h1>*/}

					<CompanyDetailall/>

			</div>
		)
	}
}


export default CompanyDetailList;
