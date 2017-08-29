import React, { Component } from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import FooterWidget from '../FooterWidget/FooterWidget';
import './tablewiththreecol.css';


class TableWithTwoCol extends Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {

  }

  render() {
    let { table, dataFormat } = this.props;
    this.options = {
      sortIndicator: false
    };
    return (
      <div className="table-component">
        <Widget>
          <WidgetTop WidgetName={table.widegetName} />
          <WidgetContent>
            <BootstrapTable data={table.data} options={this.options} hover bordered={false}>
              <TableHeaderColumn width='60%' dataSort dataField={table.dataFeild1} dataFormat={dataFormat} isKey>{table.header1}</TableHeaderColumn>
              <TableHeaderColumn width='20%' dataSort dataField={table.dataFeild2} dataAlign='right'>{table.header2}</TableHeaderColumn>
              <TableHeaderColumn width='20%' dataSort dataField={table.dataFeild3} dataAlign='right'>{table.header3}</TableHeaderColumn>
            </BootstrapTable>
            <FooterWidget limitSelection={false} />
          </WidgetContent>
        </Widget >
      </div >
    )
  }
}

export default TableWithTwoCol;
