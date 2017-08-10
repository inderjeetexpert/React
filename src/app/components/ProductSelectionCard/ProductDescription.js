import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ClearIcon from 'material-ui/svg-icons/content/clear'
import CheckCircle from 'material-ui/svg-icons/action/check-circle'
import {List, ListItem} from 'material-ui/List'
import { Link } from 'react-router-dom'
class ProductDescription extends React.Component {
	constructor(props) {
		super(props)
		this.state={
		}
	}



	render(){

		let prepTime=0
		let difficultyLevel=''
		let ingredients = []
		let rIngredients = []

		if(this.props.product.attributes){
			Object.keys(this.props.product.attributes).map((key)=>{
				if(this.props.product.attributes[key].id==='prep-time'){
					prepTime = this.props.product.attributes[key].value
				}
				switch(this.props.product.attributes[key].id){
					case 'difficulty-level':
						difficultyLevel=this.props.product.attributes[key].value
						break;
					case 'prep-time':
						prepTime=this.props.product.attributes[key].value
						break;
					case 'ingredients':
						let array = this.props.product.attributes[key].value.split(',')
						array.map((val)=>{
							ingredients.push(val.trim())
						})
						break;
				}
				console.log(ingredients)
				rIngredients = ingredients.splice(0,Math.ceil(ingredients.length/2))
			})
		}

		let whatWeSend = null
		if(ingredients.length > 0){
			whatWeSend = (
				<div>
					<hr/>
					<h1 style={{fontSize:24}}>What We Send</h1>
					<div className="col-md-12">
						<div className="col-md-6">
							<List>
								{ingredients.map((value,index)=>{
									return <ListItem key={index} leftIcon={<CheckCircle />} primaryText={value}/>
								})}
							</List>
						</div>
						<div className="col-md-6">
							<List>
								{rIngredients.map((value,index)=>{
									return <ListItem key={index} leftIcon={<CheckCircle />} primaryText={value}/>
								})}
							</List>
						</div>
					</div>
					<div style={{marginTop:50}}></div>
					<hr/>
				</div>
			)
		}



		return(
			<div className="" style={{padding:20,marginBottom:150}}>
				<h1 style={{fontSize:20}}>{this.props.product.summary}</h1>
				<div className="recep-img">
					{this.props.img}
				</div>
				<div className="">
					<br/>
					<h1 style={{fontSize:24}}>The Scoop</h1>
					<p>{this.props.product.description}</p>
					{whatWeSend}
					<p>&nbsp;</p>
				</div>
			</div>
		)
	}
}




export default ProductDescription
