import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const AppHeader = () =>
  (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#09A',
        padding: 20,
        color: 'white',
      }}
    >
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to Apollo</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ padding: ' 0 20px' }}>
          <Link to="/">Home</Link>
        </div>
        <div style={{ padding: ' 0 20px' }}>
          <Link to="/movies">Movies</Link>
        </div>
        <div style={{ padding: ' 0 20px' }}>
          <Link to="/movies/new">Create Movie</Link>
        </div>
      </div>
    </div>
  );

export default AppHeader;
