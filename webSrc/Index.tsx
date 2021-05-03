import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Nav from './Components/Nav';
import Body from './Components/Body';

const App = () => (
  <>
    <Nav />
    <Body />
  </>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
