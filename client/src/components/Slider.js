import React, { Component } from 'react'
import Slides from "react-slick";
import Fade from 'react-reveal/Fade';
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import {phrases} from "./quotes/quotes";



// images
// var myPictures = "./picturesArray"
import oneyp2 from "./img/oneyp2resized.jpg"
import lacasa2 from "./img/lacasa2resized.jpg"
import lacasaalex from "./img/lacasaalexresized.jpg"
import lacasaoney from "./img/lacasaoneyresized.jpg"
import lacasaosiris from "./img/lacasaosirisresized.jpg"


class Slider extends Component {
  constructor(props){
    super(props)
    this.state = {} 
  }
  
  render() {    
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      
    };
    let rand = Math.floor(Math.random() * 13) + 1  
    let rand2 = Math.floor(Math.random() * 13) + 1  
    let rand3 = Math.floor(Math.random() * 13) + 1  
    let rand4 = Math.floor(Math.random() * 13) + 1  
    let rand5 = Math.floor(Math.random() * 13) + 1 
    
    var myheight = window.innerHeight;

    return (    
          <div className="row text-center mt-2">
            <Slides className="col" {...settings}>
              <div className="cover" >
                <img className="img-fluid showcase mx-auto border rounded" src={`${oneyp2}`}></img>
              </div>

              <div className="cover" >
                <img className="img-fluid showcase mx-auto border rounded" src={`${lacasa2}`}></img>
              </div>

              <div className="cover" >
                <img className="img-fluid showcase mx-auto border rounded" src={`${lacasaalex}`}></img>
              </div>

              <div className="cover" >
                <img className="img-fluid showcase mx-auto border rounded" src={`${lacasaoney}`}></img>
              </div>

              <div className="cover" >
                <img className="img-fluid showcase mx-auto border rounded" src={`${lacasaosiris}`}></img>
              </div>
            
            </Slides>
          </div>
    )
  }
}

export default Slider;
