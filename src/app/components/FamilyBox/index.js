import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Loadable from 'react-loading-overlay'
import AutoAffix from 'react-overlays/lib/AutoAffix'
import {List, ListItem} from 'material-ui/List'
import ClearIcon from 'material-ui/svg-icons/content/clear'
import {blue500, red500, greenA200} from 'material-ui/styles/colors'
import moment from 'moment'
import _ from 'lodash'
import NumberFormat from 'react-number-format'
import Config from 'Root/config'
import {loadFamilyProducts,selectFamilySubscription,selectPlan} from 'Actions/subscriptionActions'
import {changeProductSelectionContex} from 'Actions/stateActions'
import {unselectProduct} from 'Actions/subscriptionActions'
import {changeTab} from 'Actions/signupActions'
import ConfirmOrderModal from 'Components/ConfirmOrder'


class FamilyBox extends React.Component {
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
		this.props.loadFamilyProducts(()=>{
			if(this.props.subscriptions.length>0 && !this.props.selectedSubscripton.id){
				this.props.selectFamilySubscription(this.props.subscriptions[0])
			}
			if(!this.props.finalSubscription.id ){
				this.props.selectPlan(this.props.subscriptions[0])
			}else{
				if(!_.find(this.props.subscriptions,(o)=>{return o.id === this.props.finalSubscription.id})){
					this.props.selectPlan(this.props.subscriptions[0])
				}
			}

		})
	}

	handleSelect=(product)=>{
		this.props.subscriptions.map((value,index)=>{
			if(value.id===product.id){
				this.props.selectFamilySubscription(value)
				this.props.selectPlan(product)
				this.props.changeProductSelectionContex('FAMILY_PLAN')
			}
		})
	}

	render(){
		let nextDay = Config.DeliveryDay
		let current = moment()
		let currentDay = current.day()
		if (nextDay <= currentDay)
		nextDay += 7
		let deliveryDate = current.day(nextDay).format("ddd MMMM Do")



		let SelectedItemCount=0;
		let blankItems =[];
		let nextButton ="";
		for(let i=Object.keys(this.props.selectedProducts).length; i< this.props.selectedSubscripton.meta_description; i++){
			blankItems.push(
				<ListItem key={'damnKey'+i} primaryText="select product"></ListItem>
			)
		}

		if(Object.keys(this.props.selectedProducts).length >= this.props.selectedSubscripton.meta_description){
			if(this.props.auth.loggedIn){
				nextButton = (
					<ConfirmOrderModal/>
				)
			}else{
				nextButton = (
					<button className="btn btn-warning btn-block btn-lg" onClick={()=>this.props.changeTab('tab4')}>Continue</button>
				)
			}
		}



		return(
			<Loadable
				active={this.props.busy}
				spinner
				text='Loading your box...'
				color='#ff9800'
			>
				<div className="relative">
					<div className="order-calculate-box">
						<h3>Your Basket</h3>
						<p>Delivers on</p>
						<div className="date">{deliveryDate}</div>
						<p>Number of recipes</p>
						<ul className="choose_recipes_button">
							{this.props.subscriptions.map((product,index)=>{
									let cName=''
								if(this.props.selectedSubscripton && (this.props.selectedSubscripton.id === product.id)){
										cName='active'
								}
								return <li key={product.id} className={cName} onClick={()=>this.handleSelect(product)}>{product.meta_description}</li>
							})}
						</ul>
						<List className="choose_recipes">
							{
								Object.keys(this.props.selectedProducts).map((keyName,keyIndex)=>{
									if(this.props.selectedSubscripton.meta_description>keyIndex){
										SelectedItemCount++
										return (
											<ListItem
												key={keyName}
												onClick={()=>this.props.unselectProduct(keyName)}
												primaryText={this.props.selectedProducts[keyName].name}
												rightIcon={<ClearIcon color={red500} />}
											/>
										)
									}
								})
							}
							{
								blankItems
							}
						</List>

						<h2><NumberFormat value={this.props.selectedSubscripton.price} decimalPrecision={2} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h2>
						{nextButton}
					</div>
				</div>
			</Loadable>
		)
	}
}

FamilyBox.propTypes = {
	busy : PropTypes.bool.isRequired,
	selectedSubscripton : PropTypes.object.isRequired,
	subscriptions : PropTypes.array.isRequired,
	finalSubscription : PropTypes.object.isRequired,
	selectPlan : PropTypes.func.isRequired,
	changeProductSelectionContex : PropTypes.func.isRequired,
	selectedProducts : PropTypes.object.isRequired,
	auth : PropTypes.object.isRequired
}


const mapStateToProps=(state)=>{
	return{
		busy : state.familyPlan.busy,
		selectedSubscripton : state.familyPlan.selectedSubscripton,
		subscriptions : state.familyPlan.subscriptions,
		finalSubscription : state.selectedSubscription,
		selectedProducts : state.selectedProducts,
		auth : state.auth
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		loadFamilyProducts : (onProductLoaded)=>dispatch(loadFamilyProducts(onProductLoaded)),
		selectFamilySubscription : (product)=>dispatch(selectFamilySubscription(product)),
		selectPlan : (product)=>dispatch(selectPlan(product)),
		changeProductSelectionContex : (value)=>{
			return dispatch(changeProductSelectionContex(value))
		},
		unselectProduct : (productId)=>dispatch(unselectProduct(productId)),
		changeTab : (tabName)=>dispatch(changeTab(tabName))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(FamilyBox)
