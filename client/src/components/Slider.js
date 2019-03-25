import React, { Component } from 'react'
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import {phrases} from "./quotes/quotes";



// images
var myPictures = "./picturesArray"


class Landing extends Component {
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
          <div className="row text-center">
            <Slider className="col" {...settings}>
              <div className="cover" >
                <img className="img-fluid showcase mx-auto border rounded" src={`https://s3.amazonaws.com/oneypaulino-rsized/oneypaulino-pics${rand}small.jpg`}></img>
              </div>

              <div className="cover" >
                <img className="img-fluid showcase mx-auto border rounded" src={`https://s3.amazonaws.com/oneypaulino-rsized/oneypaulino-pics${rand2}small.jpg`}></img>
              </div>

              <div className="cover" >
                <img className="img-fluid showcase mx-auto border rounded" src={`https://s3.amazonaws.com/oneypaulino-rsized/oneypaulino-pics${rand3}small.jpg`}></img>
              </div>

              <div className="cover" >
                <img className="img-fluid showcase mx-auto border rounded" src={`https://s3.amazonaws.com/oneypaulino-rsized/oneypaulino-pics${rand4}small.jpg`}></img>
              </div>

              <div className="cover" >
                <img className="img-fluid showcase mx-auto border rounded" src={`https://s3.amazonaws.com/oneypaulino-rsized/oneypaulino-pics${rand5}small.jpg`}></img>
              </div>
            
            </Slider> 
          </div>
    )
  }
}

export default Landing;
