import React, { Component } from 'react'

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

        <div className="row col m-0">
            <iframe className="mx-auto"  width="620" height="420" src="https://s3.amazonaws.com/oneypaulino-rsized/oneypaulino-vids4-conveted.mp4" frameborder="0" allow="accelerometer;   autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
      )

    }
}

export default Landing;
