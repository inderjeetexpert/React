import React, { Component } from 'react';
import WidgetTop from '../../../components/WidgetTop/WidgetTop'
import WidgetContent from '../../../components/WidgetContent/WidgetContent'
import FooterWidget from '../../../components/FooterWidget/FooterWidget'
import Widget from '../../../components/Widget/Widget';
import Highcharts from 'highcharts/highmaps';
import addFunnel from 'highcharts/modules/funnel';
import myMap from '../../../components/Highcharts/world';
import { getUserCountry } from '../../../../../api/webAnalytics';

import './realtimemap.css'

// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
// const data = [
//   ['fo', 0],
//   ['um', 1],

// ];


class RealTimeMap extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {


    // Create the chart
    var chart = Highcharts.mapChart('RealTimeMap', {
      chart: {
        map: myMap,
        // height: 200
      },

      title: {
        text: ''
      },

      subtitle: {
        // text: 'Source map: World, Miller projection, medium resolution'
      },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },
      legend: {
        enabled: false
      },

      // colorAxis: {
      //   min: 0
      // },
      series: [{
        name: 'Countries',
        color: '#E0E0E0',
        enableMouseTracking: false
      }, {
        data: [],
        type: 'mapbubble',
        name: 'Visits',
        minSize: 4,
        maxSize: '10%',
        joinBy: ['iso-a2', 'code'],
        states: {
          hover: {
            color: '#BADA55'
          }
        },
        // dataLabels: {
        // enabled: true,
        // format: '{point.name}'
        // }
      },

      ],
      tooltip: {
        //shared: true,
        useHTML: true,
        headerFormat: '<small>{point.key}</small><table>',
        pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
        '<td style="text-align: right"><b>{point.z} </b></td></tr>',
        footerFormat: '</table>',

      }
    });

    addFunnel(Highcharts);


    let info = {
      date: 'yesterday',
      idSite: 1
    }
    getUserCountry(info)
      .then((response) => {
        let data = response.map((item) => ({ code: item.code.toUpperCase(), z: item.nb_visits }));
        console.log(data);
        chart.series[1].update({
          data: data
        });
      })
  }

  render() {

    return (
      <div className="visitor-map">
        <Widget>
          <WidgetContent>
            <div id="RealTimeMap"></div>
          </WidgetContent>
        </Widget >

      </div >
    )
  }
}


export default RealTimeMap;
