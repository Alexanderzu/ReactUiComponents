import PropTypes from 'prop-types';
import React from 'react';

const TABS = [
  {
    id: "1",
    isActive: true,
    name: "Tab1",
    content: "Text container Tab1",
  },
  {
    id: "2",
    isActive: false,
    name: "Tab2",
    content: "Text container Tab2",
  },
  {
    id: "3",
    isActive: false,
    name: "Tab3",
    content: "Text container Tab3",
  },
];


export default class SwitcherForm extends React.Component {

  constructor() {
    super();
    this.state = {
      tabs: TABS,
    };
  };

  renderTabs = (data) => {
    let links = [];
    let tabs = [];

    data.forEach((item) => {
      const { name, content, id, isActive } = item;
      const lnk = <span
        key={id}
        className={`tabs__link_item ${isActive ? 'active' : '' }`}
        onClick={() => this.tabSwitcher(id)}
      >{name}</span>;

      const tbs = isActive && <div key={id}>{content}</div>;

      links.push(lnk);
      tabs.push(tbs);
    });

    return { links, tabs }
  };

  tabSwitcher = (id) => {
    this.setState(() => {
      return this.state.tabs.map((item) => {
        return item.isActive = item.id === id;
      })
    });
  };

  render() {
    const { tabs, id, isActive } = this.state;
    const { links: tabsLinks, tabs: tabsContent  } = this.renderTabs(tabs);

    return (
      <div className="uiComponents__item">
        <h4>Tab</h4>
        <div className="tabs">
          <div className="tabs__link">
            {tabsLinks}
          </div>
          <div className="tabs__container">
            {tabsContent}
          </div>
        </div>
      </div>
    );
  }
}
