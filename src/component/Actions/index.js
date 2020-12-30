import { CLOSE, EMAIL_LOGIN, SIGINS, LOAD_DATA, LOAD_EMAIL, TOTAL_EMAIL, TEST_THUNK, CHECK_MENU } from './../constants/Login';
import * as firebases from './../constants/firebase';
import firebase from './../firebase';

export const Sigins = () => {
  return {
    type: SIGINS,
  }
};
export const Closes = () => {
  return {
    type: CLOSE,
  }
};

export const emailLogin = (email) => {
  return {
    type: EMAIL_LOGIN,
    payload: email
  }
};

export const loadRealTime = (data) => {
  return {
    type: LOAD_DATA,
    payload: data
  }
};


export const totalEmail = (data) => {
  return {
    type: LOAD_EMAIL,
    payload: data
  }
};

export const total = (data) => {
  return {
    type: TOTAL_EMAIL,
    payload: data
  }
};

export const menu = () => {
  return {
    type: CHECK_MENU
  }
};

export const text = (data) => {
  return {
    type: TEST_THUNK,
    payload: data
  }
};

export const testThunk = () => {
  return (dispatch => {
    fetch('https://api.covid19api.com/summary')
      .then(response => {
        return response.json();
      })
      .then(data => dispatch(text(data)));
  });
};

export const firebaseData = (data) => {
  return {
    type: firebases.FIREBASE_EMAIL,
    payload: data
  }
};
export const idData = (id) => {
  return {
    type: firebases.ID_SHOW,
    payload: id
  }
};
export const handlefirebaseDatas = (id, data) => {
  return (dispatch => {
    return firebase.database().ref(`${id}`).push(data);
  });
};

export const handlefirebaseData = (id) => {
  return (dispatch => {
    return firebase.database().ref(`/${id}`).once('value').then((snapshot) => {
      let a = snapshot.val();
      dispatch(idData(id));
      dispatch(firebaseData(a));
    });
  });
};


export const dataShow = (data) => {
  var starCountRef = firebase.database().ref('/');
  return (dispatch => {
    return starCountRef.on('value', (snapshot) => {
      const datas = snapshot.val();
      let map = data.map(key => {
        return { data: datas[`${key}`], id: key };
      });
      if (map.length !== 0) {
        dispatch(handleDataShow(map));
      }
    });
  });
};


export const handleDataShow = (data) => {
  return {
    type: firebases.DATA_SHOW,
    payload: data
  }
};

