import React, { Component } from 'react'
import './moreDetail.css';

export default class MoreDetail extends Component {


  render() {
    let { datailInfo } = this.props;

		let image = "images/no-image.png"

		if (datailInfo.image && datailInfo.image != '') {
				image = datailInfo.image
		}

    return (


      <div className="col-md-3 col-sm-5">
					<ul className="body-border info-list">
							<li className="item-info item-name">


									<img src={image} className="item-thumbnail" alt="thumbnail image" />

									{datailInfo.name}
							</li>
							<li className="item-info item-image"><img src={image} style={{height: 201, width:282 }} alt="image" /></li>
							<li className="item-info item-address">{datailInfo.formatted_address}</li>
							<li className="item-info item-phone">{datailInfo.phone}</li>
          <li className="item-info item-email">email@example.com</li>
          <li className="item-other item-revenue"><span>Revenue</span> 5000</li>
          <li className="item-other item-employee"><span># of Employees</span> 50</li>
        </ul>
      </div>
    );
  }
}
