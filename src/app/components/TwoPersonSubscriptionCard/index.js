import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Loadable from 'react-loading-overlay'
import NumberFormat from 'react-number-format'
import {loadTwoPersonProducts,selectTwoPersonSubscription,selectPlan} from 'Actions/subscriptionActions'
import {changeProductSelectionContex} from 'Actions/stateActions'
import {changeTab} from 'Actions/signupActions'


class SubscriptionCard extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			busy : false,
			selectedSubscripton :{},
			subscriptions:[]
		}
		handleSelect:this.handleSelect.bind(this)
	}

	componentWillMount(){
		this.props.loadTwoPersonProducts(()=>{
			if(this.props.subscriptions.length>0 && !this.props.selectedSubscripton.id){
				this.props.selectTwoPersonSubscription(this.props.subscriptions[0])
			}
		})
	}

	handleSelect=(pId)=>{
		this.props.subscriptions.map((value,index)=>{
			if(value.id===pId){
				this.props.selectTwoPersonSubscription(value)
				this.props.selectPlan({});
			}
		})
	}

	handlePlanSelect=(product)=>{
		this.props.selectPlan(product)
		this.props.changeProductSelectionContex('TWO_PERSON_PLAN')
	}


	render(){

		let price =(
			<NumberFormat style={{color:"#E8500E",fontSize:50}} className="pricing-rate" value={this.props.selectedSubscripton.price} decimalPrecision={2} displayType={'text'} thousandSeparator={true} />
		)
		let selectButton=(
			<button onClick={()=>this.handlePlanSelect(this.props.selectedSubscripton)} className="btn btn-warning btn-lg" role="button">Select Plan</button>
		)
		if(this.props.finalSubscription && this.props.finalSubscription.id){
			this.props.subscriptions.map((subs,index)=>{
				if(subs.id === this.props.finalSubscription.id){
					selectButton=(
						<button className="btn btn-warning btn-lg disabled" disabled role="button"><i className="fa fa-fw fa-check"></i>Selected</button>
					)
				}
			})
		}

		return(
			<Loadable
				active={this.props.busy}
				spinner
				text='Loading 2 person plans...'
				color='#ff9800'
			>
				<div className="row class-plan-parant">
					<div className="col-md-6">
						<img className="img-responsive plan-image" src={this.props.image}/>
					</div>
					<div className="col-md-6 col-xs-12 self-center">
							<h3>{this.props.selectedSubscripton.name}</h3>
							<b>{this.props.selectedSubscripton.summary}</b>
							<ul>
								{this.props.subscriptions.map((product,index)=>{
									let cName='btn btn-default'
									if(this.props.selectedSubscripton && (this.props.selectedSubscripton.id === product.id)){
										cName='btn btn-warning'
									}
									return(
										<li key={product.id}><button onClick={()=>this.handleSelect(product.id)} className={cName}>{product.meta_description}</button></li>
									) 
								})}
								
							</ul>
							<strong>$ {price} / weekly</strong>
							{selectButton}
					</div>
				</div>
			</Loadable>
		)
	}
}

SubscriptionCard.propTypes = {
	busy : PropTypes.bool.isRequired,
	selectedSubscripton : PropTypes.object.isRequired,
	subscriptions : PropTypes.array.isRequired,
	finalSubscription : PropTypes.object.isRequired,
	selectPlan : PropTypes.func.isRequired,
	changeProductSelectionContex : PropTypes.func.isRequired,
	changeTab : PropTypes.func.isRequired
}


const mapStateToProps=(state)=>{
	return{
		busy : state.twoPersonPlan.busy,
		selectedSubscripton : state.twoPersonPlan.selectedSubscripton,
		subscriptions : state.twoPersonPlan.subscriptions,
		finalSubscription : state.selectedSubscription
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		loadTwoPersonProducts : (onProductLoaded)=>dispatch(loadTwoPersonProducts(onProductLoaded)),
		selectTwoPersonSubscription : (product)=>dispatch(selectTwoPersonSubscription(product)),
		selectPlan : (product)=>dispatch(selectPlan(product)),
		changeProductSelectionContex : (value)=>{
			return dispatch(changeProductSelectionContex(value))
		},
		changeTab : (tabName)=>dispatch(changeTab(tabName))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SubscriptionCard)
