import React from 'react';
import { connect } from 'react-redux';

let arr = [];

const finalPrice = (props) => {
  props.cart.cart.map((data) => arr.push(data.price));

  return (
    <li className='checkOut'>
      <span>CHECK OUT</span>
      <span>₹ {arr.reduce((a, b) => a + b, 0)}</span>
    </li>
  );
};

const mapStateToProps = ({ cart }) => ({
  cart: cart,
});
export default connect(mapStateToProps)(finalPrice);
