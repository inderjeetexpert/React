import React, { Component } from 'react';
import WidgetTop from '../WidgetTop/WidgetTop'
import WidgetContent from '../WidgetContent/WidgetContent'
import Widget from '../Widget/Widget';
import FooterWidget from '../FooterWidget/FooterWidget';
import Highcharts from 'highcharts';
import addFunnel from 'highcharts/modules/funnel';
import './browserengines.css';


class Browsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: null,
      date: null,
      lastMonthDate: null
    }
  }


  componentDidMount() {
    var chart = Highcharts.chart('browserEnginesMap', {
      chart: {
        height: 200,
        type: 'pie'
      },
      title: {
        text: ''
      },
      // subtitle: {
      //   text: 'Source: thesolarfoundation.com'
      // },
      yAxis: {
        title: {
          text: ''
        }
      },
      xAxis: {
        categories: [],
        labels: {
          step: 15 // this will show every second label
        }
        // showEmpty: false
      },
      legend: {
        // layout: 'horizontal',
        align: 'center',
        // verticalAlign: 'bottom'
      },
      // plotOptions: {
      //   series: {
      //     pointInterval: 10
      //   }
      // },
      series: [{
        name: 'Visits',
        data: [{
          name: 'Microsoft Internet Explorer',
          y: 56.33
        }, {
          name: 'Chrome',
          y: 24.03,
          sliced: true,
          selected: true
        }, {
          name: 'Firefox',
          y: 10.38
        }, {
          name: 'Safari',
          y: 4.77
        }, {
          name: 'Opera',
          y: 0.91
        }, {
          name: 'Proprietary or Undetectable',
          y: 0.2
        }]

      }]
    });
    addFunnel(Highcharts);
  }

  render() {

    return (
      <div className="browsers-engine">
        <Widget>
          <WidgetTop WidgetName="Browsers engine" />
          <WidgetContent>
            <div id="browserEnginesMap"></div>
            <FooterWidget limitSelection={false} />
          </WidgetContent>
        </Widget >
      </div >
    )
  }
}

export default Browsers;
