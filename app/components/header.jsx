import React from 'react';
import {SearchBar} from './search.jsx';

class Header extends React.Component{
  render() {
    return (
      <header className="dashHeader">
        {/* <img className="logo" src="../images/logo.png"></img> */}
        <div className="boxShadow">
          <SearchBar />
        </div>
      </header>
    )
  }
};

module.exports.Header = Header;
