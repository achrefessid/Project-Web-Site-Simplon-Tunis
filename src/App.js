import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './App.css';

import Header from './Components/Header'
import Acuiell from './Components/Acuiell'
import Equipe from './Components/Equipe'
import Apropos from './Components/Apropos'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Team from './Components/Team'

class App extends Component {
  render() {
    return (
      <Header />
    )
  }
}

export default App;

