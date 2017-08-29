import React, { Component } from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import FooterWidget from '../FooterWidget/FooterWidget';
import './devicemodel.css';


class DeviceModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: [
        {
          type: 'Model',
          uniqueVisitor: '30%'
        }
      ]
    }
  }

  nameFormatter(cell) {
    return `<img src="images/piwik/plugins/Morpheus/icons/dist/devices/desktop.png" /> ${cell}`;
  }


  componentDidMount() {
  }

  render() {
    let { device } = this.state;
    let { nameFormatter } = this;
    return (
      <div className="device-model">
        <Widget>
          <WidgetTop WidgetName="Device model" />

          <WidgetContent>
            <BootstrapTable data={device} hover bordered={false}>
              <TableHeaderColumn width='75%' dataField='type' isKey dataFormat={nameFormatter}>Model</TableHeaderColumn>
              <TableHeaderColumn width='25%' dataSort dataField='uniqueVisitor' dataAlign='right'>Unique visitor</TableHeaderColumn>
            </BootstrapTable>
            <FooterWidget limitSelection={true} />
          </WidgetContent>
        </Widget >

      </div >
    )
  }
}

export default DeviceModel;
