import React from 'react';
import {Header} from '../components/header.jsx';
import {Footer} from '../components/footer.jsx';

class Example extends React.Component{
  render() {
    return (
      <div>
        <Header/>
        <div className="contentAndFooter">
          <Footer/>
        </div>
      </div>
    );
  }
}

module.exports.Example = Example;
