import React from 'react';
import Highcharts from 'highcharts/highcharts.js';
import highchartsMore from 'highcharts/highcharts-more.js';
import solidGauge from 'highcharts/modules/solid-gauge.js';
import HighchartsReact from 'highcharts-react-official';

highchartsMore(Highcharts);
solidGauge(Highcharts);

const GaugeChart = ({ data, categories }) => {
  const options = {
    chart: {
      type: 'solidgauge',
    },
    title: {
      text: '',
    },
    xAxis: {
      title: {
        text: null,
      },
      labels: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: "E2E",
      },
      min: 0,
    	max: 99,
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      series: {
        dataLabels: {
            enabled: true,
            format: '{y} %'
        }
      },
      enableMouseTracking: false
    },
    series: [
      {
        name: 'E2E',
        data: [
          {
            color: Highcharts.getOptions().colors[2],
            radius: '80%',
            innerRadius: '63%',
            y: 33,
          },
        ],
      }
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default GaugeChart;
