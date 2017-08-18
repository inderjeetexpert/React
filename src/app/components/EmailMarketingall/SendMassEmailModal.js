import React from 'react'
import CreateSmtpForm from './CreateSmtpForm'
import { Button, Modal } from 'react-bootstrap'
import CreateSmtpModel from './CreateSmtpModel'

class SendMassEmailModal extends React.Component{
	constructor(){
		super()
		this.state = {
			showModal:true
		}
		this.close = this.close.bind(this)
	}
	close() {
    this.setState({ showModal: false });
  }

	render(){
		let closeModal = () => this.setState({ open: false })
		return (
			<div>
					<Modal
							show={this.props.showModal}
							onHide={this.props.closeModal}
					>
							<Modal.Header>
									<Button className="pull-right" onClick={this.props.closeModal}><i className="fa fa-fw fa-times"></i></Button>
							</Modal.Header>
							<Modal.Body>
									<span className="smtp">
											<i className="ion-ios-plus-outline" style={{float:"right",
													color: "#212121",
													backgroundColor: "aquamarine",
											fontSize: 14,}} onClick={() => this.setState({showSmtpCreateModel:true})}>
													<CreateSmtpModel showModal={this.state.showSmtpCreateModel} closeModal={()=>{this.setState({showSmtpCreateModel:false})}}/>
											</i>
											<select name="cars" style={{float:"right"}}>
													<option value="volvo">Choose your option</option>
													{this.props.dataUser.map((m) => {

															return <option key={m.id} value={m.from_email}>{m.name}</option>
													})}
											</select>

									</span>

									<p>This will send a mass email to all your saved businesses and Contacts</p>


							</Modal.Body>
							<Modal.Footer>
							</Modal.Footer>
					</Modal>
			</div>
		)
	}
}

export default SendMassEmailModal
