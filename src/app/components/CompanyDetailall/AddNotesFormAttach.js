import React from 'react';
import './companydetail.css';
import FileDrop from 'react-file-drop';




class AddNotesFormAttach extends React.Component {
	constructor(props) {
		super(props)

  this.handleFileDrop= this.handleFileDrop.bind(this);

	}

	handleFileDrop(files, event) {
			 console.log(files, event);
	 }



	render() {


		return (

			<div className="activity-box-body">

					<FileDrop className="dragDropArea" style={{height:'10px'}} frame={document} onDrop={this.handleFileDrop}>

					</FileDrop>
					<div className="dragDropArea">Drag here or <span> browse </span>  to upload</div>


			</div>


		)
	}
}


export default AddNotesFormAttach;
