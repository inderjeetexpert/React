import React from 'react';
import CreateGoogleAdGroup from 'Components/GoogleAdword/addGroup'
import moment from 'moment'

class CreateAdGroup extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let title = moment().startOf('week').format("MMMM DD") + " - " + moment().endOf('week').format("MMMM DD");

		return (
			<div className="innerbody">
					<div className="container-fluid">
            <div className="tab-body">
              <CreateGoogleAdGroup cssClass="tab-background wekly-bg on-the-menu" />
					  </div>
				</div>
			</div>
		)
	}
}


export default CreateAdGroup;
