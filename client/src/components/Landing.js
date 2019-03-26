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
        <div className="row col">
            <iframe className="mx-auto" width="620" height="420" 
                src="https://s3.amazonaws.com/oneypaulino-archivos/oneypaulino-vids3.MOV">

            </iframe>
        </div>
      )

    }
}

export default Landing;
