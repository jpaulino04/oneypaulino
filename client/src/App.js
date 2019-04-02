import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Slides from "./components/Slider";
import Landing from "./components/Landing";
import Integrantes from "./components/Integrantes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Playlist from "./components/Playlist";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Header />
        <div className="container-fluid no-gutters p-0 m-0">
          <Switch>
            <Route exact path="/" component={Landing} />  
            <Route exact path="/imagenes" component={Slides} />
            <Route exact path="/playlist" component={Playlist} />
            <Route exact path="/integrantes" component={Integrantes} />                    
          </Switch>
 
        </div>
        <Footer />
        </div>
        
      </Router>
    );
  }
}

export default App;
