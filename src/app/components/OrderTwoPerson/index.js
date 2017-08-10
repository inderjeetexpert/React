import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Loadable from 'react-loading-overlay'
import moment from 'moment'
import NumberFormat from 'react-number-format'
import Config from 'Root/config'


class OrderTwoPerson extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			busy : false,
			selectedSubscripton :{},
			subscriptions:[]
		}

	}

	render(){
		let nextDay = Config.DeliveryDay
		let current = moment();
		let currentDay = current.day();
		if (nextDay <= currentDay)
		nextDay += 7;
		let deliveryDate = current.day(nextDay).format("ddd MMMM Do");
		let SelectedItemCount=0;

		return(
			<Loadable
				active={this.props.busy}
				spinner
				text='Loading your box...'
				color='#ff9800'
			>
				<div className="relative">
					<div className="order-calculate-box">
						<h5>Delivery for {deliveryDate}</h5>
						<table>
							<tbody>
								{
									Object.keys(this.props.selectedProducts).map((keyName,keyIndex)=>{
										if(this.props.selectedSubscripton.meta_description>keyIndex){
											SelectedItemCount++
											return (
												<tr key={keyIndex}>
													<td>{this.props.selectedProducts[keyName].name}</td>
													<td><NumberFormat
														value={parseFloat(this.props.selectedSubscripton.price)/parseInt(this.props.selectedSubscripton.meta_description)}
														decimalPrecision={2} displayType={'text'}
														thousandSeparator={true} prefix={'$'}
															/>
													</td>
												</tr>
											)
										}
									})
								}
								<tr>
									<td>Sub Total</td>
									<td><NumberFormat value={this.props.selectedSubscripton.price} decimalPrecision={2} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
								</tr>
								<tr>
									<td>Delivery</td>
									<td>Free</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td>Sum</td>
									<td><NumberFormat value={this.props.selectedSubscripton.price} decimalPrecision={2} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
								</tr>
							</tfoot>
						</table>
					</div>
				</div>
			</Loadable>
		)
	}
}

OrderTwoPerson.propTypes = {
	busy : PropTypes.bool.isRequired,
	selectedSubscripton : PropTypes.object.isRequired,
	subscriptions : PropTypes.array.isRequired,
	finalSubscription : PropTypes.object.isRequired,
	selectedProducts : PropTypes.object.isRequired,
}


const mapStateToProps=(state)=>{
	return{
		busy : state.twoPersonPlan.busy,
		selectedSubscripton : state.twoPersonPlan.selectedSubscripton,
		subscriptions : state.twoPersonPlan.subscriptions,
		finalSubscription : state.selectedSubscription,
		selectedProducts : state.selectedProducts
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderTwoPerson)
