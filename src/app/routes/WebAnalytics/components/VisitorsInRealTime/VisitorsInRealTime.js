import React from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './visitorsinrealtime.css'
class VisitorsInRealTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{
        date: 1,
        visit: 'tahir',
        action: 200
      }]
    }
  }

  render() {

    return (
      <div className="live-widget">
        <Widget>
          <WidgetTop WidgetName="Visitors in Real-time" />
          <WidgetContent>
            <BootstrapTable data={this.state.products} condensed hover>
              <TableHeaderColumn width='50%' dataField='date' isKey>Date</TableHeaderColumn>
              <TableHeaderColumn width='25%' dataField='visit'>Visit</TableHeaderColumn>
              <TableHeaderColumn width='25%' dataField='action'>Action</TableHeaderColumn>
            </BootstrapTable>


            <ul className="visit-live">
              <li className="visit">
                <div title="1 Actions" className="datetime">

                  <span className="realTimeWidget_datetime">Sunday, August 20,   - 13:21:01 </span>
                  &nbsp;
                  <a className="visits-live-launch-visitor-profile rightLink" title="View visitor profile">
                    <img src="../images/piwik/live/visitorProfileLaunch.png" />
                  </a>
                  <br />

                  <img height="16px" src="../images/piwik/dist/flags/pk.png" title="Islamabad, Islamabad, Pakistan, Provider " />
                  &nbsp;
                  <img width="16px" height="16px" src="../images/piwik/dist/browsers/CH.png" title="Chrome 60.0, Plugins: pdf" />
                  &nbsp;
                  <img width="16px" height="16px" src="../images/piwik/dist/os/WIN.png" title="Windows 8.1, 1366x768" />
                  &nbsp;
                  <img src="../images/piwik/live/returningVisitor.png" title="Returning Visitor" />
                  &nbsp;
                  <span title="Visitor ID: e605be1c03ba7ab8">IP: 39.40.0.0</span>

                  <span className="referrer">
                    from
                    &nbsp;
                    <a target="_blank" href="https://piwik.carderockllc.com/index.php?module=CoreHome&amp;action=index&amp;idSite=1&amp;period=day&amp;date=yesterday">
                      piwik.carderockllc.com
                     </a>
                  </span>
                </div>
                <div className="settings">
                  <span className="pagesTitle" title="1 Actions">Actions:</span>


                  <a href="http://carderockllc.com/accounts/login/?next=/business/search/" target="_blank">
                    <img src="../images/piwik/live/file1.png" title="Aug 20, 2017 13:21:01" />

                  </a>

                </div>
              </li>

            </ul>

            <div className="visitsLiveFooter">
              <a title="Visitors in Real-time is started. Click to pause.">
                <img src="../images/piwik/live/pause.png" style={{ display: 'inline' }} />
              </a>
              <a title="Visitors in Real-time is stopped. Click to start.">
                <img style={{ display: "none" }} src="../images/piwik/live/play.png" />
              </a>
              &nbsp;
             <a className="rightLink" >View detailed visitor log</a></div>
          </WidgetContent>
        </Widget >

      </div >
    )
  }
}


export default VisitorsInRealTime;
