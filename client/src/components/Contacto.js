import React from "react";

//imagenes
import brenda from '../images/brendasosa1.jpg'
import alicia from '../images/alicia.JPG'
import vitico from '../images/vitico.jpg'
import brianda from '../images/brianda2.JPG'
import ricky from '../images/ricky.JPG'
import saul from '../images/saul.JPG'
import julio from '../images/julio3.jpg'

function Contacto() {
  return (

        <div className="integrantes-text p-4 text-center row">
            <div className="col-12 h5 text-info">oneylacasa112@gmail.com</div>
            <div className="col-12 h5 text-info"><a href="https://www.instagram.com/oneypaulino/" target="_blank"><i className="fab fa-instagram inst-contacto"></i></a> @oneypaulino</div>

            <div className="card my-4 mx-auto border border py-4 col-md-4" style={{maxWidth: "40rem"}}> 
                <img className="card-img-top img-thumbnail rounded-circle picture mx-auto"  src={`${alicia}`}></img>                
                <div className="card-body">
                    <h2 className="card-title mb-0">Alicia Madera</h2>                    
                    <h5 class="card-title">Gerente de Negocios</h5>
                    {/* <div className="card-header">Director de</div> */}
                    <p className="lead"><i className="fab fa-instagram inst-contacto"></i> im.aliceem</p>
                </div>  
            </div>

            <div className="card my-4 mx-auto border border py-4 col-md-4" style={{maxWidth: "40rem"}}> 
                <img className="card-img-top img-thumbnail rounded-circle picture mx-auto"  src={`${saul}`}></img>
                <div className="card-body py-0">
                    <h2 className="card-title mb-0">Saul Romero</h2>
                    <h5 class="card-title">Asistente de Negocios</h5>
                    <p className="lead"><i className="fab fa-instagram inst-contacto"></i> saulr08</p>
                </div>  
            </div>  
            
            <div className="card my-4 mx-auto border border py-4 col-md-4" style={{maxWidth: "40rem"}}> 
                <img className="card-img-top img-thumbnail rounded-circle picture mx-auto"  src={`${brenda}`}></img>
                <div className="card-body py-0">
                    <h2 className="card-title mb-0">Brenda Sosa</h2>
                    <h5 class="card-title">Encargada Club de Fans</h5>
                    <p className="lead"><i className="fab fa-instagram inst-contacto"></i> eda.plus</p>
                </div>  
            </div>

            <div className="card my-4 mx-auto border border py-4 col-md-4" style={{maxWidth: "40rem"}}> 
                <img className="card-img-top img-thumbnail rounded-circle picture mx-auto"  src={`${brianda}`}></img>
                <div className="card-body py-0">
                    <h2 className="card-title mb-0">Brianda Sosa</h2>
                    <h5 class="card-title">Gerente de Diseños</h5>
                    <p className="lead"><i className="fab fa-instagram inst-contacto"></i> briandas18</p>
                </div>  
            </div>

            <div className="card my-4 mx-auto border border py-4 col-md-4" style={{maxWidth: "40rem"}}> 
                <img className="card-img-top img-thumbnail rounded-circle picture mx-auto"  src={`${vitico}`}></img>                
                <div className="card-body">
                    <h2 className="card-title mb-0">Victor Madera</h2>                    
                    <h5 class="card-title">Gerente de Promociones</h5>
                    <p className="lead"><i className="fab fa-instagram inst-contacto"></i> victormadera25</p>
                    {/* <div className="card-header">Director de</div> */}
                    <p className="card-text py-0"></p>
                </div>  
            </div>

            <div className="card my-4 mx-auto border border py-4 col-md-4" style={{maxWidth: "40rem"}}> 
                <img className="card-img-top img-thumbnail rounded-circle picture mx-auto"  src={`${julio}`}></img>                
                <div className="card-body">
                    <h2 className="card-title mb-0">Cesar Peña</h2>                    
                    <h5 class="card-title">Asistente de Promociones</h5>
                    {/* <div className="card-header">Director de</div> */}
                    <p className="card-text py-0"></p>
                </div>  
            </div>

            <div className="card my-4 mx-auto border border py-4 col-md-4" style={{maxWidth: "40rem"}}> 
                <img className="card-img-top img-thumbnail rounded-circle picture mx-auto"  src={`${ricky}`}></img>
                <div className="card-body py-0">
                    <h2 className="card-title mb-0">Enrique Mosquea</h2>
                    <h5 class="card-title">Asistente de Promociones</h5>
                    <p className="lead"><i className="fab fa-instagram inst-contacto"></i> mrenrique13</p>
                </div>  
            </div>
        </div>

    )
  
}

export default Contacto;
