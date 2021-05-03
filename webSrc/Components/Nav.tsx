import React from 'react';

import './nav.css';

const Nav = () => (
  <nav>
    <div className="logo">f ( cards ) = fun + cards</div>
    <div className="join-container">
      <input type="text" name="session" placeholder="Session Name" maxLength={10} />
      <button type="button" name="create">Create</button>
      <button type="button" name="join">Join</button>
    </div>
  </nav>
);

export default Nav;
