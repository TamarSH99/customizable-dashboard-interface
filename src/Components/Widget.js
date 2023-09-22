import React, { ReactNode } from 'react';
import AsymmetricErrorBars from './charts/AsymmetricErrorBars';
import HorizontalErrorBars from './charts/HorizontalErrorBars';
import PercentageErrorBars from './charts/PercentageErrorBars';
import './Widget.css'

function Widget({  removeWidget, chartType  }) {

  let chartComponent = null;

  if (chartType === 'AsymmetricErrorBars') {
    chartComponent = <AsymmetricErrorBars />;
  } else if (chartType === 'HorizontalErrorBars') {
    chartComponent = <HorizontalErrorBars />;
  } else if (chartType === 'PercentageErrorBars') {
    chartComponent = <PercentageErrorBars />;
  }

  return (
    <div className="widget">
      <div className="widget-header">
        <span>Chart</span>
        <button onClick={removeWidget}>
          <img src={require('../Assets/Icons/delete.png')} alt="Delete" />
        </button>
      </div>
      <div className="widget-content">
        {chartComponent}
      </div>
    </div>
  );
}

export default Widget;



