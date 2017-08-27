import React from 'react';
import './companydetail.css';


class AddNotesFormAttach extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {


		return (

			<div>
					<div className="activity-box-body">
							<textarea placeholder="Start typing to leave a attachment"></textarea>
					</div>
					<div className="activity-box-footer">
							<div className="pull-left">
									<a><img src="images/attachment.svg" /></a>
									<a><img src="images/link-1.svg" /></a>
							</div>
							<div className="pull-right">
									<button className="btn btn-primary">Save Note</button>
									<button className="btn btn-secondary">Discard</button>
							</div>
					</div>
			</div>


		)
	}
}


export default AddNotesFormAttach;
