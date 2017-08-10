import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TestimonialCard from './TestimonialCard';
const ClientSpeeks = () =>(
	<div className="whatClientSay">
		<div className="container">
			<h2 className="text-center">What our home chefs are saying</h2>
			<div className="client-box-holder">
				<div className="client-box">
					<TestimonialCard title="Mr Joe Smith" subTitle="5 days ago" text="Seriously such an amazing concept - all the ingredients right at your door-step.."/>
				</div>
				<div className="client-box">
					<TestimonialCard title="Md. Ahmed" subTitle="30 days ago" text="During a busy week, it is nice to come home to a box of groceries including spices and sauces all measured and ready to cook with pictures as a guide."/>
				</div>
				<div className="client-box">
					<TestimonialCard title="Javed Akhtar" subTitle="3 months ago" text="Ohmyfurrrr this is SO good!!"/>
				</div>
			</div>
		</div>
	</div>
);

export default ClientSpeeks;
