import React, { Component } from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import FooterWidget from '../FooterWidget/FooterWidget';
import './configurations.css';


class Configurations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: [
        {
          type: 'Windows / Chrome / 1366x768',
          uniqueVisits: 3
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
    this.options = {
      sortIndicator: false  // disable sort indicator
    };
    return (
      <div className="device-type">
        <Widget>
          <WidgetTop WidgetName="Configurations" />
          <WidgetContent>
            <BootstrapTable data={device} hover bordered={false} options={this.options}>
              <TableHeaderColumn width='60%' dataSort dataField='type' isKey dataFormat={nameFormatter}>Configurations</TableHeaderColumn>
              <TableHeaderColumn width='20%' dataSort dataField='uniqueVisits' dataAlign='right'>Unique visits</TableHeaderColumn>
            </BootstrapTable>
            <FooterWidget limitSelection={true} />
          </WidgetContent>
        </Widget >
      </div >
    )
  }
}

export default Configurations;
