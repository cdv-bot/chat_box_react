
import { TEST_THUNK } from './../constants/Login';
const initialState = {
  text: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_THUNK: {
      return {
        checkSigin: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
