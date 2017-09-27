import PropTypes from 'prop-types';
import React from 'react';

const IMG = [
  {
    image: "assets/images/img1.jpg"
  },
  {
    image: "assets/images/img2.jpg"
  },
  {
    image: "assets/images/img3.jpg"
  },
];


export default class SliderForm extends React.Component {

  constructor() {
    super();
    this.state = {
      items: IMG
    };
  };


  render() {
    const { items } = this.state;

    return (
      <div className="uiComponents__item">
        <h4>Slider</h4>

        <div className="slider">
          {
            this.state.items.map(function (el) {
              return <img
                src={el.image}
                key={el.id}

              />
            })
          }
        </div>

      </div>
    );
  }
}
