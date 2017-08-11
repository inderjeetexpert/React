import React from 'react';
import PeopleSearchall from 'Components/PeopleSearchall'
import moment from 'moment'

class PeopleSearch extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		let title = moment().startOf('week').format("MMMM DD")+" - "+moment().endOf('week').format("MMMM DD");

		return (
			<div className="innerbody">
					
									{/*<h1>{title} <a>></a></h1>*/}

									<PeopleSearchall/>

			</div>
		)
	}
}


export default PeopleSearch;
