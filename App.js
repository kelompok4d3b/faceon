import React from 'react';
import Login from './Login';
import Daftar from './Daftar';
import Main from './Main';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/daftar" component={Daftar} />
        <Route path="/main" component={Main} />
      </Switch>      
    </div>
  );
}

export default App;
