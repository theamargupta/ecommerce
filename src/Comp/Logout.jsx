import React from 'react';
import './Styles/FinishStyle.scss';
import { Link } from 'react-router-dom';
const Logout = () => {
  const refresh = () => {
    window.location.reload(false);
  };
  return (
    <div className='finish' onClick={refresh}>
      <h1>it's our pleasure to serve you</h1>
      <h1>Are you sure you want to logout</h1>
      <h1>thanks please visit again</h1>
      <h1>
        <Link to='/'>Logout</Link>
      </h1>
    </div>
  );
};

export default Logout;
