import PropTypes from 'prop-types';
import React from 'react';

export default function Search(props) {
  return (
    <li className="contacts__item" >
      <img src={props.image} alt="" />
      <span className="contacts__item_info">
          <span>{props.name}</span>
          <span>{props.phoneNumber}</span>

          <span className="info_open">
              <span>{props.email}</span>
              <span>{props.addres}</span>
          </span>
        </span>
    </li>
  );
}
