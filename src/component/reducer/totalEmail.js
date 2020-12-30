
import { TOTAL_EMAIL } from './../constants/Login';
const initialState = {
  total: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOTAL_EMAIL: {
      return {
        total: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
