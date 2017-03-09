import React from 'react';
import {Header} from '../components/header.jsx';
import {Footer} from '../components/footer.jsx';
// import {Content} from '../components/content.jsx';

const dashboard = (
  <div>
    <Header/>
    <Footer/>
  </div>
);

ReactDOM.render(
  dashboard,
  document.getElementById('container')
);
