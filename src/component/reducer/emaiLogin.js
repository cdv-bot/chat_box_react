
import { EMAIL_LOGIN } from './../constants/Login';
const initialState = { email: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_LOGIN: {
      return {
        email: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
