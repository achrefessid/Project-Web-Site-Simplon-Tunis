import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './App.css';

import Navbar from './Components/Navbar'
import Acuiell from './Components/Acuiell'
import Equipe from './Components/Equipe'
import Apropos from './Components/Apropos'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Team from './Components/Team'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar />
        <Route exact path='/acuiell' component={Acuiell} />
        <Route exact path='/equipe' component={Equipe} />
        <Route exact path='/apropos' component={Apropos} />
        <Route exact path='/contact' component={Contact} />
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;