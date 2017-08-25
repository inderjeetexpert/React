import React, { Component } from 'react'
import './moreDetail.css';

export default class MoreDetail extends Component {



	render() {
		let { datailInfo } = this.props;

		let image = "images/no-image.png"

		if (datailInfo.image && datailInfo.image != '') {
			image = datailInfo.image
		}

		let email = "N/A"
		if (datailInfo.email && datailInfo.email != '') {
			email = datailInfo.email
		}

		let phone = "N/A"
		if (datailInfo.phone && datailInfo.phone != '') {
			phone = datailInfo.phone
		}

		let estimatedemployeecount = "0"
		if (datailInfo.estimated_employee_count && datailInfo.estimated_employee_count != '') {
			estimatedemployeecount = datailInfo.estimated_employee_count
		}

		let revenues = "N/A"
		if (datailInfo.revenues[0] && datailInfo.revenues[0] != '') {
			revenues = datailInfo.revenues[0].total
		}

		let socialprofiles = "N/A"
		if (datailInfo.social_profiles[0] && datailInfo.social_profiles[0] != '') {
			socialprofiles = datailInfo.social_profiles[0].name
		}
		let rating = "N/A"
		if (datailInfo.founding_date && datailInfo.founding_date != '') {
			rating = datailInfo.founding_date
		}
		let reviews = "N/A"
		if (datailInfo.description && datailInfo.description != '') {
			reviews = datailInfo.description
		}




		//console.log(datailInfo.social_profiles[0].name);
		return (


			<div className="col-md-3 col-sm-5">
					<ul className="body-border info-list">
							<li className="item-info item-name">


									<img src={image} className="item-thumbnail" alt="thumbnail image" />

									{datailInfo.name}
							</li>
							{/*<li className="item-info item-image"><img src={image} style={{ height: 201, width: 282 }} alt="image" /></li>*/}
							<li className="item-info item-address"><i className="ion-ios-location-outline"></i>{datailInfo.formatted_address}</li>
							<li className="item-info item-phone"><i className="ion-ios-telephone-outline"></i>{phone}</li>
							<li className="item-info item-email"><i className="ion-ios-email-outline"></i>{email}</li>
							<li className="item-other item-revenue"><span>No. Of Employees</span>{estimatedemployeecount}</li>
							<li className="item-other item-revenue"><span>Revenue</span>{revenues}</li>
							<li className="item-other item-employee"><span>Profiles</span>{socialprofiles}</li>
							<li className="item-other item-employee"><span>Founding Date</span>{rating}</li>
							{/*<li className="item-other item-employee item-employee-review"><span>Overview</span><p>{reviews}</p></li>*/}
							<li className="item-other item-employee"><span>Overview</span><p>{reviews}</p></li>
				</ul>
			</div>
		);
	}
}
