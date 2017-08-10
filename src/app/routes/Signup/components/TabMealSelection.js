import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import moment from 'moment'
import TwoPersonBox from 'Components/TwoPersonBox'
import FamilyBox from 'Components/FamilyBox'
import TabThisWeekMenu from 'Components/TabThisWeekMenu'

class TabMealSelection extends React.Component{
	constructor(props){
		super(props)
		this.state={
		}
	}
	render(){
		let title = moment().startOf('week').format("MMMM DD")+" - "+moment().endOf('week').format("MMMM DD");
		let yourBox = "";
		if(this.props.currentProductSelectionContext == "TWO_PERSON_PLAN"){
			yourBox = <TwoPersonBox/>
		}
		if(this.props.currentProductSelectionContext == "FAMILY_PLAN"){
			yourBox = <FamilyBox/>
		}
		return(
			<div className="tab-body">
				<h1>{title} <a>></a></h1>
				<strong>Select Weekly Menu</strong>
				<div className="row">
					<div className="col-md-9">
						<div className="weekly-bg">
							<TabThisWeekMenu showAddButton={true} cssClass="tab-background"/>
						</div>
					</div>
					<div className="col-md-3">
						{yourBox}
					</div>
				</div>
			</div>
		)
	}
}

TabMealSelection.propTypes = {
	currentProductSelectionContext : PropTypes.string.isRequired
}

const mapStateToProps = (state)=>{
	return {
		currentProductSelectionContext : state.context.currentProductSelectionContext
	}
}


export default connect(mapStateToProps)(TabMealSelection)
