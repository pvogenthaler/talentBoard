import React from 'react';
import {SearchBar} from './search.jsx';

class Header extends React.Component{
  render() {
    return (
      <header className="dashHeader">
        <div className="boxShadow">
          <SearchBar />
        </div>
      </header>
    )
  }
};

module.exports.Header = Header;
