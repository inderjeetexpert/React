import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import FullscreenDialog from 'material-ui-fullscreen-dialog'
import AddressForm from './AddressForm'
import {getAddresses} from 'Actions/addressActions'
import Loadable from 'react-loading-overlay'
class Subscription extends React.Component{
	constructor(props){
		super(props)
		this.state={
			open:false,
			addressLoaded : false,
			address:{},
			formTitle:"Add Address",
			editMode : false
		}

		this.props.getAddresses(()=>{
			this.setState({addressLoaded:true})
		})
	}

	handleNewAddress(){
		this.setState({address:{},open:true,formTitle:"Add Address",editMode:false})
	}

	handleEditAddress(address){
		this.setState({address:address,open:true,formTitle:"Edit Address",editMode:true})
	}

	handleCloseForm(){
		this.setState({ open: false })
	}

	render(){
		let addAddressButton=null
		if(this.state.addressLoaded && this.props.addresses.length<1){
			addAddressButton=(
				<button className="btn-orange" onClick={this.handleNewAddress.bind(this)}>
					<i className="fa  fa-plus-circle"></i>Add Address
				</button>
			)
		}
		return(
			<Loadable
				active={!this.state.addressLoaded}
				spinner
				text='Loading address...'
				color='#ff9800'
			>
				<ul className="subscription_settings">
					<li>
						<h2>Delivery Address</h2>
					</li>
					{this.props.addresses.map((address)=>{
						let primeButton = ""
						if(address.isPrime){
							primeButton = (
								<button className="btn-orange"><i className="fa fa-map-marker"></i>Primary Address</button>
							)
							primeButton=""
						}
						return (
							<li key={address.id}>
								<div className="full-width">
									<div className="pull-left">
										<h4>{address.name}</h4>
										<h6>{address.address1}, {address.address2}, {address.city}, {address.state}, {address.zip}</h6>
										<h6><i className="fa fa-fw fa-mobile"></i> : {address.phone}</h6>
									</div>
									<div className="pull-right">
										{primeButton}
										<button className="btn-gray" onClick={()=>this.handleEditAddress(address)}><i className="fa fa-pencil"></i>Edit Address</button>
									</div>
								</div>
							</li>
						)
					})}
					<li className="tab-body">
						<div className="full-width">
							<FullscreenDialog
								open={this.state.open}
								onRequestClose={() => this.handleCloseForm()}
								title={this.state.formTitle}
								appBarStyle = {{backgroundColor:'#121824'}}
							>
								<AddressForm
									address={this.state.address}
									editMode={this.state.editMode}
									handleCloseForm={()=>this.handleCloseForm()}
									getAddresses={this.props.getAddresses}/>
							</FullscreenDialog>
							{addAddressButton}
						</div>
					</li>
				</ul>
			</Loadable>
		)
	}
}

Subscription.propTypes = {
	finalSubscription : PropTypes.object.isRequired,
	addresses : PropTypes.array.isRequired,
	changeTab : PropTypes.func.isRequired,
	getAddresses : PropTypes.func.isRequired
}

const mapStateToProps=(state)=>{
	return{
		finalSubscription : state.selectedSubscription,
		addresses : state.addresses
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		changeTab : (tabName)=>dispatch(changeTab(tabName)),
		getAddresses : (cb)=>dispatch(getAddresses(cb))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Subscription)
