
import React from 'react';
import Plot from 'react-plotly.js';

const data = [
  {
    x: [1, 2, 3, 4],
    y: [2, 1, 3, 4],
    error_x: {
      type: 'percent',
      value: 4,
    },
    type: 'scatter',
  },
];

const layoutParameters = {
    title: 'Percebtage Error Bar',
    width: 320,
    height: 240
};

const PercentageErrorBars  = () => {
  return <Plot data={data} layout={layoutParameters} />
};

export default PercentageErrorBars ;
