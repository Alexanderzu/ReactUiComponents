import PropTypes from 'prop-types';
import React from 'react';
import Search from './Search.jsx';

let CONTACTS = [
  {
    id: 1,
    name: 'Darth Vader',
    phoneNumber: '+950966666666',
    image: 'img/darth.gif',
    email: 'art@mail.ru',
    addres: 'addres 1 state 2'
  }, {
    id: 2,
    name: 'Princess Leia',
    phoneNumber: '+850966344466',
    image: 'img/leia.gif',
    email: 'art2@mail.ru',
    addres: 'addres 1 state 2'
  },
  {
    id: 3,
    name: 'Princess Leia',
    phoneNumber: '+1250966344466',
    image: 'img/leia.gif',
    email: 'art3@mail.ru',
    addres: 'addres 1 state 2'
  },{
    id: 4,
    name: 'Luke Skywalker',
    phoneNumber: '+750976654433',
    image: 'img/luke.gif',
    email: 'art4@mail.ru',
    addres: 'addres 1 state 2'
  }, {
    id: 5,
    name: 'Chewbacca',
    phoneNumber: '+650456784935',
    image: 'img/chewbacca.gif',
    email: 'art5@mail.ru',
    addres: 'addres 1 state 2'
  }
];

export default class SearchForm extends React.Component {

  constructor() {
    super();
    this.state = {
      items: CONTACTS,
    };
  }

  HandleSearch = (event) => {
    let searchQuery = event.target.value.toLowerCase();
    let displayedContacts = CONTACTS.filter(function(el) {
      let searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1
    });

    this.setState({
      items: displayedContacts
    });
  };

  render() {
    const { items } = this.state;
    // console.log(items.length);

    return (
    <div className="uiComponents__item">
      <h4>Live search</h4>
      <div className="search">
        <input className="contacts__search" placeholder="Enter name" type="text" onChange={this.HandleSearch} />
          <ul className="search__item">
          {
            this.state.items.map(function (el) {
              return <Search
                key={el.id}
                name={el.name}
                phoneNumber={el.phoneNumber}
                image={el.image}
                email={el.email}
                addres={el.addres}
              />
            })

          }
          </ul>
      </div>
    </div>
    );
  }
}
