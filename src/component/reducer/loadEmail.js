
import { EMAIL_LOGIN, LOAD_EMAIL } from './../constants/Login';
const initialState = { email: '' };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EMAIL: {
      return {
        email: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
