import React from 'react'
import CreateSmtpForm from './CreateSmtpForm'
import { Button, Modal } from 'react-bootstrap'
import CreateSmtpModel from './CreateSmtpModel'

class SendMassEmailModal extends React.Component {
	constructor() {
		super()
		this.state = {
			showModal: true
		}
		this.close = this.close.bind(this)
	}
	close() {
		this.setState({ showModal: false });
	}

	render() {
		let closeModal = () => this.setState({ open: false })
		return (
			<div>
					<Modal
							show={this.props.showModal}
							onHide={this.props.closeModal}
					>
							<Modal.Header>
									<h4 className="pull-left">Template</h4>
									<a className="pull-right" onClick={this.props.closeModal}><i className="ion-android-close"></i></a>
							</Modal.Header>
							<Modal.Body>
									<div className="row">
											<div className="col-md-6">
													<p>This will send a mass email to all your saved businesses and Contacts.</p>
													<div className="row">


													</div>
											</div>
											<div className="col-md-5">

													<div className="form-group">


															{this.props.data.map((m) => {

																	return <img key={m.id} src={m.thumb_image}/>
															})}


													</div>

											</div>
											<div className="col-md-1">


											</div>
									</div>





							</Modal.Body>
							<Modal.Footer>

							</Modal.Footer>
					</Modal>
			</div>
		)
	}
}

export default SendMassEmailModal
