import React, {Fragment} from 'react'

export default function Accordion() {
    return (
        <Fragment>
            <div className="container mt-4">
                <h2 className="text-center ">Oney Paulino & La Casa 112</h2>
                <div id="accordion">
                    <div className="card">
                    <div className="card-header text-center pb-0 mb-0">
                        <p className="lead" data-toggle="collapse" href="#collapseOne">
                        About Us
                        </p>
                    </div>
                    <div id="collapseOne" className="collapse" data-parent="#accordion">
                        <div className="card-body text-center text-muted-accordion">
                        Oney Paulino, mas que un artista, es un projecto con una visión innovadora. La Casa 112 se refiere a nuestra agrupación. El termino 'La Casa' nos emotiva por que nos recuerda que somos una familia. 
                        </div>
                    </div>
                    </div>  
                </div>
                </div>
        </Fragment>
    )
}
