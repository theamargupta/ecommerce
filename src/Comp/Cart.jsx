import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { removeFromCart } from '../Redux/Actions/productActionGenerator';
import { Link } from 'react-router-dom';
import FinalPrice from './finalPrice';
import './Styles/CartStyle.scss';
const Cart = (props) => {
  return (
    <div>
      <Header />
      <div className='Cart'>
        <div className='box'>
          <h2>Your Cart</h2>
          <ul>
            {props.cart.cart.map((data) => (
              <li key={data.id}>
                <span>
                  <img src={data.img} alt='' />
                </span>
                <span>{data.title}</span>
                <span>₹ {data.price}</span>

                <span onClick={() => props.dispatch(removeFromCart(data.id))}>
                  <i className='fa fa-trash' aria-hidden='true'></i>
                </span>
              </li>
            ))}

            {props.cart.cart.length > 0 ? (
              props.data.user[0].isLogged ? (
                <Link to='/finish'>
                  <FinalPrice />
                </Link>
              ) : (
                <Link to='/register'>
                  <FinalPrice />
                </Link>
              )
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart, oAuth }) => ({
  cart: cart,
  data: oAuth,
});
export default connect(mapStateToProps)(Cart);
