import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Tabs, Tab } from 'material-ui/Tabs'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';

const styles = {
	headline: {
		fontSize: 24,
		paddingTop: 16,
		marginBottom: 12,
		fontWeight: 400,
	},
	buttonStyle: {
		background: 'black'
	}
};

class TabMenuall extends React.Component {
	constructor() {
		super()
		this.state = {
			showModal: true,
			dataUser: [],
			data: [],
			dataUser: [],
			busy: true,
			value: 'a',
			recordcount: null,
			checked: false
		}

		axios.defaults.headers.common['Authorization'] = "Token " + localStorage.getItem('key');
		axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.get('https://carderockllc.com/api/v1/business/searches/').then(res => {
			this.setState({ data: res.data.results })
		}).catch(err => {
			console.error(err);
		});

		axios.defaults.headers.common['Authorization'] = "Token " + localStorage.getItem('key');
		axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.get('https://carderockllc.com/api/v1/contacts/').then(result => {
			//console.log(result.data.results);
			this.setState({ dataUser: result.data.results, recordcount: result.data.length, busy: false })
			//console.log(this.state.data.results)
		}).catch(err => {
			this.setState({ busy: false });
			//console.log(err)
		})

		this.close = this.close.bind(this)
	}
	close() {
		this.setState({ showModal: false });
	}

	handleChange(value) {
		this.setState({
			value: value,
		});
	};


	checkboxDeselect() {
		const status = this.state.checked
		this.setState({ checked: false }, () => {
			this.checkAll(false)
		});
	}

	checkboxToggle() {
		const status = !this.state.checked
		this.setState({ checked: true }, () => {
			this.checkAll(true)
		});
	}
	checkAll(state) {
		const newData = this.state.data.map((m) => {
			m.isChecked = state;
			return m;
		})
		this.setState({
			data: newData
		})
	}
	checkDeselect(state) {
		const newData = this.state.data.map((m) => {
			m.isChecked != state;
			return m;
		})
		this.setState({
			data: newData
		})
	}
	handleCheck(id) {
		let newState = this.state.data.map(d => {
			if (m.id === id) {
				m.isChecked = !m.isChecked
			}
			return m
		})
		this.setState({ data: newState })
	}


	render() {
		let closeModal = () => this.setState({ open: false })

		return (
			<div className="custom-tab">

					<MuiThemeProvider>
							<Tabs
									value={this.state.value}
									onChange={this.handleChange.bind(this)}

							>
									<Tab label="" value="a" className="tab-custome" icon={<FontIcon className="material-icons"><img src="../images/store.svg" />Business</FontIcon>}>
											<div>
													<div className="selectAll">
															<div className="form-group search-check-box"><input className="form-control search-check-box" placeholder="Search Business" type="text" className="form-control" /></div>
															<label className="pull-right">
																	<div className="custome-check"><input type="checkbox" onChange={this.checkboxDeselect.bind(this)} checked={!this.state.checked} /><span></span></div>
																	<strong>Deselect All</strong>
															</label>
															<label className="pull-right">
																	<div className="custome-check"><input type="checkbox" onChange={this.checkboxToggle.bind(this)} checked={this.state.checked} /><span></span></div>
																	<strong>Select All</strong>
															</label>
													</div>
													<div className="checkbox">
															<label>
																	<div className="custome-check"><input type="checkbox" value="" /><span></span></div>
																	Manually Added
															</label>
													</div>
													{this.state.data.map((m) => {
															//console.log(m);
															return (<div key={m.id} className="checkbox">
																	<label>
																			<div className="custome-check"><input type="checkbox" checked={m.isChecked} onChange={() => { this.handleCheck(m.id) }} /><span></span></div>
																			<div className="check-image"><img src={m.image} /></div> {m.search.what} | {m.search.where}
																	</label>
															</div>

															)
													})}


											</div>
									</Tab>
									<Tab label="" value="b" className="tab-custome" icon={<FontIcon className="material-icons"><img src="images/contact.svg" />Contacts</FontIcon>}>
											<div>
													<div className="selectAll">

									<label className="pull-right">
										<div className="custome-check"><input type="checkbox" value="" /><span></span></div>
										<strong>Deselect All</strong>
									</label>
									<label className="pull-right">
										<div className="custome-check"><input type="checkbox" value="" /><span></span></div>
										<strong>Select All</strong>
									</label>
								</div>
								{this.state.dataUser.map((s) => {
									return (<div key={s.id} className="checkbox">
										<label>
											<div className="custome-check"><input type="checkbox" value="" /><span></span></div>
											{s.contact_name}
										</label>
									</div>
									)
								})}
							</div>
						</Tab>
						<Tab label="" value="c" className="tab-custome" icon={<FontIcon className="material-icons"><img src="images/seo-template.svg" /> List Template</FontIcon>}>
							<div>
								<div className="selectAll" style={{ paddingLeft: 320 }}>

									<label className="pull-right">
										<div className="custome-check"><input type="checkbox" value="" /><span></span></div>
										<strong>Deselect All</strong>
									</label>
									<label className="pull-right">
										<div className="custome-check"><input type="checkbox" value="" /><span></span></div>
										<strong>Select All</strong>
									</label>
								</div>
								{this.state.dataUser.map((s) => {
									return (<div key={s.id} className="checkbox">
										<label>
											<div className="custome-check"><input type="checkbox" value="" /><span></span></div>
											{s.contact_name}
										</label>
									</div>
									)
								})}
							</div>
						</Tab>

					</Tabs>
				</MuiThemeProvider >

			</div >
		)
	}
}

export default TabMenuall
