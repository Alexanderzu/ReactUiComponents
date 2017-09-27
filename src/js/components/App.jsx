import React, {Component} from 'react';
import SwitcherForm from './Switcher/SwitcherForm.jsx';
import SearchForm from './Search/SearchForm.jsx';
import TabForm from './Tab/TabForm.jsx';
import SliderForm from './Slider/Slider.jsx';

export default class App extends React.Component  {
  render() {
    return (
      <div className="wrapper">

        <h1>React UI Components</h1>
        <div className="uiComponents">
          <div className="row">
            <div className="col-lg-4">
              <SwitcherForm />
            </div>
            <div className="col-lg-4">
                <SearchForm />
            </div>
            <div className="col-lg-4">
              <TabForm />
            </div>
          </div>

        </div>

      </div>
    )
  }
}