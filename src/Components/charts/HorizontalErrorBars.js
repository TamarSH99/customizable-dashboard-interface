
import React from 'react';
import Plot from 'react-plotly.js';

const data = [
  {
    x: [1, 2, 3, 10],
    y: [2, 1,10, 4],
    error_x: {
      type: 'percent',
      value: 4,
    },
    type: 'scatter',
  },
];

const layoutParameters = {
    title: 'Horizontal Error Bar',
    width: 320,
    height: 240
};

const HorizontalErrorBars = (data) => {
  return  <Plot data={data} layout={layoutParameters} />
};

export default HorizontalErrorBars;
