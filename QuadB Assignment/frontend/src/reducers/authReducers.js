const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'REGISTER_SUCCESS':
      case 'LOGIN_SUCCESS':
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          token: action.payload.token,
          isAuthenticated: true,
          user: action.payload.user,
        };
      case 'LOGOUT':
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          user: null,
        };
      default:
        return state;
    }
  }
  