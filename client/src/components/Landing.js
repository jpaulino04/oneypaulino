import React, { Component } from 'react'
import Accordion from "./Accordion";

class Landing extends Component {
    constructor(props){
      super(props)
      this.state = {} 

    }

    render() {    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        
      };

      return (
        <React.Fragment>
        <Accordion />
        <div className="row mx-0 mt-4 col-12">
          <iframe className="mx-auto d-block" width="620" height="420" src="https://www.youtube.com/embed/pOQszYIKtp0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen="true">
          </iframe>
        </div>

        <div className="row mx-auto mt-2 col-12">
          <h4 className="d-4 mx-auto">@Follow:</h4>
        </div>
        
        <div className="row m-0 pb-2 col-12">          
          <div className="mx-auto">
            <a className="mx-2 my-4" href="https://www.instagram.com/oneypaulino/" target="_blank">
              <i className="fab fa-instagram my-icons"></i>
            </a>
            <a className="mx-2 my-4" href="https://nb-no.facebook.com/pg/oneylacasa112/posts/" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>


        </React.Fragment>
      )

    }
}

export default Landing;
