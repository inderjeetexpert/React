import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Loadable from 'react-loading-overlay'
import { LinkContainer } from 'react-router-bootstrap'
import {loadTwoPersonProducts,selectTwoPersonSubscription,loadFamilyProducts,selectFamilySubscription,selectPlan} from 'Actions/subscriptionActions'
import {changeProductSelectionContex} from 'Actions/stateActions'
import {changeTab} from 'Actions/signupActions'
import {getSubscription,cancelSubscription} from 'Actions/accountActions'



class Subscription extends React.Component{
	constructor(props){
		super(props)
		this.state={
			activeSubs:'2person',
			activeDish:'2',
			subStatus:'paused',
			busy:true
		}

		this.props.loadTwoPersonProducts(()=>{
			//twor person subscriptions are loaded
			this.props.loadFamilyProducts(()=>{
				//family subscriptions are loaded
				this.props.getSubscription(()=>{
					this.setState({busy:false})
					if(this.props.account.subscription && this.props.account.subscription.id){
						this.handleSubStatus('active')
						this.handle2pSelect(this.props.account.subscription.product_id)
						this.handlefamilySelect(this.props.account.subscription.product_id)
					}else{
						this.handleSubStatus('paused')
					}
				})

			})
		})
	}

	handleCancelSubscription=()=>{
		this.setState({busy:true})
		this.props.cancelSubscription(res=>{
			if(res.success){
				this.props.getSubscription(()=>{
					this.setState({busy:false})
				})
			}else{
				this.setState({busy:false})
			}

		})
	}

	handlePlanSelect=(value)=>{
		this.props.changeProductSelectionContex(value)
	}

	handleSubscriptionSelect=(product)=>{
		this.props.selectPlan(product)
	}

	handle2pSelect=(pId)=>{
		this.props.twoPersonSubscriptions.map((value,index)=>{
			if(value.id===pId){
				this.props.selectTwoPersonSubscription(value)
				this.props.changeProductSelectionContex('TWO_PERSON_PLAN')
				this.props.selectPlan(value);
			}
		})
	}

	handlefamilySelect=(pId)=>{
		this.props.familySubscriptions.map((value,index)=>{
			if(value.id===pId){
				this.props.selectFamilySubscription(value)
				this.props.changeProductSelectionContex('FAMILY_PLAN')
				this.props.selectPlan(value);
			}
		})
	}

	handleSubStatus=(status)=>{
		this.setState({subStatus:status})
	}



	render(){
		let plan = (
			<ul className="switch">
				<li className="active" onClick={()=>{this.handlePlanSelect('TWO_PERSON_PLAN')}}>2 Person</li>
				<li onClick={()=>{this.handlePlanSelect('FAMILY_PLAN')}}>Family</li>
			</ul>
		)
		if(this.props.currentProductSelectionContext==='FAMILY_PLAN'){
			plan=(
				<ul className="switch">
					<li  onClick={()=>{this.handlePlanSelect('TWO_PERSON_PLAN')}}>2 Person</li>
					<li className="active"  onClick={()=>{this.handlePlanSelect('FAMILY_PLAN')}}>Family</li>
				</ul>
			)
		}

		let subscriptionsList =[];

		if(this.props.currentProductSelectionContext==='TWO_PERSON_PLAN'){
			this.props.twoPersonSubscriptions.map(val=>{
				if(val.id === this.props.twoPersonPlanSubscriptionsSelected.id){
					subscriptionsList.push(<li className='active' onClick={()=>this.handle2pSelect(val.id)} key={val.id}>{val.meta_description}</li>)
				}else{
					subscriptionsList.push(<li key={val.id} onClick={()=>this.handle2pSelect(val.id)}>{val.meta_description}</li>)
				}
			})
		}

		if(this.props.currentProductSelectionContext==='FAMILY_PLAN'){
			this.props.familySubscriptions.map(val=>{
				console.log(this.props.familyPlanSubscriptionsSelected);
				if(val.id === this.props.familyPlanSubscriptionsSelected.id){
					subscriptionsList.push(<li className='active' onClick={()=>this.handlefamilySelect(val.id)} key={val.id}>{val.meta_description}</li>)
				}else{
					subscriptionsList.push(<li key={val.id} onClick={()=>this.handlefamilySelect(val.id)}>{val.meta_description}</li>)
				}
			})
		}

		let status = (
			<ul className="switch">
				<li onClick={()=>{this.handleSubStatus('active')}}>Active0</li>
				<li className="active" onClick={()=>{this.handleSubStatus('paused')}}>Paused0</li>
			</ul>
		)





		let saveButton = ""

		if(this.props.account.subscription && (this.props.account.subscription.product_id != this.props.finalSubscription.id)){
			saveButton =(
				<LinkContainer className="btn-blue" to="/delivery/create">
					<button className="btn-blue">Select Recipes</button>
				</LinkContainer>
			)
		}

		if(this.state.subStatus !=='active'){
			status = (
				<ul className="switch">
					<li onClick={()=>{this.handleSubStatus('active')}}>Active</li>
					<li className="active" onClick={()=>{this.handleSubStatus('paused')}}>Paused</li>
				</ul>
			)
			saveButton =(
				<button className="btn-blue" onClick={()=>this.handleCancelSubscription()}>Save Subscription</button>
			)
		}else{
			status = (
				<ul className="switch">
					<li className="active">Active</li>
					<li onClick={()=>{this.handleSubStatus('paused')}}>Paused</li>
				</ul>
			)
			if(this.props.finalSubscription.id && !this.props.account.subscription){
				saveButton =(
					<LinkContainer className="btn-blue" to="/delivery/create">
						<button className="btn-blue">Select Recipes</button>
					</LinkContainer>
				)
			}else{
				if(this.props.account.subscription && (this.props.account.subscription.product_id != this.props.finalSubscription.id)){
					saveButton =(
						<LinkContainer className="btn-blue" to="/delivery/create">
							<button className="btn-blue">Select Recipes</button>
						</LinkContainer>
					)
				}
			}
		}

		let deliveryText=(<strong>We will automatically generate deliveries each week</strong>)
		if(this.state.subStatus!=='active'){
			deliveryText=(<strong>We will not generate any deliveries</strong>)
		}

		return(
			<Loadable
				active={this.state.busy}
				spinner
				text='Loading plans...'
				color='#e8500e'
			>
				<ul className="subscription_settings">
					<li>
						<h2>Subscription Settings</h2>
					</li>
					<li>
						<div className="media">
							<div className="media-left media-middle">
								<b>Plan Type</b>
							</div>
							<div className="media-body media-middle">
								{plan}
							</div>
							<div className="media-right media-middle">
								<strong>{this.props.finalSubscription.name}</strong>
							</div>
						</div>
					</li>
					<li>
						<div className="media">
							<div className="media-left media-middle">
								<b>Recipes per Week</b>
							</div>
							<div className="media-body media-middle">
								<ul className="switch">
									{subscriptionsList}
								</ul>
							</div>
							<div className="media-right media-middle">
								<strong>{this.props.finalSubscription.summary}</strong>
							</div>
						</div>
					</li>
					<li>
						<div className="media">
							<div className="media-left media-middle">
								<b>Subscription Status</b>
							</div>
							<div className="media-body media-middle">
								{status}
							</div>
							<div className="media-right media-middle">
								{deliveryText}
							</div>
						</div>
					</li>
					<li>
						<div className="media">
							<div className="media-left media-middle">
							</div>
							<div className="media-body media-middle text-center">
								{saveButton}
							</div>
							<div className="media-right media-middle">
							</div>
						</div>
					</li>
				</ul>
			</Loadable>
		)
	}
}

Subscription.propTypes = {
	finalSubscription : PropTypes.object.isRequired
}

const mapStateToProps=(state)=>{
	return{
		busy : state.twoPersonPlan.busy,
		twoPersonPlanSubscriptionsSelected : state.twoPersonPlan.selectedSubscripton,
		familyPlanSubscriptionsSelected : state.familyPlan.selectedSubscripton,
		twoPersonSubscriptions : state.twoPersonPlan.subscriptions,
		familySubscriptions : state.familyPlan.subscriptions,
		finalSubscription : state.selectedSubscription,
		currentProductSelectionContext : state.context.currentProductSelectionContext,
		account : state.account
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		loadTwoPersonProducts : (onProductLoaded)=>dispatch(loadTwoPersonProducts(onProductLoaded)),
		loadFamilyProducts : (onProductLoaded)=>dispatch(loadFamilyProducts(onProductLoaded)),
		selectTwoPersonSubscription : (product)=>dispatch(selectTwoPersonSubscription(product)),
		selectFamilySubscription : (product)=>dispatch(selectFamilySubscription(product)),
		selectPlan : (product)=>dispatch(selectPlan(product)),
		changeProductSelectionContex : (value)=>{
			return dispatch(changeProductSelectionContex(value))
		},
		getSubscription:(cb)=>dispatch(getSubscription(cb)),
		cancelSubscription:(cb)=>dispatch(cancelSubscription(cb))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Subscription)
