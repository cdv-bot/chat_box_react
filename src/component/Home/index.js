import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../Login';
import Sigin from '../Sigin';

function Home(props) {
  const vlSigin = useSelector(state => state.sigin.checkSigin);
  return (
    <>
      <Login />
      {vlSigin ? <Sigin /> : null}
    </>
  );
}

export default Home;
