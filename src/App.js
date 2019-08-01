import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container,} from 'semantic-ui-react';
import { Switch, Route, } from 'react-router-dom';
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Navbar from './components/Navbar';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import Projects from './components/Projects';


const App = () => (
  <>
  <div>
<Navbar />
  <Switch>
    <Route exact path='/' component = {Home} />
    <Route exact path='/projects' component = {Projects} />
    <Route exact path='/hobbies' component = {Hobbies} />
    <Route exact path='/skills' component = {Skills} />
    <Route component={NoMatch} />
  </Switch>
  </div>
  </>
)
export default App;
