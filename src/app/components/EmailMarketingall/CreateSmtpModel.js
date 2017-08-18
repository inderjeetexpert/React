import React from 'react'
import CreateSmtpForm from './CreateSmtpForm'
import { Button, Modal } from 'react-bootstrap';

class CreateSmtpModel extends React.Component{
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
									<CreateSmtpForm closeModal={this.props.closeModal}/>
							</Modal.Body>
							<Modal.Footer>
							</Modal.Footer>
					</Modal>
			</div>
		)
	}
}

export default CreateSmtpModel
