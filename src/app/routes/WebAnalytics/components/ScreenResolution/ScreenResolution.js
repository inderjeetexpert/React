import React, { Component } from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import FooterWidget from '../FooterWidget/FooterWidget';
import './screenresolution.css';


class ScreenResolution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: [
        {
          type: '1366x768',
          uniqueVisitor: '3'
        }
      ]
    }
  }

  componentDidMount() {
  }

  render() {
    let { device } = this.state;
    return (
      <div className="screen-resolution">
        <Widget>
          <WidgetTop WidgetName="Screen Resolution" />

          <WidgetContent>
            <BootstrapTable data={device} hover bordered={false}>
              <TableHeaderColumn width='75%' dataField='type' isKey>Resolution</TableHeaderColumn>
              <TableHeaderColumn width='25%' dataSort dataField='uniqueVisitor' dataAlign='right'>Unique visitor</TableHeaderColumn>
            </BootstrapTable>
            <FooterWidget limitSelection={true} />
          </WidgetContent>
        </Widget >

      </div >
    )
  }
}

export default ScreenResolution;
