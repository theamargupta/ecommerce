import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/HeaderStyle.scss';
import { connect } from 'react-redux';
const Header = (props) => {
  return (
    <nav className='header'>
      {props.data.user[0].isLogged ? (
        <ul>
          <li>
            <NavLink exact activeClassName='active-class' to='/'>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink exact activeClassName='active-class' to='/cart'>
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName='active-class' to='/Logout'>
              Logout
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <NavLink exact activeClassName='active-class' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName='active-class' to='/login'>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName='active-class' to='/register'>
              Register
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName='active-class' to='/cart'>
              Cart
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};
const mapStateToProps = ({ oAuth }) => ({
  data: oAuth,
});
export default connect(mapStateToProps)(Header);
