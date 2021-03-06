import React from 'react';
import {Header} from '../components/header.jsx';
import {Footer} from '../components/footer.jsx';
import {Content} from '../components/content.jsx';

class Dashboard extends React.Component{
  render() {
    return (
      <div>
        <Header/>
        <div className="contentAndFooter">
          <Footer/>
          <Content/>
        </div>
      </div>
    );
  }
}

module.exports.Dashboard = Dashboard;
