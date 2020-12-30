import { combineReducers } from 'redux';
import sigin from './sigin';
import email from './emaiLogin';
import data from './data';
import totalEmail from './totalEmail';
import textThunk from './textThunk';
import dataContent from './dataContent';
import dataShow from './dataShow';
import idData from './idData';
import showMenu from './showMenu';
const rootReducer = combineReducers({
  sigin,
  email,
  data,
  totalEmail,
  textThunk,
  dataContent,
  dataShow,
  idData,
  showMenu
});

export default rootReducer;
