import React from 'react';
import {Link} from 'react-router';
import {PubSub} from '../services/pubsub.js';

class Footer extends React.Component {
  render() {

    const navigate = function(e) {
      console.log('pub nav');
      PubSub.publish('navigate', e.target);
    }

    return (
      <footer className="dashFooter" onClick={navigate}>
        <Link to="/">
          <img className="menuButtons menu" src="../images/menu.png"></img>
        </Link>
        <Link to="profile">
          <img className="menuButtons profile" src="../images/profile.png"></img>
        </Link>
        <Link to="search">
          <img className="menuButtons search" src="../images/search.png"></img>
        </Link>
        <Link to="favorites">
          <img className="menuButtons favorites" src="../images/favorites.png"></img>
        </Link>
        <Link to="history">
          <img className="menuButtons history" src="../images/history.png"></img>
        </Link>
        <Link to="options">
          <img className="menuButtons options" src="../images/options.png"></img>
        </Link>
      </footer>
    )

  }
};

module.exports.Footer = Footer;
