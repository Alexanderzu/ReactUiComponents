import React, {Component} from 'react';
import SwitcherForm from './Switcher/SwitcherForm.jsx';
import SearchForm from './Search/SearchForm.jsx';
import TabForm from './Tab/TabForm.jsx';

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
          <div className="row">
            <div className="col-lg-4">
              <h4>Tooltip</h4>
              {/*https://www.youtube.com/user/Urethrify/videos*/}
              {/*https://www.youtube.com/watch?v=RcO7XbRdOHY*/}
            </div>
            <div className="col-lg-4">
              <h4>Validate Form</h4>
            </div>
            <div className="col-lg-4">
              <h4>Accordion</h4>
            </div>
          </div>
        </div>

      </div>
    )
  }
}