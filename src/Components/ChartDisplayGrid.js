import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Widget from './Widget';
const ChartDisplayGrid = ({ widgets, removeWidget }) => {

  return (
    <GridLayout
      className="chart-display-grid"
      layout={widgets}
      cols={3}
      width={1150}
      isDraggable={true}
      rowHeight={350}
      
    >
      {widgets.map((widget) => (
        <div key={widget.i}>
          <Widget
            removeWidget={() => removeWidget(widget.i)}
            chartType={widget.chartType}
          />
        </div>
      ))}



    </GridLayout>
  );
};

export default ChartDisplayGrid;
