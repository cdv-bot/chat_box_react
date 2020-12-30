import { takeLatest } from 'redux-saga/effects';
import * as taskTypes from './../constants/Login';

function* mySaga() {
  function* addTaskSaga(props) {
    yield "an";
  }

  function* rootSaga() {
    yield takeLatest(taskTypes.SIGINS, mySaga);
  }
}

export default mySaga;
