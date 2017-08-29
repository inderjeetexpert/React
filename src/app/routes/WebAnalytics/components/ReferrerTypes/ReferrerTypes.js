import React from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import FooterWidget from '../FooterWidget/FooterWidget'
import Widget from '../Widget/Widget';
import './referrerstypes.css';
import { getReferrerType } from '../../../../api/webAnalytics';

class ReferrerTypes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    var yesterdayDate = new Date(new Date().setDate(new Date().getDate() - 1));
    yesterdayDate = yesterdayDate.toJSON().slice(0, 10).replace(/-/g, '-');

    let info = {
      idSite: 1,
      date: yesterdayDate
    }
    getReferrerType(info).then((response) => {
      let data = response.map((item, index) => {
        let actionPerVisit = item.nb_actions / item.nb_visits;
        item.actionPerVisit = actionPerVisit.toFixed(1);
        let avgTime = item.sum_visit_length / item.nb_visits;
        let minutes = Math.floor(avgTime / 60);
        let seconds = Math.round(avgTime - minutes * 60);
        avgTime = `${minutes ? minutes + ' min' : ""} ${seconds}s`;
        item.avgTime = avgTime
        let bouncingRate = Math.round(item.bounce_count * 100 / item.nb_visits);
        bouncingRate = `${bouncingRate}% `
        item.bouncingRate = bouncingRate;
        return item;

      })
      this.setState({ products: data })
    })
  }
  render() {

    return (
      <div className="referrer-types">
        <Widget>
          <WidgetTop WidgetName="Referrer Types" />
          <WidgetContent>
            <BootstrapTable data={this.state.products} hover bordered={false}>
              <TableHeaderColumn width='150px' dataField='label' isKey>Referrer Type</TableHeaderColumn>
              <TableHeaderColumn width='70px' dataField='nb_visits'>Visits</TableHeaderColumn>
              <TableHeaderColumn width='120px' dataField='nb_uniq_visitors'>Unique visitors</TableHeaderColumn>
              <TableHeaderColumn width='70px' dataField='nb_users'>Users</TableHeaderColumn>
              <TableHeaderColumn width='70px' dataField='nb_actions'>Actions</TableHeaderColumn>
              <TableHeaderColumn width='130px' dataField='actionPerVisit'>Actions per visit</TableHeaderColumn>
              <TableHeaderColumn width='130px' dataField='avgTime'>Avg. time on web</TableHeaderColumn>
              <TableHeaderColumn width='120px' dataField='bouncingRate'>Bouncing rate</TableHeaderColumn>
            </BootstrapTable>
            <FooterWidget />
          </WidgetContent>
        </Widget >

      </div >
    )
  }
}


export default ReferrerTypes;
