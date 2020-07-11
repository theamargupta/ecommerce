import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from '../Comp/Homepage';
import Login from '../Comp/Login';
import Register from '../Comp/Register';
import Finish from '../Comp/Finish';
import Cart from '../Comp/Cart';
import Logout from '../Comp/Logout';


const AppRouter = () => {
  return (
    <>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/finish' component={Finish} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/logout' component={Logout} />
    </>
  );
};

export default AppRouter;
