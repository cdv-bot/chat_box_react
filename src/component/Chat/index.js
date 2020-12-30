import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Content from '../Content';
import Header from '../Header';
import Paneo from '../paneo';
import firebase from './../firebase';
import * as actions from './../Actions';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';

function Chat(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        dispatch(actions.emailLogin(user.email));
        toast.success("Chào mừng tới với chat box!!!");
      } else {
        history.push("/");
      }
    });
  }, [history, dispatch]);
  return (
    <>
      <Header />
      <Paneo />
      <Content />
    </>
  );
}

export default Chat;
