import { createStore, applyMiddleware, combineReducers } from 'redux';
import productReducer from '../Reducers/productsReducer';
import oAuthReducer from '../Reducers/oAuthReducer';
import addCartReducer from '../Reducers/CartReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const ConfigStore = () => {
  const store = createStore(
    combineReducers({
      product: productReducer,
      oAuth: oAuthReducer,
      cart: addCartReducer,
    }),
    composeWithDevTools(applyMiddleware())
  );
  return store;
};
export default ConfigStore;
