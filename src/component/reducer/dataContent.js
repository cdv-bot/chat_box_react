
import * as firebases from '../constants/firebase';
const initialState = {
  data: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case firebases.FIREBASE_EMAIL: {
      return {
        data: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
