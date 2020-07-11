import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/FinishStyle.scss';

const Finish = () => {
  
  return (
    <div>
      <div className='finish'>
        <h1>Congratulations! You order has been processed successfully</h1>
        <br />
        <h1>Item will be shipped within 3-5 Working days</h1>
        <Link to='/'>Homepage</Link>
      </div>
    </div>
  );
};

export default Finish;
