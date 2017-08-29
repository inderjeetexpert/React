import React, { Component } from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import FooterWidget from '../FooterWidget/FooterWidget';
import './operatingsystemversion.css';


class OperatingSystemVersion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: [
        {
          type: 'Windows 10',
          uniqueVisitor: '3'
        }
      ]
    }
  }

  nameFormatter(cell) {
    return `<img src="images/piwik/plugins/Morpheus/icons/dist/os/WIN.png" /> ${cell}`;
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
              <TableHeaderColumn width='75%' dataField='type' isKey dataFormat={nameFormatter}>Operating system versions</TableHeaderColumn>
              <TableHeaderColumn width='25%' dataSort dataField='uniqueVisitor' dataAlign='right'>Unique visitor</TableHeaderColumn>
            </BootstrapTable>
            <FooterWidget limitSelection={true} />
          </WidgetContent>
        </Widget >
      </div >
    )
  }
}

export default OperatingSystemVersion;
