import { useState } from 'react';

export const useWidget = () => {
  const [widgets, setWidgets] = useState([]);


  const addWidget = (chartType) => {
    const randomId = Math.floor(Math.random() * 10000);
    const newWidget = {
      chartType: chartType,
      // id: randomId,
      i: `widget-${randomId}`,
      x: widgets.length % 3,
      y: Math.floor(widgets.length / 3),
      w: 1,
      h: 1,
    };

    setWidgets([...widgets, newWidget]);
  };

  const removeWidget = (widgetId) => {
    const updatedWidgets = widgets.filter((widget) => widget.i !== widgetId);
    setWidgets(updatedWidgets);
  };

  return { widgets, addWidget, removeWidget };
};
