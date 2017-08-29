import React from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { liveGetLastVisitsDetails, liveGetCounter } from '../../../../api/webAnalytics';

import './visitorsinrealtime.css'
class VisitorsInRealTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      errorMessage: null,
      isLoading: true,
      visitorData: null,
      realTimePlay: true
    }
    this.handleRealTimePause = this.handleRealTimePause.bind(this);
    this.handleRealTimeStart = this.handleRealTimeStart.bind(this);

  }
  handleRealTimeStart() {
    this.setState({ realTimePlay: false })
  }
  handleRealTimePause() {
    this.setState({ realTimePlay: true })
  }
  componentDidMount() {
    let info = {
      idSite: 1
    }
    liveGetCounter({ idSite: 1, lastMinutes: 30 })
      .then((response) => {
        let data = response[0];
        data.date = 'Last 30 minutes';
        let { products } = this.state;
        products.push(data);
        this.setState({
          products
        })
      })
    liveGetCounter({ idSite: 1, lastMinutes: 1440 })
      .then((response) => {
        let data = response[0];
        data.date = 'Last 24 hours';
        let { products } = this.state;
        products.push(data);
        this.setState({
          products
        })
      })


    liveGetLastVisitsDetails(info)
      .then((response) => {
        this.setState({
          errorMessage: null,
          isLoading: false,
          visitorData: response
        })
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
          isLoading: false
        })
      });
  }
  render() {
    let { handleRealTimeStart, handleRealTimePause } = this;
    let { visitorData, realTimePlay } = this.state;
    return (
      <div className="live-widget">
        <Widget>
          <WidgetTop WidgetName="Visitors in Real-time" />
          {visitorData ?
            <WidgetContent>
              <BootstrapTable data={this.state.products} hover bordered={false}>
                <TableHeaderColumn width='50%' dataField='date' isKey>Date</TableHeaderColumn>
                <TableHeaderColumn width='25%' dataField='visits'>Visits</TableHeaderColumn>
                <TableHeaderColumn width='25%' dataField='actions'>Actions</TableHeaderColumn>
              </BootstrapTable>


              <ul className="visit-live">
                {visitorData.map((item, index) => (
                  <li className="visit" key={index}>
                    <div title={`${item.actionDetails.length} Actions`} className="datetime">

                      <span className="realTimeWidget_datetime">{item.serverDatePretty}, - {item.serverTimePretty} {item.visitDurationPretty != '0s' && (item.visitDurationPretty)} </span>
                      &nbsp;
                      <a className="visits-live-launch-visitor-profile rightLink" title="View visitor profile">
                        <img src="../images/piwik/plugins/Live/images/visitorProfileLaunch.png" />
                      </a>
                      <br />
                      <img height="16px" src={`../images/piwik/${item.countryFlag}`} title={`${item.location}, Provider `} />
                      &nbsp;

                    <img width="16px" height="16px" src={`../images/piwik/${item.browserIcon}`} title={`${item.browser} Plugins: ${item.plugins}`} />
                      &nbsp;
                  <img width="16px" height="16px" src={`../images/piwik/${item.operatingSystemIcon}`} title={`${item.operatingSystem}, ${item.resolution}`} />
                      &nbsp;
                  {item.visitorTypeIcon && <img src={`../images/piwik/${item.visitorTypeIcon}`} title={`${item.visitorType} visitor`} />}
                      &nbsp;
                  <span title={`Visitor ID: ${item.visitorId}`}>IP: {item.visitIp}</span>


                      {item.referrerName ?
                        <span className="referrer"> from
                          &nbsp;
                        <a target="_blank" href={item.referrerUrl}>
                            {item.referrerName}
                          </a>
                        </span>
                        : <span className="referrer">{item.referrerTypeName} </span>}

                    </div>
                    <div className="settings">
                      <span className="pagesTitle" title={`${item.actionDetails.length} Actions`}>Actions:</span>
                      {item.actionDetails.map((actionItem, index) => (
                        <a href={actionItem.url} target="_blank" key={index}>
                          <img src={`../images/piwik/plugins/Live/images/file${(index + 1) % 10}.png`} title={actionItem.serverTimePretty} />
                        </a>
                      ))}


                    </div>
                  </li>
                ))
                }


              </ul>

              <div className="visitsLiveFooter">
                {realTimePlay ?
                  <a onClick={handleRealTimeStart} title="Visitors in Real-time is started. Click to pause.">
                    <img src="../images/piwik/plugins/Live/images/pause.png" />
                  </a> :
                  <a onClick={handleRealTimePause} title="Visitors in Real-time is stopped. Click to start.">
                    <img src="../images/piwik/plugins/Live/images/play.png" />
                  </a>}
                &nbsp;
             <a className="rightLink" >View detailed visitor log</a></div>
            </WidgetContent> :
            <div className="loading">please wait</div>}
        </Widget>
      </div >
    )
  }
}


export default VisitorsInRealTime;
