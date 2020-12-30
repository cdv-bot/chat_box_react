import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Chat from './component/Chat';
import Home from './component/Home';
import './ha.scss';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
          <ToastContainer />
        </Route>
        <Route path="/chat" exact={true}>
          <Chat />
          <ToastContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
