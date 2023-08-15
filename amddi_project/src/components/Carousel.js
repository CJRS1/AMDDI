import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import '../styles/Carousel.css'

function Contador({ inicio, final, duracion }) {
    const [contador, setContador] = useState(inicio);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setContador(prev => {
                if (prev === final) {
                    clearInterval(intervalo);
                    return prev; // No incrementar más
                }
                return prev + 1;
            });
        }, duracion);

        return () => {
            clearInterval(intervalo);
        };
    }, [final, duracion]);

    return <h3>{contador}</h3>;
}

export default function Carousel() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const efectoRef = useRef(null);
    const imagenRef = useRef(null);

    useEffect(() => {

        const handleScroll = () => {

            const maxTop = 1000;

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


    const seccionRef = useRef(null);
    const [animated, setAnimated] = useState(false); // Estado para controlar la animación

    useEffect(() => {
        const handleScroll = () => {
            if (!animated && isInViewport(seccionRef.current)) {
                animateCols();
                setAnimated(true); // Marcar la animación como realizada
            }
        }

        const isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.left <= window.innerWidth &&
                rect.right >= 0 &&
                rect.top <= window.innerHeight &&
                rect.bottom >= 0
            )
        }

        const animateCols = () => {
            const cols = seccionRef.current.querySelectorAll('.col');
            cols.forEach((col, index) => {
                col.classList.add('animated');
                col.style.animationDelay = `${index * 0.2}s`;
            });
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [animated]); // Añade "animated" como dependencia



    return (
        <section className="carousel_container">
            <div id="carouselExample" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="80000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2" aria-current="true"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3" aria-current="true"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 4" aria-current="true"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="4" aria-label="Slide 5" aria-current="true"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active asesoria">
                        <img className="img-carousel img_principal" src={require('../images/asesoria.png')} alt='asesoria' height={'603.2px'} width={'1481px'} />
                        <img className="img-carousel img_responsive" src={require('../images/recortado1.png')} alt='asesoria' height={'603.2px'} width={'1481px'} />

                        <div className="botones_contacto_asesoria carousel-caption d-none d-md-block ">
                            <a href="https://walink.co/4d2ac9" target="_blank" rel="noreferrer" type="button" className="btn button-effect">Más información</a>
                            <Link to="/AMDDI/contactanos" type="button" className="btn button-effect">Contáctanos</Link>
                        </div>

                        <div className="asesoria_descripcion">
                            <div className="asesoria_titulo">
                                <h2 className='titulo_principal'>TESIS PARA GENTE</h2>
                                <h2 className='titulo_principal'><span>QUE TRABAJA</span></h2>

                                <h2 className='titulo_2'>TESIS PARA GENTE<span> QUE <br /> TRABAJA</span></h2>

                                <div className="asesoria_subtitulo">
                                    <h3>PREGRADO <span>-</span> MAESTRÍA <span>-</span> DOCTORADO <span>-</span> MBA</h3>
                                </div>
                            </div>
                            <ul className="asesoria_lista">
                                <li><span></span>Asesoría personalizada</li>
                                <li><span></span>Compromiso con nuestro trabajo</li>
                                <li><span></span>Especialistas de todas las carreras profesionales</li>
                            </ul>
                            <div className="medalla_container">
                                <img className="medalla" src={require('../images/medalla.png')} alt='medalla' height={'200px'} width={'200px'} />
                                <img className="somos" src={require('../images/somos.png')} alt='eslogan' height={'100px'} width={'450px'} />
                            </div>
                            {/* <Link to="/AMDDI/contactanos" type="button" className="btn btn_asesoria button-effect contact_carousel">Contáctanos</Link> */}
                            <Link to="/AMDDI/contactanos" type="button" className="btn button-effect contacto_carousel proyecto_contacto contacto_tesis_pre">Contáctanos</Link>
                        </div>
                    </div>
                    <div className="carousel-item practica">
                        <img className="img-carousel img_principal" src={require('../images/practicas_ preprofesionales.png')} alt='practicas' height={'603.2px'} width={'1481px'} />
                        <img className="img-carousel img_responsive" src={require('../images/recortado4.png')} alt='practicas' height={'603.2px'} width={'1481px'} />

                        <div className="practicas_description">
                            <div className="practicas_titulo">

                                <h2 className='titulo_principal'><span className='color_verde'>REALIZA</span> TUS PRÁCTICAS</h2>
                                <h2 className='titulo_principal'>PRE <span className='color_verde'>PROFESIONALES</span> CON</h2>
                                <h2 className='titulo_principal'>GRUPO <span className='color_verde'>AMDDI</span></h2>

                                <h2 className='titulo_2'><span className='color_verde'>REALIZA</span> TUS PRÁCTICAS PRE <span className='color_verde'>PROFESIONALES</span> CON GRUPO <span className='color_verde'>AMDDI</span></h2>
                            </div>
                            <a href="https://pe.indeed.com/cmp/Amddi-S.a.c." target="_blank" rel="noreferrer" className='indeed_btn '>
                                Revisa nuestras convocatorias vigentes
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="img-carousel img_principal" src={require('../images/proyecto_inversión.png')} alt='proyecto' height={'603.2px'} width={'1481px'} />
                        <img className="img-carousel img_responsive" src={require('../images/recortado5.png')} alt='proyecto' height={'603.2px'} width={'1481px'} />

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
                                    
                                </ul>
                                <Link to="/AMDDI/contactanos" type="button" className="btn button-effect contacto_carousel proyecto_contacto">Contáctanos</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item negocio">
                        <img className="img-carousel img_principal" src={require('../images/Plan_negocio.png')} alt='negocio' height={'603.2px'} width={'1481px'} />
                        <img className="img-carousel img_responsive" src={require('../images/recortado6.png')} alt='negocio' height={'603.2px'} width={'1481px'} />
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
                    <div className="carousel-item doctorado">
                        <img className="img-carousel img_principal" src={require('../images/doctoral.png')} alt='negocio' height={'603.2px'} width={'1481px'} />
                        <img className="img-carousel img_responsive" src={require('../images/recortado2.png')} alt='negocio' height={'603.2px'} width={'1481px'} />
                        {/* <div className="carousel-caption d-none d-md-block">
                            <a href="https://api.whatsapp.com/send?phone=51937965909" target="_blank" rel="noreferrer" type="button" className="btn button-effect">Contáctanos por Whatsapp</a>
                            <Link to="/AMDDI/contactanos" type="button" className="btn button-effect">Contáctanos por Correo</Link>
                        </div> */}
                        <div className="doctorado_descripcion">
                            <div className="doctorado_titulo">
                                <div className="doctorado_titulos_list">

                                    <h2 className='titulo_doctorado_1 titulo_principal'>ASESORÍA Y <span>ELABORACIÓN</span></h2>
                                    <h2 className='titulo_doctorado_2 titulo_principal'>DE TESIS <span>DOCTORAL</span></h2>
                                    <h2 className='titulo_doctorado_1 titulo_2'>ASESORÍA Y <span>ELABORACIÓN</span>  DE TESIS <span>DOCTORAL</span></h2>
                                </div>
                            </div>
                            <div className="doctorado_experiencia">
                                <p>¡Contamos con más de 10 años de Experiencia a Nivel Nacional!</p>
                            </div>
                            <div className="doctorado_listas">
                                <a href="https://walink.co/4d2ac9" target="_blank" rel="noreferrer" type="button" className="btn button-effect doctorado_contacto">Más información</a>
                                <Link to="/AMDDI/contactanos" type="button" className="btn button-effect ">Contáctanos</Link>
                            </div>

                        </div>
                        <div className="medalla_container_doctorado">
                            <img className="medalla medalla_doctorado" src={require('../images/medalla.png')} alt='medalla' height={'200px'} width={'200px'} />
                            <img className="somos somos_doctorado somos2" src={require('../images/somos.png')} alt='eslogan' height={'100px'} width={'450px'} />
                        </div>
                    </div>
                    <div className="carousel-item maestria">
                        <img className="img-carousel img_principal" src={require('../images/maestria.png')} alt='negocio' height={'603.2px'} width={'1481px'} />
                        <img className="img-carousel img_responsive" src={require('../images/recortado3.png')} alt='negocio' height={'603.2px'} width={'1481px'} />
                        {/* <div className="carousel-caption d-none d-md-block">
                            <a href="https://api.whatsapp.com/send?phone=51937965909" target="_blank" rel="noreferrer" type="button" className="btn button-effect">Contáctanos por Whatsapp</a>
                            <Link to="/AMDDI/contactanos" type="button" className="btn button-effect">Contáctanos por Correo</Link>
                        </div> */}
                        <div className="maestria_descripcion">
                            <div className="maestria_titulo">
                                <h2 className='titulo_maestria_1'>ASESORÍA Y ELABORACIÓN DE</h2>
                                <h2 className='titulo_maestria_2'>TESIS DE MAESTRÍA</h2>
                            </div>
                            <div className="maestria_listas">
                                <ul className="maestria_list">
                                    <li><span></span>Gestión Pública</li>
                                    <li><span></span>Derecho</li>
                                    <li><span></span>Administración</li>
                                    <div className="contacto_carousel contacto-whatsapp">
                                        <a href="https://walink.co/4d2ac9" target="_blank" rel="noreferrer" type="button" className="btn button-effect contacto_carousel ">Asesor en vivo</a>
                                    </div>
                                </ul>
                                <ul className="maestria_list">
                                    <li><span></span>Contabilidad</li>
                                    <li><span></span>Finanzas</li>
                                    <li><span></span>Salud</li>
                                    <div className="contacto_carousel contacto">
                                        <Link o="/AMDDI/contactanos" type="button" className="btn button-effect contacto_carousel">Contáctanos</Link>
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
                <div className="img_int_container">
                    <img className="img-carousel_int" src={require('../images/somos_internacionales.png')} alt='proyecto' />
                </div>
                <div className="amdi_international_description">
                    <div className="international_container">
                        <h3>En AMDDI somos</h3>
                        <h3> INTERNACIONES</h3>
                        <ul className="paises_list">
                            <li><img className="pais" src={require('../images/paises/peru.png')} alt='Peru' height={'35px'} /></li>
                            <li><img className="pais" src={require('../images/paises/bolivia.png')} alt='Bolivia' height={'35px'} /></li>
                            <li><img className="pais" src={require('../images/paises/colombia.png')} alt='Colombia' height={'35px'} /></li>
                            <li><img className="pais" src={require('../images/paises/costica.png')} alt='CostaRica' height={'35px'} /></li>
                            <li><img className="pais" src={require('../images/paises/cuba.png')} alt='Cuba' height={'35px'} /></li>
                            <li><img className="pais" src={require('../images/paises/ecuador.png')} alt='Ecuador' height={'35px'} /></li>
                            <li><img className="pais" src={require('../images/paises/venezuela.png')} alt='Venezuela' height={'35px'} /></li>
                            <li><img className="pais" src={require('../images/paises/mexico.png')} alt='Mexico' height={'35px'} /></li>
                        </ul>
                        <div className="international_desc">
                            <p>
                                En AMDDI, nos especializamos en soluciones integrales para investigación y asesoría. Guiamos y apoyamos proyectos de investigación para impulsar el crecimiento académico y profesional. Nuestro equipo multidisciplinario de expertos en metodología y estadísticas está comprometido con tu éxito. Operamos en Perú, Bolivia, Colombia, Costa Rica, Cuba, Ecuador, Venezuela y México.
                            </p>

                            <Link to="/AMDDI/nosotros" type="button" className="btn button-effect contacto_carousel">Conócenos</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="seccion_servicios_p">
                <h2>NUESTROS SERVICIOS</h2>
                <div className="servicios_list_p">
                    <HashLink className='servicio_p' to="/AMDDI/servicios#redacciontesispregrado" smooth={false} >
                        <div className="servicio_p">
                            <img className="img_servicio_p" src={require('../images/Servicio_carousel/ciclo.png')} alt='medalla' height={'300px'} />
                            <div className="servicio_titulo_p">
                                <h3>Redacción de Tesis Pregrado</h3>
                            </div>
                        </div>
                    </HashLink>
                    <HashLink className='servicio_p' to="/AMDDI/servicios#levantamientoobservacionespregrado" smooth={false} >
                        <div className="servicio_p">
                            <img className="img_servicio_p" src={require('../images/Servicio_carousel/observaciones.png')} alt='medalla' height={'300px'} />
                            <div className="servicio_titulo_p">
                                <h3>Levantamiento de Observaciones Pregrado</h3>
                            </div>
                        </div>
                    </HashLink>
                    <HashLink className='servicio_p' to="/AMDDI/servicios#trabajodeciclo" smooth={false} >
                        <div className="servicio_p">
                            <img className="img_servicio_p" src={require('../images/Servicio_carousel/redaccion.png')} alt='medalla' height={'300px'} />
                            <div className="servicio_titulo_p">
                                <h3>Trabajos de ciclo</h3>
                            </div>
                        </div>
                    </HashLink>
                    <HashLink className='servicio_p' to="/AMDDI/servicios#informepracticas" smooth={false} >
                        <div className="servicio_p">
                            <img className="img_servicio_p" src={require('../images/Servicio_carousel/informe.png')} alt='medalla' height={'300px'} />
                            <div className="servicio_titulo_p">
                                <h3>Informe de prácticas</h3>
                            </div>
                        </div>
                    </HashLink>
                </div>
                <Link to="/AMDDI/servicios" type="button" className="btn button-effect contacto_carousel">Ver más servicios</Link>
            </div>
            <div className="seccion_contador" ref={seccionRef}>
                <div className="fila">
                    <div className="col" >
                        <img className="img_contador" src={require('../images/Contador/titulados.png')} alt='medalla' height={'220px'} />
                        <div className="d-flex">
                            <Contador inicio={0} final={1000} duracion={5} />
                            <h3 className="contador-margin">+</h3>
                        </div>
                        <p>Titulados</p>
                    </div>
                    <div className="col" >
                        <img className="img_contador" src={require('../images/Contador/clientes.png')} alt='medalla' height={'220px'} />
                        <div className="d-flex">
                            <Contador inicio={0} final={1000} duracion={5} />
                            <h3 className="contador-margin">+</h3>
                        </div>
                        <p>Clientes Satisfechos</p>
                    </div>
                    <div className="col" >
                        <img className="img_contador" src={require('../images/Contador/peru.png')} alt='medalla' height={'220px'} />
                        <Contador inicio={0} final={24} duracion={100} />
                        <p>Departamentos de Perú</p>
                    </div>
                    <div className="col" >
                        <img className="img_contador" src={require('../images/Contador/carreras.png')} alt='medalla' height={'220px'} />
                        <div className="d-flex">
                            <Contador inicio={0} final={40} duracion={100} />
                            <h3 className="contador-margin">+</h3>
                        </div>
                        <p>Carreras</p>
                    </div>
                </div>
            </div>

            <div className="contenedor-efecto ">
                <div ref={efectoRef} className="efecto-scroll">
                    <div className="contenido-texto">
                        <h2>#¡SEGUIMOS ADELANTE!</h2>
                        <p>Asesoría y redacción de tesis de Pregrado, Posgrado, Doctorado y MBA.</p>
                        <div className="contacto_carousel contacto informacion_btn">
                            <Link to="/AMDDI/contactanos" type="button" className="btn button-effect contacto_carousel informacion_btn">Más información</Link>
                        </div>
                    </div>

                    <img ref={imagenRef} className="img-scroll" src={require('../images/adelante_completo.png')} alt='asesoria' />
                </div>
            </div>
        </section>

    )
}