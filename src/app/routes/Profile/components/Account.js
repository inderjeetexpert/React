import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AccountForm from './AccountForm'
import AccountInfo from './AccountInfo'
import {getAccount} from 'Actions/accountActions'
import Loadable from 'react-loading-overlay'
class Account extends React.Component{
	constructor(props){
		super(props)
		this.state={
			editMode:false,
			loadingAccount:true,
		}
		this.props.getAccount((res)=>{
			this.setState({loadingAccount:false})
		})
	}

	setToEditMode(){
		this.setState({editMode:true})
	}

	cancelEditMode(){
		this.setState({editMode:false})
	}



	render(){
		let section = (<AccountInfo user={this.props.user} setToEditMode={()=>this.setToEditMode()}/>)
		if(this.state.editMode){
			section=(<AccountForm user={this.props.user} cancelEditMode={()=>this.cancelEditMode()}/>)
		}

		return (
			<Loadable
				active={this.state.loadingAccount}
				spinner
				text='Loading Info...'
				color='#ff9800'
			>
				{section}
			</Loadable>
		)
	}
}

Account.propTypes = {
	user : PropTypes.object.isRequired,
	getAccount : PropTypes.func.isRequired
}

const mapStateToProps=(state)=>{
	return{
		user : state.account.user
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		getAccount : (cb)=>dispatch(getAccount(cb))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Account)
