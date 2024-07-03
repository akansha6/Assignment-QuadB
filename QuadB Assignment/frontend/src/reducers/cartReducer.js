const initialState = {
    cart: [],
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'GET_CART':
        return {
          ...state,
          cart: action.payload,
        };
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter(item => item._id !== action.payload),
        };
      default:
        return state;
    }
  }
  