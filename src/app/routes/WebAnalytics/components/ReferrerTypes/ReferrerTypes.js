import React from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import FooterWidget from '../FooterWidget/FooterWidget'
import Widget from '../Widget/Widget';
import './referrerstypes.css'
class ReferrerTypes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{
        referrerType: 'Direct entry',
        visits: 6,
        uniqueVisitors: 5,
        users: '-',
        actions: 6,
        actionPerVisit: 2.7,
        avgTime: '5 mins 57 sec',
        bouncingRate: '33%'
      }]
    }
  }

  render() {

    return (
      <div className="referrer-types">
        <Widget>
          <WidgetTop WidgetName="Referrer Types" />
          <WidgetContent>
            <BootstrapTable data={this.state.products} condensed hover>
              <TableHeaderColumn width='30%' dataField='referrerType' isKey>Referrer Type</TableHeaderColumn>
              <TableHeaderColumn width='10%' dataField='visits'>Visits</TableHeaderColumn>
              <TableHeaderColumn width='10%' dataField='uniqueVisitors'>Unique visitors</TableHeaderColumn>
              <TableHeaderColumn width='10%' dataField='users'>Users</TableHeaderColumn>
              <TableHeaderColumn width='10%' dataField='actions'>Actions</TableHeaderColumn>
              <TableHeaderColumn width='10%' dataField='actionPerVisit'>Actions per visit</TableHeaderColumn>
              <TableHeaderColumn width='10%' dataField='avgTime'>Avg. time on web</TableHeaderColumn>
              <TableHeaderColumn width='10%' dataField='bouncingRate'>Bouncing rate</TableHeaderColumn>
            </BootstrapTable>
            <FooterWidget />
          </WidgetContent>
        </Widget >

      </div >
    )
  }
}


export default ReferrerTypes;
