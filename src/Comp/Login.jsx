import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin } from '../Redux/Actions/productActionGenerator';
import './Styles/LoginStyle.scss';
import validator from 'validator';
import Input from './Input';
import Btn from './Btn';
import Header from './Header';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLogged: '',
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    let { email, password } = this.state;
    e.preventDefault();

    if (password.length > 3) {
      if (validator.isEmail(email)) {
        if (validator.isAlphanumeric(password)) {
          const { email, password } = this.state;
          this.props.data.user.map((data) =>
            data.email === email && data.password === password
              ? (this.setState({ isLogged: true }),
                this.props.dispatch(signin({ isLogged: true })))
              : null
          );
        } else {
          alert('Password Should be Alphanumeric');
        }
      } else {
        alert('Email Is Invalid');
      }
    } else {
      alert('Password Should be more than 3 characters ');
    }
  };

  render() {
    return this.state.isLogged ? (
      <div>
        <Redirect to='/' />
      </div>
    ) : (
      <div>
        <Header />

        <div className='login'>
          <form className='login-page' onSubmit={this.handleSubmit}>
            <div className='user-place'>
              <label htmlFor='email' className='user'>
                <i className='fa fa-envelope' aria-hidden='true'></i>
              </label>
              <Input
                type='text'
                name='email'
                className='user-name'
                value={this.state.email}
                placeholder='Email'
                onChange={this.handleChange}
              />
            </div>
            <div className='password-place'>
              <label htmlFor='password' className='pass'>
                <i className='fas fa-lock'></i>
              </label>
              <Input
                type='password'
                name='password'
                className='password'
                value={this.state.password}
                placeholder='Password'
                onChange={this.handleChange}
              />
            </div>
            <Btn className='btn-in' content='Sign in' />

            <div className='txt'>
              Don't have An Account<Link to='/register'>Sign Up Now!</Link>{' '}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ oAuth }) => ({
  data: oAuth,
});
export default connect(mapStateToProps)(Login);
