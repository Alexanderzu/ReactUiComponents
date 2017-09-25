import PropTypes from 'prop-types';
import React from 'react';
import Switcher from './Switcher.jsx';

export default class SwitcherForm extends React.Component {

  constructor() {
    super();
    this.state = { checked: false };
  }

  handleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  handleTrue = () => {
    this.setState({
      checked: true,
    });
  };

  handleFalse = () => {
    this.setState({
      checked: false,
    });
  };

  render() {
    return (
      <div className="uiComponents__item">
        <h4>Switcher</h4>
        <div className="switcher">
          <Switcher
            onChange={this.handleChange}
            handleTrue={this.handleTrue}
            handleFalse={this.handleFalse}
            checked={this.state.checked}
          />
          <br/>
          <div className="uiComponents__item_block">
            {
              this.state.checked &&
              <span>
                  loren ipsum dolor
                </span>
            }
          </div>
          <br/>
        </div>
      </div>

    );
  }
}
