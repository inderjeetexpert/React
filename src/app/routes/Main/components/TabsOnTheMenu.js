import React from 'react';
import TabThisWeekMenu from 'Components/TabThisWeekMenu'
import moment from 'moment'

class TabsOntheMenu extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		let title = moment().startOf('week').format("MMMM DD")+" - "+moment().endOf('week').format("MMMM DD");

		return (
			<div className="innerbody">
				<div className="container-fluid">
					<div className="tab-body">
						{/*<h1>{title} <a>></a></h1>*/}

						<TabThisWeekMenu cssClass="tab-background wekly-bg on-the-menu"/>
					</div>
				</div>
			</div>
		)
	}
}


export default TabsOntheMenu;
