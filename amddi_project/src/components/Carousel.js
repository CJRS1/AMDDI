import React from 'react'
import '../styles/Carousel.css'

export default function Carousel() {

    return (
        <section className="carousel_container">
            <div id="carouselExample" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2" aria-current="true"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3" aria-current="true"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require('../images/asesoria.jpeg')} alt='AMDDI' height={'603.2px'} width={'1481px'}/>
                        <div className="carousel-caption d-none d-md-block">
                            <button type="button" className="btn button-effect">Contáctanos por Whatsapp</button>
                            <button type="button" className="btn button-effect">Contáctanos por Correo</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../images/practicas.jpg')} alt='AMDDI' height={'603.2px'} width={'1481px'}/>
                        <div className="carousel-caption d-none d-md-block">
                            <button type="button" className="btn button-effect">Contáctanos por Whatsapp</button>
                            <button type="button" className="btn button-effect">Contáctanos por Correo</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../images/proyecto.jpeg')} alt='AMDDI' height={'603.2px'} width={'1481px'}/>
                        <div className="carousel-caption d-none d-md-block">
                            <button type="button" className="btn button-effect">Contáctanos por Whatsapp</button>
                            <button type="button" className="btn button-effect">Contáctanos por Correo</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../images/negocio.jpeg')} alt='AMDDI' height={'603.2px'} width={'1481px'}/>
                        <div className="carousel-caption d-none d-md-block">
                            <button type="button" className="btn button-effect">Contáctanos por Whatsapp</button>
                            <button type="button" className="btn button-effect">Contáctanos por Correo</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev button-carousel" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon icon-x" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next button-carousel" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon icon-x" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}