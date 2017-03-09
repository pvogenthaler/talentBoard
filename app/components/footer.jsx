import React from 'react';

const Footer = React.createClass({
  render: function() {
    return (
      <footer className="dashFooter">
        <img className="menuButtons menu" src="../images/menu.png"></img>
        <img className="menuButtons profile" src="../images/profile.png"></img>
        <img className="menuButtons favorites" src="../images/favorites.png"></img>
        <img className="menuButtons history" src="../images/history.png"></img>
        <img className="menuButtons options" src="../images/options.png"></img>
      </footer>
    )
  }
});

module.exports.Footer = Footer;
