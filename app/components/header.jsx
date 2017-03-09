import React from 'react';
import {SearchBar} from '../components/search.jsx';

const Header = React.createClass({
  render: function() {
    return (
      <header className="dashHeader">
        <div className="boxShadow">
          <SearchBar />
        </div>
      </header>
    )
  }
});

module.exports.Header = Header;
