
import React from 'react';
import Plot from 'react-plotly.js';

var data = [
    {
      x: [1, 2, 3, 10],
      y: [2, 1, 3, 4],
      error_y: {
        type: 'data',
        symmetric: false,
        array: [0.1, 0.2, 0.1, 0.1],
        arrayminus: [0.2, 0.4, 1, 0.2]
      },
      type: 'scatter'
    }
  ];
  

const layoutParameters = {
    title: 'Asymmetric Error Bars',
    width: 320,
    height: 240
};

const AsymmetricErrorBars = () => {
  return <Plot data={data} layout={layoutParameters} />
};

export default AsymmetricErrorBars;
