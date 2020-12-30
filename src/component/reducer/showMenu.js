
import { CHECK_MENU } from './../constants/Login';
const initialState = { data: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_MENU: {
      return {
        data: !state.data
      };
    }
    default:
      return state;
  }
};

export default reducer;
