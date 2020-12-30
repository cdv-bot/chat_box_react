
import { CLOSE, SIGINS } from './../constants/Login';
const initialState = {
  checkSigin: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGINS: {
      return {
        checkSigin: true
      };
    }
    case CLOSE: {
      return {
        checkSigin: false
      };
    }
    default:
      return state;
  }
};

export default reducer;
