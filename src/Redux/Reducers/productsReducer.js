//=> reducer
const intialstate = {
  data: [],
};
export default (state = intialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'product':
      return {
        data: [...state.data, payload],
      };
    default:
      return state;
  }
};

