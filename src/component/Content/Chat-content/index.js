import { faGift, faImage, faPlusCircle, faSmile, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import md5 from 'md5';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submit } from 'redux-form';
import * as actions from './../../Actions';
import firebase from './../../firebase';
import './style.scss';

function ChatContent() {
  // them vao
  var date = new Date();
  const dispatch = useDispatch();
  const email = useSelector(state => state.email.email);
  const data = useSelector(state => state.dataContent.data);
  const ids = useSelector(state => state.idData.id);
  let db = firebase.firestore(firebase);
  const onValue = useRef();
  const [name, setName] = useState();
  const mdId = md5(email);

  //get name
  useEffect(() => {
    db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().email === email) {
          let names = `${doc.data().firstName} ${doc.data().lastName}`;
          setName(names)
        }
      });
    });
  }, [email, db])

  //logout
  const lame = () => {
    // scrollToBottom();
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
    }).catch(function (error) {
      // An error happened.
    });
  }


  //dispatch data chat
  useEffect(() => {
    const a = firebase.database().ref().child(`/${ids}`);
    a.on('value', snap => {
      dispatch(actions.firebaseData(snap.val()));
      scrollToBottom();
    });
  }, [ids])

  //show chat
  const hacks = () => {
    let arr = [];
    for (let i in data) {
      if (data[i].id === mdId) {
        arr.push(<div className="Me" key={i + "1"}>
          <span>
            {data[i].content}
          </span>
        </div>)
      } else {
        arr.push(<div className="You" key={i + "2"} >
          <span>
            {data[i].content}
          </span>
        </div>)
      }
    }
    return arr;
  }


  //value input
  const [vlKey, setVlKey] = useState("");
  const onKeys = (e) => {
    if (e.key === "Enter") {
      const a = e.target.value;
      setVlKey(a);
    }
  }

  // submit
  const onsubmit = (e) => {
    e.preventDefault();
    if (ids) {
      firebase.database().ref(`${ids}`).push({
        id: mdId,
        name: name,
        time: `${date.getHours()} : ${date.getMinutes()}`,
        content: vlKey
      });
      onValue.current.value = "";
    }
  }

  // scrollToBottom
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current.scrollIntoView(false);
    }, 1000);
  };

  return (
    <>
      <div className="Chat">
        {/* <button onClick={lame}>Click</button> */}
        {hacks()}
        <div ref={messagesEndRef} ></div>
      </div>
      <form onSubmit={onsubmit} className="input_text">
        <div className="icon">
          <a href='/#'><FontAwesomeIcon icon={faPlusCircle} className="hds" /></a>
          <a href='/#'><FontAwesomeIcon icon={faGift} className="hds" /></a>
          <a href='/#'><FontAwesomeIcon icon={faStickyNote} className="hds" /></a>
          <a href='/#'><FontAwesomeIcon icon={faImage} className="hds" /></a>
        </div>
        <div className="text_name">
          <input ref={onValue} onKeyDown={onKeys} defaultValue={vlKey} type="text" placeholder="Nhập tin nhắn, @name..." />
          <a href='/#'><FontAwesomeIcon icon={faSmile} className="hds prs" /></a>
        </div>
        <div className="icon-smile ">
          <a href='/#'><FontAwesomeIcon icon={faSmile} className="hds" /></a>
        </div>
      </form>
    </>
  );
}

export default ChatContent;
