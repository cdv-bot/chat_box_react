
import { LOAD_DATA } from './../constants/Login';
const initialState = { data: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case LOAD_DATA: {
      return {
        data: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
