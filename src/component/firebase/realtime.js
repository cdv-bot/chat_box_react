
import firebase from './index';

const realtime = (id) => {
  // const dispatch = useDispatch();
  const dbs = firebase.database().ref().child(id);
  dbs.on('value', snap => {

  });
}

export default realtime;
