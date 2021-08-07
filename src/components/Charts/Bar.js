import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Bar = () => {
  const sprintData = [
    {
      name: 'Planning Original',
      data: [46, 47, 54, 87, 89, 99, 63, 68],
    },
    {
      name: 'Update',
      data: [46, 55, 54, 117, 89, 130, 68, 81],
    },
    {
      name: 'Completado',
      data: [39, 40, 5, 66, 10, 130, 52, 73],
    },
    {
      name: 'Carryover',
      data: [0, 15, 49, 51, 79, 0, 16, 0],
    },
  ];

  const sprintCategories = [
    'Sprint 0',
    'Sprint 1',
    'Sprint 2',
    'Sprint 3',
    'Sprint 4',
    'Sprint 5',
    'Sprint 6',
    'Sprint 7',
  ];


  const options = {
    chart: {
      type: 'bar',
      zoomType: 'y',
      height: 500,
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: sprintCategories,
      title: {
        text: null,
      },
    },
    series: sprintData,
    credits: {
      enabled: false
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Bar;
