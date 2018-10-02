import { Component, OnInit } from '@angular/core';

import Plotly from '../../assets/scripts/plotly-latest.min.js';

declare var $:any;

@Component({
  selector: 'app-plotlyjs',
  templateUrl: './plotlyjs.component.html',
  styleUrls: ['./plotlyjs.component.scss']
})
export class PlotlyjsComponent implements OnInit {

  constructor() {}

  ngOnInit() {

    Plotly.d3.json('../../assets/test-files/queryhistory.json',function(err, rows){
      function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    
    
    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: 'Today',
      x: unpack(rows, 'Date'),
      y: unpack(rows, 'AAPL.High'),
      z: unpack(rows, 'Date'),
      line: {color: '#17BECF'}
    }
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: 'Overall',
      x: unpack(rows, 'Date'),
      y: unpack(rows, 'AAPL.Low'),
      z: unpack(rows, 'Date'),
      line: {color: '#7F7F7F'}
    }
    
    var data = [trace1,trace2];
    
    var layout = {
      title: 'Query Run Status',
      xaxis: {
        autorange: true,
        range: ['2015-02-17', '2017-02-16'],
        rangeselector: {buttons: [
            {
              count: 1,
              label: '1m',
              step: 'month',
              stepmode: 'backward'
            },
            {
              count: 6,
              label: '6m',
              step: 'month',
              stepmode: 'backward'
            },
            {step: 'all'}
          ]},
        rangeslider: {range: ['2015-02-17', '2017-02-16']},
        type: 'date'
      },
      yaxis: {
        autorange: true,
        range: [86.8700008333, 138.870004167],
        type: 'linear'
      }
    };
    
    Plotly.newPlot('myQueryDiv', data, layout, {zIndex: false});
    })

  }

}
