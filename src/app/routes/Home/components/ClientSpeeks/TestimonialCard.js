import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
class TestimonialCard extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<Card>
		      <CardHeader
		        title={this.props.title}
		        subtitle={this.props.subTitle}
		        avatar="http://www.material-ui.com/images/jsa-128.jpg"
		      />
		      <CardMedia>
		        <img src="img/bg2.jpg" alt="" />
		      </CardMedia>
					<CardTitle title="Card title" subtitle="Card subtitle" avatar="http://www.material-ui.com/images/jsa-128.jpg"/>
		    </Card>
		);
	}
}

export default TestimonialCard;
