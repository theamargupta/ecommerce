import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../Redux/Actions/productActionGenerator';
import './Styles/CardStyle.scss';

const Card = (props) => {
  const add = () =>
    props.dispatch(
      addToCart({
        title: props.title,
        price: props.price,
        img: props.imgUrl,
        id: props.id,
      })
    );

  return (
    <div className='card'>
      <img className='card__image' src={props.imgUrl} alt='' />
      <div className='card__content'>
        <h1>{props.title}</h1>
      </div>
      <div className='card__info'>
        <div>₹ {props.price}</div>
        <div className='addtocart'>
          <p onClick={add} className='card__link'>
            {' '}
            Add to cart &nbsp;&nbsp;
            <i className='fa fa-shopping-cart' aria-hidden='true'></i>
          </p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ cart }) => ({
  cart: cart,
});
export default connect(mapStateToProps)(Card);
