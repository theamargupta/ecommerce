//=> reducer
const intialstate = {
  cart: [],
};
export default (state = intialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'add_to_cart':
      return {
        cart: [...state.cart, payload],
      };
    case 'remove_from_cart':
      return {
        cart: state.cart.filter(({ id }) => id !== payload),
      };
    default:
      return state;
  }
};
