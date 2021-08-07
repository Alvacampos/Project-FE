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
        text: "Test Funcional",
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
        name: 'Test Funcional',
        data: [
          {
            color: Highcharts.getOptions().colors[4],
            radius: '80%',
            innerRadius: '63%',
            y: 80,
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
