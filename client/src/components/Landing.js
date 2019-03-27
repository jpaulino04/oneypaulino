import React, { Component } from 'react'


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

      return (
        <div className="row col m-0">            
            <iframe className="mx-auto"  width="620" height="420" src="https://www.youtube.com/embed/esDigDrvIwk" frameborder="0" allow="accelerometer;   autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
      )

    }
}

export default Landing;
