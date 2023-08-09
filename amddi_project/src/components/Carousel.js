import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import '../styles/Carousel.css'

export default function Carousel() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
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
                        <img className="img-carousel" src={require('../images/asesoria.jpg')} alt='asesoria' height={'603.2px'} width={'1481px'} />
                        <div className="carousel-caption d-none d-md-block">
                            <a href="https://walink.co/4d2ac9" target="_blank" rel="noreferrer" type="button" className="btn button-effect">Contáctanos por Whatsapp</a>
                            <Link to="/AMDDI/contactanos" type="button" className="btn button-effect">Contáctanos por Correo</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="img-carousel" src={require('../images/practicas.jpg')} alt='practicas' height={'603.2px'} width={'1481px'} />
                        <div className="carousel-caption d-none d-md-block">
                            <Link to="/AMDDI/programadeingresos" type="button" className="btn button-effect">Escríbemos</Link>
                            {/* <Link to="/AMDDI/contactanos" type="button" className="btn button-effect">Contáctanos por Correo</Link> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="img-carousel" src={require('../images/proyecto.jpeg')} alt='proyecto' height={'603.2px'} width={'1481px'} />
                        <div className="carousel-caption d-none d-md-block">
                            <a href="https://walink.co/4d2ac9" target="_blank" rel="noreferrer" type="button" className="btn button-effect">Contáctanos por Whatsapp</a>
                            <Link to="/AMDDI/contactanos" type="button" className="btn button-effect">Contáctanos por Correo</Link>
                        </div>
                    </div>
                    <div className="carousel-item negocio">
                        <img className="img-carousel " src={require('../images/Plan_negocio.png')} alt='negocio' height={'603.2px'} width={'1481px'} />
                        {/* <div className="carousel-caption d-none d-md-block">
                            <a href="https://api.whatsapp.com/send?phone=51937965909" target="_blank" rel="noreferrer" type="button" className="btn button-effect">Contáctanos por Whatsapp</a>
                            <Link to="/AMDDI/contactanos" type="button" className="btn button-effect">Contáctanos por Correo</Link>
                        </div> */}
                        <div className="negocio_descripcion">
                            <div className="negocio_titulo">
                                    <h2 className='titulo_negocio_1'>PLANES DE</h2>
                                    <h2 className='titulo_negocio_2'>NEGOCIO</h2>
                            </div>
                            <div className="negocio_listas">
                                <ul className="negocio_list">
                                    <li><span></span>Resumen ejecutivo</li>
                                    <li><span></span>Plan organizacional</li>
                                    <li><span></span>Plan operativo</li>
                                    <div className="contacto_carousel contacto-whatsapp">
                                    <a href="https://walink.co/4d2ac9" target="_blank" rel="noreferrer" type="button" className="btn button-effect contacto_carousel ">Asesor en vivo</a>
                                    </div>
                                </ul>
                                <ul className="negocio_list">
                                    <li><span></span>Análisis de mercado</li>
                                    <li><span></span>Finanzas</li>
                                    <li><span></span>Plan de marketing</li>
                                    <div className="contacto_carousel contacto">
                                    <Link to="/AMDDI/contactanos" type="button" className="btn button-effect contacto_carousel">Contáctanos</Link>
                                    </div>
                                </ul>
                            </div>
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
            <div className="caracteristica_servicios" id="inicio">
                <div className="caracterisctia_servicios_container">
                    <h2 className='nuestros_servicios_title'>Nuestros Servicios</h2>
                    <p className="servicios_descripcion">
                        En nuestra plataforma ofrecemos servicios académicos de alta calidad para brindarte el apoyo necesario en el desarrollo de tu tesis. Nuestro equipo de expertos te guiará en cada etapa del proceso de investigación y redacción, asegurándonos de que alcances tus objetivos académicos con éxito. En AMDDI nos encocamos en:
                    </p>
                    <ul className="lista_servicios">
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
                    {/* <!-- <img className="imagen_servicios" src="ruta_de_la_imagen.jpg" alt="Imagen representativa"> --> */}
                    <Link to="/AMDDI/servicios" className="boton_servicios button-effect" >Ver Más</Link>
                </div>
            </div>
        </section>

    )
}