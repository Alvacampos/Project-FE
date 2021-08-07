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
        text: "Unit Test",
      },
      min: 0,
      max: 99,
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
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Unit Test',
        data: [
          {
            color: Highcharts.getOptions().colors[5],
            radius: '80%',
            innerRadius: '63%',
            y: 42,
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
