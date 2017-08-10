import React from 'react'
import moment from 'moment'
import {Tabs, Tab} from 'material-ui/Tabs'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import TwoPersonSubscriptionCard from 'Components/TwoPersonSubscriptionCard'
import FamilySubscriptionCard from 'Components/FamilySubscriptionCard'
import Config from 'Root/config'

class PlanPricing extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}

	render(){
		let title = moment().startOf('week').format("MMMM DD")+" - "+moment().endOf('week').format("MMMM DD");

		let nextDay = Config.DeliveryDay
		let current = moment();
		let currentDay = current.day();
		if (nextDay <= currentDay)
		nextDay += 7;
		let deliveryDate = current.day(nextDay).format("ddd MMMM Do");
		let paymentDay = moment().day(nextDay-1)
		let trialDays = paymentDay.diff(moment(),'days')
		return(
			<div className="innerbody">
				<div className="price-plan-head">
					<h1>Choose Your Plan</h1>
					<p>We delliver on Monday and Thursdays to your area !</p>
				</div>
				<div className="container">
					<div className="tab-body">
						{/*<h1>{title}<a>></a></h1>
						<strong>Select Weekly Menu</strong>*/}
						{/* <strong><br/>Delivery On : {deliveryDate} Trial : {trialDays}</strong> */}
						<div className="row">
							<div className="col-md-12 margin-15">
								<TwoPersonSubscriptionCard image="img/two-person.jpg"/>
							</div>
							<div className="col-md-12 margin-15">
								<FamilySubscriptionCard image="img/family-person.jpg"/>
							</div>
						</div>
						<div className="plan-quotes">
							<img src="img/quotes.png"/>
							<p>Halal is The Best! The meals are really delicious.<br/> I have tried other food companies and find <br/> Halal to the best !</p>
							<p>Joelle</p>
						</div>
						
					</div>
				</div>
				<div className="common_questions">
					<div className="container">
						<h1>Common Questions</h1>
						<ul>
							<li>
								<b>Do I get to choose my meals?</b>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
								</p>
								<a href="">Read more</a>
							</li>
							<li>
								<b>Do I get to choose my meals?</b>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
								</p>
								<a href="">Read more</a>
							</li>
							<li>
								<b>Do I get to choose my meals?</b>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
								</p>
								<a href="">Read more</a>
							</li>
							<li>
								<b>Do I get to choose my meals?</b>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
								</p>
								<a href="">Read more</a>
							</li>
							<li>
								<b>Do I get to choose my meals?</b>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
								</p>
								<a href="">Read more</a>
							</li>
							<li>
								<b>Do I get to choose my meals?</b>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
								</p>
								<a href="">Read more</a>
							</li>
							<li>
								<b>Do I get to choose my meals?</b>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
								</p>
								<a href="">Read more</a>
							</li>
							<li>
								<b>Do I get to choose my meals?</b>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
								</p>
								<a href="">Read more</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}


export default PlanPricing
