import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import '../styles/Carousel.css'

export default function Carousel() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const efectoRef = useRef(null);
    const imagenRef = useRef(null);

    useEffect(() => {

        const handleScroll = () => {

            const maxTop = 500;

            if (window.scrollY > 300) {
                efectoRef.current.style.top = "0px";
            } else {
                efectoRef.current.style.top = "-800px";
            }

            imagenRef.current.style.top = Math.min(window.scrollY, maxTop) + 'px';

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
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
                    <div className="carousel-item practica">
                        <img className="img-carousel" src={require('../images/practicas_ preprofesionales.png')} alt='practicas' height={'603.2px'} width={'1481px'} />
                        {/* <div className="carousel-caption d-none d-md-block">
                            <Link to="/AMDDI/programadeingresos" type="button" className="btn button-effect">Escríbemos</Link>
                        </div> */}
                        <div className="practicas_description">
                            <div className="practicas_titulo">

                                <h2><span className='color_verde'>REALIZA</span> TUS PRÁCTICAS</h2>
                                <h2>PRE <span className='color_verde'>PROFESIONALES</span> CON</h2>
                                <h2>GRUPO <span className='color_verde'>AMDDI</span></h2>
                            </div>
                            <a href="https://pe.indeed.com/cmp/Amddi-S.a.c." target="_blank" rel="noreferrer" className='indeed_btn '>
                                Revisa nuestras convocatorias vigentes
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="img-carousel" src={require('../images/proyecto_inversión.png')} alt='proyecto' height={'603.2px'} width={'1481px'} />

                        <div className="proyecto_descripcion">
                            <div className="proyecto_titulo">
                                <h2 className='titulo_negocio_1'>PROYECTO DE</h2>
                                <h2 className='titulo_proyecto_2'>INVERSIÓN</h2>
                                <div className="carousel-caption d-none d-md-block contenedor_btn_proyecto">
                                    <a href="https://walink.co/4d2ac9" target="_blank" rel="noreferrer" type="button" className="btn button-effect contacto_carousel">Asesoría en vivo</a>
                                    <Link to="/AMDDI/contactanos" type="button" className="btn button-effect contacto_carousel">Contáctanos</Link>
                                </div>
                            </div>
                            <div className="proyecto_listas">
                                <ul className="proyecto_list">
                                    <li><span></span>Diseño Estratégico</li>
                                    <li><span></span>Estudio Técnico</li>
                                    <li><span></span>Estudio Organizacional y Legal</li>
                                    <li><span></span>Estudio Ambiental</li>
                                    <li><span></span>Estudio de Mercado</li>
                                    <li className='proyecto_last'><span></span>Estudio Económico Financiero</li>
                                    <Link to="/AMDDI/contactanos" type="button" className="btn button-effect contacto_carousel proyecto_contacto">Contáctanos</Link>
                                </ul>
                            </div>
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
            <div className="amddi_internacional">
                <div className="img_container">
                    <img className="img-carousel" src={require('../images/somos_internacionales.png')} alt='proyecto' height={'605px'} width={'826px'} />
                </div>
                <div className="amdi_international_description">
                    <div className="international_container">
                        <h3>En AMDDI somos</h3>
                        <h3> INTERNACIONES</h3>
                        <div className="international_desc">
                            <p>
                                En AMDDI somos una empresa que brinda el servicio de trabajo de invertifaciòn con el objetivo de lograr que nuestros clientes se superen en el ámbito acadèmido y profesional; en ese sentido contamos con un equipo conformado por asesores metodolòsicos estadísticos.
                            </p>

                        <Link to="/AMDDI/nosotros" type="button" className="btn button-effect contacto_carousel">Conócenos</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="caracteristica_servicios" id="inicio">
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
                    <Link to="/AMDDI/servicios" className="boton_servicios button-effect" >Ver Más</Link>
                </div>
            </div> */}
            <div className="contenedor-efecto">
                <div ref={efectoRef} className="efecto-scroll">
                    <div className="contenido-texto">
                        <h2>#¡SEGUIMOS ADELANTE!</h2>
                        <p>Asesoría y redacción de tesis de Pregrado, Posgrado, Doctorado y MBA.</p>
                        <div className="contacto_carousel contacto">
                            <Link to="/AMDDI/contactanos" type="button" className="btn button-effect contacto_carousel">Más información</Link>
                        </div>
                    </div>
                    <img ref={imagenRef} className="img-scroll" src={require('../images/adelante_completo.png')} alt='asesoria' />
                </div>
            </div>
        </section>

    )
}