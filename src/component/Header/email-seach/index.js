import md5 from 'md5';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firebase from './../../firebase';
import rand from 'random-key';

function EmailSeach({ names }) {
  const email = useSelector(state => state.email.email);
  var db = firebase.firestore();
  const [id, setId] = useState();
  const [name, setName] = useState();
  var date = new Date();


  useEffect(() => {
    db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().email === email) {
          setId(doc.id);
          let names = `${doc.data().firstName} ${doc.data().lastName}`;
          setName(names)
        }
      });
    });
  }, [email, db])


  const handerClick = (names) => {
    const emailMd5 = md5(email);
    const random = md5(names);
    const idRandom = Math.floor(Math.random() * 10);
    const room = rand.generate();
    if (email) {
      db.collection(`${email}`).get().then(function (querySnapshot) {

        if (querySnapshot.docs.length === 0) {
          db.collection(email).doc(random).set({
            id: room,
            name: names
          })
          db.collection(names).doc(md5(email)).set({
            id: room,
            name: names
          })


          firebase.database().ref(`${room}`).push({
            id: emailMd5,
            name: names,
            time: `${date.getHours()} : ${date.getMinutes()}`,
            content: "hello"
          });
        } else {
          querySnapshot.forEach(function (doc) {
            if (doc.data().name !== names) {
              db.collection(email).doc(random).set({
                id: room,
                name: names
              })
              db.collection(names).doc(md5(email)).set({
                id: room,
                name: names
              })

              firebase.database().ref(`${room}`).push({
                id: emailMd5,
                name: names,
                time: `${date.getHours()} : ${date.getMinutes()}`,
                content: "hello"
              });
            };
          });
        }
      });
    }
  }

  return (
    <div className="info-email">
      <div className="avt"></div>
      <div className="name" onClick={() => handerClick(names)}>{names}</div>
    </div>
  );
}

export default EmailSeach;
