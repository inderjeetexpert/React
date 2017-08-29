import React from 'react';
import './companydetail.css';


class AddNotesFormActivity extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {


		return (

			<div>
					<div className="activity-box-body">
						<div className="row text-inline">
								<div className="col-md-4">
										<label>Due Date</label>
										<div className="input-group">
												<span className="input-group-addon" id="basic-addon1"><img src="images/calendar.svg" /></span>
												<input type="text" className="form-control" placeholder="Aug 07 2017" />
										</div>
								</div>
								<div className="col-md-4">
										<div className="input-group">
												<span className="input-group-addon" id="basic-addon1"><img src="images/clock.svg" /></span>
												<input type="text" className="form-control" placeholder="9:00 am" />
												<span className="input-group-addon" id="basic-addon1"><img src="images/clock.svg" /></span>
												<input type="text" className="form-control" placeholder="5:00 pm" />
												<vr></vr>
										</div>
								</div>
								<div className="col-md-4">
										<label>Set Reminder</label>
										<select>
												<option>None</option>
										</select>
								</div>
						</div>
						<input className="form-control subject" placeholder="What are you meeting about?" type="text" />
						<textarea placeholder="Start typing to leave a activity"></textarea>
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


export default AddNotesFormActivity;
