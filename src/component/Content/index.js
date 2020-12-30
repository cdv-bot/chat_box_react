import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './../Actions';
import firebase from './../firebase';
import ChatContent from './Chat-content';
import Item from './Content-mini';
import md5 from 'md5';
import './style.scss';

function Content(props) {
  var db = firebase.firestore();
  const emails = useSelector(state => state.email.email);
  const data = useSelector(state => state.dataShow.data);
  const ids = useSelector(state => state.idData.id);
  const dispatch = useDispatch();
  const [users, setUser] = useState({});
  const showMenu = useSelector(state => state.showMenu.data);

  useEffect(() => {
    let arr = [];
    if (emails) {
      db.collection(emails).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          arr.push(doc.data().id);
        });
      });
      dispatch(actions.dataShow(arr));
    }
  }, [emails]);

  //
  useEffect(() => {
    if (emails) {
      const a = firebase.database().ref().child(`/`);
      a.on('value', snap => {
        let arr = [];
        db.collection(emails).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arr.push(doc.data().id);
          });
        });
        dispatch(actions.dataShow(arr));
      });
    }
  }, [emails])

  const clickList = (e) => {
    dispatch(actions.handlefirebaseData(e));
  }

  const resul = () => {
    if (data !== null) {
      let a = data.map((key, index) => {
        for (let keys in key) {
          for (let keyss in key[keys]) {
            return (<Item
              id={key['id']}
              key={Math.random()}
              name={key[keys][keyss].name}
              content={key[keys][keyss].content}
              handerClickList={clickList}
            />);
          }
        }
      });
      return a;
    }
  }


  return (
    <>
      <div className="Content">
        <div className={showMenu ? "Content-mini" : "Content-mini showMenu"}>
          {
            resul()
          }
        </div>
        <div className="Content-chat">
          <ChatContent />
        </div>
        <div className="Content-info">

        </div>
      </div>
    </>
  );
}

export default Content;
