import React, { Component } from 'react';
import { getProducts } from '../Redux/Actions/productActionGenerator';
import { connect } from 'react-redux';
import Card from './Card';
import data from './data/data';
import Header from './Header';
import './Styles/Homepage.scss';

class Homepage extends Component {
  componentDidMount() {
    return this.props.data.data.length < 10
      ? data.map((data) => this.props.dispatch(getProducts(data)))
      : null;
  }
  render() {
    return (
      <div className='Homepage'>
        <Header />
        <div className='cards'>
          {this.props.data.data.map((data) => (
            <Card
              key={data.id}
              id={data.id}
              title={data.title}
              imgUrl={data.imgUrl}
              price={data.price}
            />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ product, cart }) => ({
  data: product,
  cartData: cart,
});
export default connect(mapStateToProps)(Homepage);
