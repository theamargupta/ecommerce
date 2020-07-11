import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import validator from 'validator';
import { connect } from 'react-redux';
import { loginData } from '../Redux/Actions/productActionGenerator';
import Input from './Input';
import Btn from './Btn';
import Header from './Header';
import './Styles/RegisterStyle.scss';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      auth: false,
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    let { name, email, password } = this.state;
    e.preventDefault();
    if (name.length >= 3) {
      if (password.length > 3) {
        if (validator.isAlpha(name)) {
          if (validator.isEmail(email)) {
            if (validator.isAlphanumeric(password)) {
              this.setState({ auth: true });
              this.props.dispatch(
                loginData({
                  email: email,
                  password: password,
                  isLogged: false,
                })
              );
            } else {
              alert('Password Should be Alphanumeric');
            }
          } else {
            alert('Email Is Invalid');
          }
        } else {
          alert('name Should be Alpha');
        }
      } else {
        alert('Password Should be more than 3 characters ');
      }
    } else {
      alert('name Should be more than 3 characters');
    }
  };
  render() {
    return (
      <div>
        <Header />
        <div className='register'>
          {this.state.auth ? (
            <Redirect to='/login' />
          ) : (
            <div>
              <form className='login-page' onSubmit={this.handleSubmit}>
                <div className='user-place'>
                  <label htmlFor='name' className='user'>
                    <i className='fas fa-user'></i>
                  </label>
                  <Input
                    type='text'
                    name='name'
                    className='user-name'
                    value={this.state.name}
                    placeholder='Name'
                    onChange={this.handleChange}
                  />
                </div>
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

                <Btn className='btn-in' content='Sign up' />
                <div className='txt'>
                  Already have an account<Link to='/login'>Log in Now!</Link>{' '}
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ oAuth }) => ({
  data: oAuth,
});
export default connect(mapStateToProps)(Register);
// {/* <div>
//             <Header />
//             <h1>sucessfully registered</h1>
//             <h1>
//               You can login now <Link to='/login'>Home Page</Link>
//             </h1>
//           </div> */}
