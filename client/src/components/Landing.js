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

        <div className="row mt-4 mb-0 p-0 mx-auto text-center">
          <div className="col-sm-8 mx-auto">
            <iframe 
              className="mx-auto d-block mb-0 text-center"
              src="https://embed.spotify.com/follow/1/?uri=spotify:artist:2qlwghSoPrDUq6HixTnUd0&size=detail&theme=light" 
              width="240" height="66" scrolling="no" frameborder="0"  allowtransparency="true">              
            </iframe>            
          </div>

          <div className="col-sm-8 mx-auto mt-0 pt-0">
          <p className="mx-auto text-muted d-block">Siguenos en Spotify</p>
          </div>
                    
        </div>

        {/* <div className="row col-sm-8 mt-0  mb-0 p-0 mx-auto text-center">
          <p className="mx-auto muted d-block">Siguenos en Spotify</p>
        </div> */}

        <div className="row col-sm-8 mt-4 mb-0 pb-0 mx-auto text-center">
          <p className="d-block mx-auto text-muted">
            <span className="text-warning"><b>Lo Nuevo 2020</b></span>, <u><a className="text-dark " href="https://www.youtube.com/embed/uzP1QQEsOS4">No Creo en Cupido!</a></u></p>
        </div>    

        <div className="row mx-0 mt-0 col-12 mb-4 pb-2">          
          <iframe 
            className="mx-auto d-block mb-4 text-center" width="620" height="315" src="https://www.youtube.com/embed/uzP1QQEsOS4" 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen="true"
          >
          </iframe>
        </div>
        
        <div className="row col-12 mt-4 mb-0 pb-0">
          <p className="mx-auto d-block text-dark text-dark lead"><b>Playlist:</b></p>
        </div>
        
        <div className="row mx-0 col-12">          
          <iframe 
            className="mx-auto d-block mb-4" width="620" height="315" src="https://www.youtube.com/embed?listType=playlist&list=PLWme-k7nWuTr6OJWFt1BvDaA8PXo6pEbQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen="true">
          </iframe>
        </div>

        {/*************************************Ensayos */}

        <div className="row col-12 mt-4 mb-0 pb-0">
          <p className="mx-auto d-block text-dark text-dark lead"><b>Ensayos:</b></p>
        </div>
        
        <div className="row mx-0 col-12">          
          <iframe 
            className="mx-auto d-block" width="620" height="420" src="https://www.youtube.com/embed/pOQszYIKtp0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen="true">
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
            <a className="mx-2 my-4" href="https://www.facebook.com/oneypaulino112/" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>


        </React.Fragment>
      )

    }
}

export default Landing;
