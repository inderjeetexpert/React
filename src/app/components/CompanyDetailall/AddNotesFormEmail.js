import React from 'react';
import './companydetail.css';


class AddNotesFormEmail extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {


		return (

			<div>
				<div className="activity-box-body">
					<div className="input-group">
						<span className="input-group-addon">To</span>
						<input type="text" class="form-control" aria-label="" placeholder="Choose a recipient" />
						<span className="input-group-addon"><a>Cc</a> <a>Bcc</a></span>
					</div>
					<div className="input-group">
						<span className="input-group-addon">Form</span>
						<input type="text" class="form-control" aria-label="" />
					</div>

					<input type="text" className="form-control subject" placeholder="Subject" />
					<textarea placeholder="Start typing to leave a note"></textarea>
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


export default AddNotesFormEmail;
