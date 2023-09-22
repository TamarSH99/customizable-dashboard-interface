import React, { useState } from 'react';
import './DropdownListButton.css';

const DropdownListButton = ({ onAddWidget }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  const handleChartTypeClick = (chartType) => {
    toggleMenu();
    if (onAddWidget && chartType) {
      onAddWidget(chartType);
    }
  };




  return (
    <div className="dropdown-container">
      <button className={`dropdown-button ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
        <span className='button-title'>
          Add Chart
          <img
            src={require('../../Assets/Icons/arrow-down.png')}
            alt="Drop Down List Arrow"
            className="arrow"
          />
        </span>
      </button>
      {showMenu && (
        <div className="dropdown-menu">
          <button className='list-button' onClick={() => handleChartTypeClick('AsymmetricErrorBars')}>
            Asymmetric Error Bars
          </button>
          <button className='list-button' onClick={() => handleChartTypeClick('HorizontalErrorBars')}>
            Horizontal Error Bars
          </button>

          <button className='list-button' onClick={() => handleChartTypeClick('PercentageErrorBars')}>
            Percentage Error Bars
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownListButton;
