import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Router, Switch, Route} from "react-router-dom";
import history from './history';

import Accordion from "./components/Accordion";
import Contacto from "./components/Contacto";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Integrantes from "./components/Integrantes";
import Landing from "./components/Landing";
import Playlist from "./components/Playlist";
import Slides from "./components/Slider";
import "./App.css";


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
        <Header />
        <Accordion />
        <div className="container-fluid no-gutters p-0 m-0">
          <Switch>
            <Route exact path="/" component={Landing} />  
            <Route exact path="/images" component={Slides} />
            <Route exact path="/playlist" component={Playlist} />
            <Route exact path="/integrantes" component={Integrantes} /> 
            <Route exact path="/contacto" component={Contacto} />                    
          </Switch>
 
        </div>
        <Footer />
        </div>
        
      </Router>
    );
  }
}

export default App;
