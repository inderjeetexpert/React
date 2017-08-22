import React from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import FooterWidget from '../FooterWidget/FooterWidget';
import './visitovertime.css';
import Highcharts from 'highcharts';
import addFunnel from 'highcharts/modules/funnel';

class VisitOverTime extends React.Component {
  constructor(props) {
    super(props);

  }



  componentDidMount() {
    Highcharts.chart('VisitorOverTimeMap', {
      title: {
        text: ''
      },
      // subtitle: {
      //   text: 'Source: thesolarfoundation.com'
      // },
      yAxis: {
        title: {
          text: 'Number of Employees'
        }
      },
      legend: {
        // layout: 'horizontal',
        align: 'center',
        // verticalAlign: 'bottom'
      },
      plotOptions: {
        series: {
          pointStart: 2010
        }
      },
      series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }]

    });
    addFunnel(Highcharts);
  }
  componentWillUnmount() {

  }
  render() {

    return (
      <div className="visit-over-time">
        <Widget>
          <WidgetTop WidgetName="Visit Over Time" />
          <WidgetContent>
            <div className="chart-wrapper">
              <script src="https://code.highcharts.com/modules/exporting.js"></script>

              <div id="VisitorOverTimeMap"></div>

            </div>

            <FooterWidget limitSelection={true} />
          </WidgetContent>
        </Widget >

      </div >
    )
  }
}


export default VisitOverTime;
