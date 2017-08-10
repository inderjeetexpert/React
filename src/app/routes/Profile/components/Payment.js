import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getCards} from 'Actions/accountActions'
import Loadable from 'react-loading-overlay'
import FullscreenDialog from 'material-ui-fullscreen-dialog'
import CardForm from './CardForm'
class Payment extends React.Component{
	constructor(props){
		super(props)
		this.state={
			loadingCards : true,
			formTitle : "Edit Credit Card",
			open:false,
			hasCards:false,
			card:{},
		}
		this.props.getCards((res)=>{
			if(res.success){
				this.setState({loadingCards:false,hasCards:true,formTitle:'Edit Credit Card'})
			}else{
				this.setState({loadingCards:false,hasCards:false})
			}
		})
	}

	handleCloseForm(){
		this.setState({ open: false })
	}

	handleOpenForm(){
		this.setState({open : true})
	}

	render(){
		let addCard = ""
		if(this.state.loadingCards == false && this.props.cards.length < 1){
			addCard = (
				<li>
					<div className="full-width">
						<div className="pull-left">
							<h4>Add a Card</h4>
							<h6 className="text-danger">There is no active card found in your account you must add one.</h6>
						</div>
						<div className="pull-right">
							<button className="btn-orange" onClick={()=>this.handleOpenForm()}>Add Card</button>
						</div>
					</div>
				</li>
			)
		}
		return(
			<div>
				<Loadable
					active={this.state.loadingCards}
					spinner
					text='Loading Cards...'
					color='#ff9800'
				>
					<ul className="subscription_settings">
						<li>
							<h2>Your Payment Details</h2>
						</li>
						{this.props.cards.map(card=>{
							let cardBrand = ""
							switch(card.brand){
								case 'Visa':
									cardBrand = <i className="fa fa-cc-visa"></i>
									break;
								case 'MasterCard':
									cardBrand = <i className="fa fa-cc-mastercard"></i>
									break;
								case 'JCB':
									cardBrand = <i className="fa fa-cc-jcb"></i>
									break;
								case 'Discover':
									cardBrand = <i className="fa fa-cc-discover"></i>
									break;
								default:
									cardBrand = <i className="fa fa-credit-card-alt"></i>
							}

							return (
								<li key={card.id}>
									<div className="full-width">
										<div className="pull-left card-type">
											{cardBrand}
										</div>
										<div className="pull-left">
											<h4>xxxx-xxx-xxx-{card.last4}</h4>
											<h6>{card.exp_month}/{card.exp_year}</h6>
										</div>
										<div className="pull-right">
											<button className="btn-gray" onClick={()=>this.handleOpenForm()}><i className="fa fa-pencil"></i>Edit</button>
										</div>
									</div>
								</li>
							)
						})}
						{addCard}
					</ul>
				</Loadable>
				<div className="tab-body">
					<FullscreenDialog
						open={this.state.open}
						onRequestClose={() => this.handleCloseForm()}
						title={this.state.formTitle}
						appBarStyle = {{backgroundColor:'#121824'}}
					>
						<CardForm card={this.state.card} handleCloseForm={()=>this.handleCloseForm()}/>
					</FullscreenDialog>
				</div>
			</div>
				)
	}
}

Payment.propTypes = {
	cards : PropTypes.array.isRequired,
	getCards : PropTypes.func.isRequired
}

const mapStateToProps=(state)=>{
	return{
		cards : state.account.cards
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		getCards : (cb)=>dispatch(getCards(cb))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Payment)
