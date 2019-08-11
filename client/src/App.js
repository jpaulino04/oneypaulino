import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Router, Switch, Route} from "react-router-dom";
import history from './history';

import Slides from "./components/Slider";
import Landing from "./components/Landing";
import Integrantes from "./components/Integrantes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Playlist from "./components/Playlist";
import Contacto from "./components/Contacto";
import "./App.css";


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
        <Header />
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
