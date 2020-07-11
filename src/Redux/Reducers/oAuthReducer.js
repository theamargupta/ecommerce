//=> reducer
const intialstate = {
  user: [
    {
      isLogged: false,
    },
  ],
};
export default (state = intialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'login':
      return {
        user: [...state.user, payload],
      };
    case 'signin':
      return {
        user: [payload],
      };
    default:
      return state;
  }
};
