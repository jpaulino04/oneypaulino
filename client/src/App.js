import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Slider from "./components/Slider";
import Integrantes from "./components/Integrantes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Header />
        <div className="container-fluid no-gutters p-0">
          <Switch>
            <Route exact path="/" component={Slider} />  
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
