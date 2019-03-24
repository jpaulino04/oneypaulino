import React, { Component } from 'react'
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import {phrases} from "./quotes/quotes";

// images



class Landing extends Component {
  constructor(props){
    super(props)
    this.state = {} 
  }

  render() {    
    return (
         <div className="text-center h4 pt-2">
            Bienvenido la pagina oficial de Oney Paulino.

            <img className="img-fluid" src={require("../images/lacasa.jpg")}></img>

        </div>
    )
  }
}

export default Landing;
