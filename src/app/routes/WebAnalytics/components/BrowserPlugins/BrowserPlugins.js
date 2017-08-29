import React, { Component } from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import FooterWidget from '../FooterWidget/FooterWidget';
import './browserplugins.css';


class BrowserPlugins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: [
        {
          type: 'Windows 10',
          visitsPercentage: '100%',
          visits: 3
        }
      ]
    }
  }

  nameFormatter(cell) {
    return `<img src="images/piwik/plugins/Morpheus/icons/dist/plugins/cookie.png" /> ${cell}`;
  }

  componentDidMount() {
  }

  render() {
    let { device } = this.state;
    let { nameFormatter } = this;
    return (
      <div className="device-type">
        <Widget>
          <WidgetTop WidgetName="Operating System versions" />
          <WidgetContent>
            <BootstrapTable data={device} hover bordered={false}>
              <TableHeaderColumn width='60%' dataField='type' isKey dataFormat={nameFormatter}>Plugin</TableHeaderColumn>
              <TableHeaderColumn width='20%' dataSort dataField='visitsPercentage' dataAlign='right'>% Visits</TableHeaderColumn>
              <TableHeaderColumn width='20%' dataSort dataField='visits' dataAlign='right'>Visits</TableHeaderColumn>
            </BootstrapTable>
            <FooterWidget limitSelection={true} />
          </WidgetContent>
        </Widget >
      </div >
    )
  }
}

export default BrowserPlugins;
