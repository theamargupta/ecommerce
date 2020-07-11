export const getProducts = (payload) => ({
  type: 'product',
  payload,
});
export const loginData = (payload) => ({
  type: 'login',
  payload,
});
export const signin = (payload) => ({
  type: 'signin',
  payload,
});
export const addToCart = (payload) => ({
  type: 'add_to_cart',
  payload,
});
export const removeFromCart = (payload) => ({
  type: 'remove_from_cart',
  payload,
});
