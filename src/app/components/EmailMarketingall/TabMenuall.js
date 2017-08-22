import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import {Tabs, Tab} from 'material-ui/Tabs'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
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
			recordcount: null

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

	render() {
		let closeModal = () => this.setState({ open: false })

		return (
			<div>

					<MuiThemeProvider>
							<Tabs
									value={this.state.value}
									onChange={this.handleChange.bind(this)}

							>
									<Tab label="Business" value="a" style={{color: 'black'}}>
											<div>

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
																			<div className="custome-check"><input type="checkbox" value="" /><span></span></div>
																			{m.search.what} | {m.search.where}
																	</label>
															</div>

															)
													})}


											</div>
									</Tab>
									<Tab label="Contacts" value="b" style={{color: 'black'}}>
											<div>
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
									<Tab label="List Template" value="c" style={{color: 'black'}}>
											<div>
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
					</MuiThemeProvider>

			</div>
		)
	}
}

export default TabMenuall
