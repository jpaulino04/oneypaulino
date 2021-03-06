import React from "react";

function Integrantes() {
  return (

        <div className="integrantes-text p-4 text-center">    

            <div className="card my-4 mx-auto border border py-4" style={{maxWidth: "40rem"}}> 
                <img className="card-img-top img-thumbnail rounded-circle picture mx-auto"  src="https://s3.amazonaws.com/oneypaulino-rsized/alex3small.jpg"></img>                
                <div className="card-body">
                    <h2 className="card-title mb-0">Alex</h2>                    
                    <h5 class="card-title">Director de banda</h5>
                    {/* <div className="card-header">Director de</div> */}
                    <p className="card-text py-0">Con cuatro cuerdas te pone a mover la cabeza. Ademas de su agilidad con el bajo, también toca muy bien la guitarra y es arreglista de todas las canciones.</p>
                </div>  
            </div>

            <div className="card my-4 mx-auto border border py-4" style={{maxWidth: "40rem"}}> 
                <img className="card-img-top img-thumbnail rounded-circle picture mx-auto"  src="https://s3.amazonaws.com/oneypaulino-rsized/osirissmall.jpg"></img>
                <div className="card-body">
                    <h2 className="card-title mb-0">Osiris</h2>
                    <h5 class="card-title">2da Guitarra</h5>
                    <p className="card-text py-0">Les presento el papi champú del grupo. Sin embargo, su destreza en la guitarra y piano también lo hacen una de las figuras mas relevantes de la casa.</p>
                </div>  
            </div>

            <div className="card my-4 mx-auto border border py-4" style={{maxWidth: "40rem"}}> 
                <img className="card-img-top img-thumbnail rounded-circle picture mx-auto"  src="https://s3.amazonaws.com/oneypaulino-rsized/oneysmall.jpg"></img>
                <div className="card-body">
                    <h2 className="card-title mb-0">Oney Paulino</h2>
                    <h5 class="card-title">Vocalista</h5>
                    <p className="card-text py-0">El Artista y compositor oficial de La Casa 112. Sus pasadas experiencias, y sus capacidades imaginativas le hacen vivir todas sus composiciones.</p>
                </div>  
            </div>

            <div className="card my-4 mx-auto border border py-4" style={{maxWidth: "40rem"}}> 
                <img className="card-img-top img-thumbnail rounded-circle picture mx-auto"  src="https://s3.amazonaws.com/oneypaulino-rsized/pedro2small.jpg"></img>
                <div className="card-body py-0">
                    <h2 className="card-title mb-0">Pedro</h2>
                    <h5 class="card-title font-italic">En memoria a nuestro ex-pianista</h5>
                    <p className="card-text py-0 my-0">Este muchacho no tiene compasión del piano. Pedro desliza sus 10 dedos sobre las teclas y crea una melodía armónica e irresistible.</p>
                </div>    
                        
            </div>

        </div>
        

    )
  
}

export default Integrantes;
