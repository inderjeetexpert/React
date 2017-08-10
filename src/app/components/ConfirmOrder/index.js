import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import NumberFormat from 'react-number-format'
import Loadable from 'react-loading-overlay'
import {saveDelivery} from 'Actions/deliveryActions'

class ConfirmOrderModal extends React.Component {
  state = {
    open: false,
		busy:false,
		message:"",
		subscribed:false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };



	handleSave = () =>{
		let subscription= {}
		let products= Object.assign({}, this.props.selectedProducts)

		subscription.items=[]
		let maxProduct = parseInt(this.props.finalSubscription.meta_description)||0
		Object.keys(products).forEach(key=>{
			const len=subscription.items.length
			let data={}
			if(len<maxProduct){
				data.product_id = products[key].id
				data.description = products[key].name
				data.price = 0
				data.quantity = 1
				data.recurring = true
				subscription.items.push(data)
			}
		})
		subscription.product_id=this.props.finalSubscription.id
		this.setState({busy:true})
		this.props.saveDelivery(subscription,res=>{
			if(res.data.errors && res.data.errors.product_id && res.data.errors.product_id.code==='UNIQUE'){
				this.setState({message:'You already subscribed to this plan',subscribed:true})
			}else{
				this.setState({message:'You successfully subscribed to this plan',subscribed:true})
			}
			this.setState({busy:false})
		})
	}

  render() {

    const actions = [
      <FlatButton
        label="Go Back"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];
		if(this.state.busy){
			actions.push(
				<button className='btn btn-warning disabled' disabled><i className="fa fa-fw fa-spin fa-spinner"></i> Saving</button>
			)
		}else{
			if(this.state.subscribed===false){
				actions.push(
					<RaisedButton
		        label="Confirm"
		        secondary={true}
		        disabled={this.state.busy}
		        onTouchTap={this.handleSave.bind(this)}
		      />
				)
			}

		}
		const price=<NumberFormat value={this.props.finalSubscription.price} decimalPrecision={2} displayType={'text'} thousandSeparator={true} prefix={'$'} />
		let msg =""
		if(this.state.message){
			msg=<p className="text-danger">{this.state.message}</p>
		}
    return (
      <div>
        <RaisedButton label="Start Cooking" onTouchTap={this.handleOpen} />

				<Dialog
					title="Confirm Delivery"
					actions={actions}
					modal={true}
					open={this.state.open}
				>
					<div className="text-center">
						{msg}
						<p>We Will charge you a total of {price} to your:</p>
						<p>Credit Card: <strong>{price}</strong></p>
					</div>
				</Dialog>
      </div>
    );
  }
}

ConfirmOrderModal.propTypes = {
	selectedSubscripton : PropTypes.object.isRequired,
	finalSubscription : PropTypes.object.isRequired,
	selectedProducts : PropTypes.object.isRequired,
	delivery : PropTypes.object.isRequired,
	saveDelivery : PropTypes.func.isRequired
}


const mapStateToProps=(state)=>{
	return{
		selectedSubscripton : state.twoPersonPlan.selectedSubscripton,
		finalSubscription : state.selectedSubscription,
		selectedProducts : state.selectedProducts,
		delivery : state.delivery
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		saveDelivery : (delivery,cb)=>dispatch(saveDelivery(delivery,cb))
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(ConfirmOrderModal)
