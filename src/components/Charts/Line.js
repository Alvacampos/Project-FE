import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Line = () => {
  const options = {
    chart: {
      type: 'spline',
      zoomType: 'xy',
      height: 500,
    },
    title: {
      text: '',
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: null,
      },
      dateTimeLabelFormats: {
        // don't display the dummy year
        month: '%e. %b',
        year: '%b',
      },
    },
    plotOptions: {
      series: {
        marker: {
          enabled: true,
        },
      },
    },
    credits: {
      enabled: false
    },
    // Js starts with month 0
    series: [
      {
        name: 'Burndown',
        data: [
          [Date.UTC(2021, 3, 5), 421],
          [Date.UTC(2021, 3, 6), 420],
          [Date.UTC(2021, 3, 6), 419],
          [Date.UTC(2021, 3, 6), 418],
          [Date.UTC(2021, 3, 12), 379],
          [Date.UTC(2021, 3, 13), 376],
          [Date.UTC(2021, 3, 15), 413],
          [Date.UTC(2021, 3, 16), 405],
          [Date.UTC(2021, 3, 16), 405],
          [Date.UTC(2021, 3, 16), 400],
          [Date.UTC(2021, 3, 19), 405],
          [Date.UTC(2021, 3, 19), 395],
          [Date.UTC(2021, 3, 19), 390],
          [Date.UTC(2021, 3, 19), 382],
          [Date.UTC(2021, 3, 19), 382],
          [Date.UTC(2021, 4, 3), 373],
          [Date.UTC(2021, 4, 3), 368],
          [Date.UTC(2021, 4, 3), 360],
          [Date.UTC(2021, 4, 3), 352],
          [Date.UTC(2021, 4, 3), 339],
          [Date.UTC(2021, 4, 3), 329],
          [Date.UTC(2021, 4, 3), 324],
          [Date.UTC(2021, 4, 3), 321],
          [Date.UTC(2021, 4, 16), 347],
          [Date.UTC(2021, 4, 18), 298],
          [Date.UTC(2021, 4, 23), 303],
          [Date.UTC(2021, 4, 23), 290],
          [Date.UTC(2021, 4, 23), 282],
          [Date.UTC(2021, 4, 24), 295],
          [Date.UTC(2021, 4, 25), 231],
          [Date.UTC(2021, 4, 26), 223],
          [Date.UTC(2021, 4, 26), 220],
          [Date.UTC(2021, 4, 26), 217],
          [Date.UTC(2021, 4, 26), 209],
          [Date.UTC(2021, 4, 27), 329],
          [Date.UTC(2021, 4, 28), 308],
          [Date.UTC(2021, 4, 28), 214],
          [Date.UTC(2021, 5, 14), 272],
          [Date.UTC(2021, 5, 14), 249],
          [Date.UTC(2021, 5, 23), 290],
          [Date.UTC(2021, 5, 23), 282],
          [Date.UTC(2021, 5, 23), 206],
          [Date.UTC(2021, 5, 23), 203],
          [Date.UTC(2021, 5, 23), 200],
          [Date.UTC(2021, 5, 25), 151],
          [Date.UTC(2021, 5, 25), 141],
          [Date.UTC(2021, 5, 27), 172],
          [Date.UTC(2021, 5, 27), 164],
          [Date.UTC(2021, 5, 27), 154],
          [Date.UTC(2021, 5, 27), 133],
          [Date.UTC(2021, 5, 27), 125],
          [Date.UTC(2021, 5, 28), 277],
          [Date.UTC(2021, 5, 28), 267],
          [Date.UTC(2021, 5, 28), 249],
          [Date.UTC(2021, 5, 28), 244],
          [Date.UTC(2021, 5, 28), 195],
          [Date.UTC(2021, 5, 28), 190],
          [Date.UTC(2021, 5, 28), 185],
          [Date.UTC(2021, 5, 28), 159],
          [Date.UTC(2021, 5, 28), 149],
          [Date.UTC(2021, 6, 12), 109],
          [Date.UTC(2021, 6, 12), 96],
          [Date.UTC(2021, 6, 12), 83],
          [Date.UTC(2021, 6, 12), 75],
          [Date.UTC(2021, 6, 12), 70],
          [Date.UTC(2021, 6, 12), 57],
          [Date.UTC(2021, 6, 19), 62],
          [Date.UTC(2021, 6, 19), 13],
          [Date.UTC(2021, 6, 23), 117],
          [Date.UTC(2021, 6, 23), 21],
          [Date.UTC(2021, 6, 25), 0],
        ],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Line;

