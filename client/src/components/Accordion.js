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
                    <div id="collapseOne" className="collapse show" data-parent="#accordion">
                        <div className="card-body text-center text-muted-accordion">
                        Oney Paulino mas que un artista, es un projecto con una visión innovadora. La Casa 112 se refiere a nuestra agrupacion. El termino 'La Casa' nos emotiva por que nos hace pensar que somos una familia. 
                        </div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-header">
                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                        Collapsible Group Item #2
                    </a>
                    </div>
                    <div id="collapseTwo" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-header">
                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                        Collapsible Group Item #3
                        </a>
                    </div>
                    <div id="collapseThree" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </Fragment>
    )
}
