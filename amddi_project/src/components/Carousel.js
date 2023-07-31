import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Carousel.css'

export default function Carousel() {

    return (
        <section className="carousel_container">
            <div id="carouselExample" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="5000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2" aria-current="true"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3" aria-current="true"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require('../images/asesoria.jpeg')} alt='AMDDI' height={'603.2px'} width={'1481px'} />
                        <div className="carousel-caption d-none d-md-block">
                            <button type="button" className="btn button-effect">Contáctanos por Whatsapp</button>
                            <Link to="/AMDDI/contactanos" type="button" className="btn button-effect">Contáctanos por Correo</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../images/practicas.jpg')} alt='AMDDI' height={'603.2px'} width={'1481px'} />
                        <div className="carousel-caption d-none d-md-block">
                            <button type="button" className="btn button-effect">Contáctanos por Whatsapp</button>
                            <Link to="/AMDDI/contactanos" type="button" className="btn button-effect">Contáctanos por Correo</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../images/proyecto.jpeg')} alt='AMDDI' height={'603.2px'} width={'1481px'} />
                        <div className="carousel-caption d-none d-md-block">
                            <button type="button" className="btn button-effect">Contáctanos por Whatsapp</button>
                            <Link to="/AMDDI/contactanos" type="button" className="btn button-effect">Contáctanos por Correo</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../images/negocio.jpeg')} alt='AMDDI' height={'603.2px'} width={'1481px'} />
                        <div className="carousel-caption d-none d-md-block">
                            <button type="button" className="btn button-effect">Contáctanos por Whatsapp</button>
                            <Link to="/AMDDI/contactanos" type="button" className="btn button-effect">Contáctanos por Correo</Link>
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
            <div class="caracteristica_servicios" id="inicio">
                <div class="caracterisctia_servicios_container">
                    <h2>Nuestros Servicios</h2>
                    <p class="servicios_descripcion">
                        En nuestra plataforma ofrecemos servicios académicos de alta calidad para brindarte el apoyo necesario en el desarrollo de tu tesis. Nuestro equipo de expertos te guiará en cada etapa del proceso de investigación y redacción, asegurándonos de que alcances tus objetivos académicos con éxito. En AMDDI nos encocamos en:
                    </p>
                    <ul class="lista_servicios">
                        <li>Asesoría y orientación en el tema de tesis.</li>
                        <li>Revisión y retroalimentación sobre el diseño de la investigación y la formulación del problema.</li>
                        <li>Asistencia en la revisión de literatura y búsqueda de fuentes académicas relevantes.</li>
                        <li>Apoyo en la definición de la metodología de investigación adecuada.</li>
                        <li>Ayuda en la recolección y análisis de datos.</li>
                        <li>Revisión y corrección del contenido, gramática y estilo del trabajo de tesis.</li>
                        <li>Asesoramiento en la interpretación de los resultados y conclusiones.</li>
                        <li>Apoyo en la redacción de la introducción, marco teórico, metodología, resultados y conclusiones.</li>
                        <li>Orientación en la estructura y formato requeridos por la institución académica.</li>
                        <li>Asesoramiento sobre aspectos éticos y de integridad académica.</li>
                    </ul>
                    {/* <!-- <img class="imagen_servicios" src="ruta_de_la_imagen.jpg" alt="Imagen representativa"> --> */}
                    <Link to="/AMDDI/servicios" class="boton_servicios button-effect" >Ver Más</Link>
                </div>
            </div>
        </section>

    )
}