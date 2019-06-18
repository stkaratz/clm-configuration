import React from 'react';
import classnames from 'classnames';
import './Tabs.css';

const tabClassName = (index, activeTabIndex) =>
  classnames('tabs__tab', { 'tabs__tab-active': index === activeTabIndex });

const Tabs = ({ tabs, activeTabIndex, onTabChange, children }) => {
  return (
    <React.Fragment>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            className={tabClassName(index, activeTabIndex)}
            key={tab + index}
            onClick={_ => onTabChange(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      {children}
    </React.Fragment>
  );
};

export default Tabs;