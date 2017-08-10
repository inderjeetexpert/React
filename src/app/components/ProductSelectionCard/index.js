import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Loadable from 'react-loading-overlay'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ClearIcon from 'material-ui/svg-icons/content/clear'
import {blue500, red500, greenA200} from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon'
import Dialog from 'material-ui/Dialog'
import FullscreenDialog from 'material-ui-fullscreen-dialog'
import { LinkContainer } from 'react-router-bootstrap'
import {selectProduct,unselectProduct,clearProductSlection} from 'Actions/subscriptionActions'
import ProductDescription from './ProductDescription'

const customContentStyle = {
  width: '80vw',
	left : '10vw',
	top : 64,
};

class ProductSelectionCard extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			product : this.props.product,
			selectedSubscription : this.props.selectedSubscription,
			selectedProducts : this.props.selectedProducts,
			open:false
		}
	}

	handleClose = () => {
    this.setState({open: false});
  }

	handleOpen = () => {
    this.setState({open: true});
  }


	render(){
		let img = <img className="img-responsive" src="https://www.bbcgoodfood.com/sites/default/files/styles/category_retina/public/spicy-turkey-sweet-potatoes.jpg?itok=P8KtF6JP"/>;
		if(this.props.product.images[0].file){
			img = <img className="img-responsive" onTouchTap={this.handleOpen} src={this.props.product.images[0].file.url}/>;
		}
		let button = (
			<FloatingActionButton className="actionbtn" onClick={()=>this.props.selectProduct(this.props.product)}>
				<ContentAdd />
			</FloatingActionButton>
		)

		if(this.props.selectedProducts){
			if(this.props.selectedProducts[this.props.product.id]){
				button = (
					<FloatingActionButton secondary={true} backgroundColor="#E8500E" className="actionbtn" onClick={()=>this.props.unselectProduct(this.props.product.id)}>
						<ClearIcon color={red500}/>
					</FloatingActionButton>
				)
			}
		}
		if(!this.props.showAddButton){
			button="";
		}

		let actionButton = (
			<LinkContainer to="/signup">
				<RaisedButton
					label='Get this recipe delivered'
					onTouchTap={() => this.setState({ open: false })}
					backgroundColor="#FFAB00"
					labelColor="#fff"
				/>
			</LinkContainer>
		)

		if(this.props.auth.loggedIn){
			actionButton=(
				<RaisedButton
					label='Add to box'
					onTouchTap={()=>this.props.selectProduct(this.props.product)}
					backgroundColor="#FFAB00"
					labelColor="#fff"
				/>
			)
			if(this.props.selectedProducts){
				if(this.props.selectedProducts[this.props.product.id]){
					actionButton=(
						<RaisedButton
							label='Remove from box'
							onTouchTap={()=>this.props.unselectProduct(this.props.product.id)}
							backgroundColor="#E8500E"
							labelColor="#fff"
						/>
					)
				}
			}

		}


		return(
			<div className="thumbnail menu-thumb">
				<div className="recep-img">
					{img}
				</div>
				<div className="caption">
					{button}
					<h3>{this.props.product.name}</h3>
					<p>{this.props.product.summary}</p>
				</div>
				<FullscreenDialog
          actionButton={actionButton}
					title={this.props.product.name}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
					contentStyle={{}}
					style = {customContentStyle}
					appBarStyle = {{backgroundColor:'rgba(0, 0, 0, 0.80)'}}
        >
					<ProductDescription product={this.props.product} img={img}/>

        </FullscreenDialog>
			</div>
		)
	}
}

ProductSelectionCard.propTypes = {
	product : PropTypes.object.isRequired,
	selectedSubscription : PropTypes.object.isRequired,
	selectProduct : PropTypes.func.isRequired,
	clearProductSlection : PropTypes.func.isRequired
}

const mapStateToProps=(state)=>{
	return{
		selectedSubscription : state.selectedSubscription,
		selectedProducts : state.selectedProducts,
		auth:state.auth
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		selectProduct : (product)=>dispatch(selectProduct(product)),
		unselectProduct : (productId)=>dispatch(unselectProduct(productId)),
		clearProductSlection : ()=>dispatch(clearProductSlection())
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(ProductSelectionCard)
