import * as firebases from '../constants/firebase';
const initialState = {
  id: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case firebases.ID_SHOW: {
      return {
        id: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
