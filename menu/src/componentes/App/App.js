import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router';

import Header from '../Header/Header.jsx';
import Inicio from '../Inicio/Inicio.jsx';
import Cursos from '../Cursos/Cursos.jsx';



function App() {
  return (
    <div>

      <Header/>
      <main>
        <Switch>
          <Route exact path="/" render = {(props) => <Inicio/>}></Route>
          <Route exact path="/cursos" render = {(props) => <Cursos/>}></Route>
        </Switch>
      </main>

    </div>
  );
}

export default App;
