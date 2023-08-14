import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../styles/Nosotros.css';

export default function Nosotros() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <section className="amddi_container">
            <div id="carouselExample" className="carousel carousel-dark slide carousel_nosotros" data-bs-ride="carousel" data-bs-interval="5000">
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
                        <img className="img-carousel" src={require('../images/asesoria.png')} alt='asesoria' height={'603.2px'} width={'1481px'} />

                        <div className="carousel-caption d-none d-md-block botones_contacto_asesoria">
                            <a href="https://walink.co/4d2ac9" target="_blank" rel="noreferrer" type="button" className="btn button-effect">Más información</a>
                            <Link to="/AMDDI/contactanos" type="button" className="btn button-effect">Contáctanos</Link>
                        </div>

                        <div className="asesoria_descripcion">
                            <div className="asesoria_titulo">
                                <h2>TESIS PARA GENTE</h2>
                                <h2><span>QUE TRABAJA</span></h2>
                                <div className="asesoria_subtitulo">
                                    <h3>PREGRADO <span>-</span> MAESTRÍA <span>-</span> DOCTORADO <span>-</span> MBA</h3>
                                </div>
                            </div>
                            <ul className="asesoria_lista">
                                <li><span></span>Asesoría personalizada</li>
                                <li><span></span>Compromiso con nuestro trabajo</li>
                                <li><span></span>Especialistas de todas las carreras profesionales</li>

                                <Link to="/AMDDI/contactanos" type="button" className="btn button-effect btn_asesoria">Contáctanos</Link>

                            </ul>
                            <div className="medalla_container">
                                <img className="medalla" src={require('../images/medalla.png')} alt='medalla' height={'200px'} width={'200px'} />
                                <img className="somos" src={require('../images/somos.png')} alt='eslogan' height={'100px'} width={'450px'} />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item practica">
                        <img className="img-carousel" src={require('../images/practicas_ preprofesionales.png')} alt='practicas' height={'603.2px'} width={'1481px'} />

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
                    <div className="carousel-item doctorado">
                        <img className="img-carousel " src={require('../images/doctoral.png')} alt='negocio' height={'603.2px'} width={'1481px'} />
                        {/* <div className="carousel-caption d-none d-md-block">
                            <a href="https://api.whatsapp.com/send?phone=51937965909" target="_blank" rel="noreferrer" type="button" className="btn button-effect">Contáctanos por Whatsapp</a>
                            <Link to="/AMDDI/contactanos" type="button" className="btn button-effect">Contáctanos por Correo</Link>
                        </div> */}
                        <div className="doctorado_descripcion">
                            <div className="doctorado_titulo">
                                <div className="doctorado_titulos_list">

                                    <h2 className='titulo_doctorado_1'>ASESORÍA Y <span>ELABORACIÓN</span></h2>
                                    <h2 className='titulo_doctorado_2'>DE TESIS <span>DOCTORAL</span></h2>
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
                        <img className="img-carousel " src={require('../images/maestria.png')} alt='negocio' height={'603.2px'} width={'1481px'} />
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
            <div className="quienessomos">
                <div className="quienessomos-container">
                    <div className="quienessomos-card">
                        <img className="img-logo2" src={require('../images/Nosotros/nosotros.png')} alt='quienessomos' />
                        <div className="quienessomos_description">
                            <h1>AMDDI</h1><h4> es una empresa líder en soluciones académicas y profesionales. Nuestro <strong>equipo de expertos altamente capacitados</strong> abarca diversas áreas para ofrecer servicios de redacción de tesis, artículos científicos, ensayos, y más. <strong>Brindamos resultados de calidad y confianza</strong> para impulsar el éxito de nuestros clientes en sus objetivos académicos y laborales.</h4>
                        </div>
                    </div>
                    <div className="quienessomos-card">
                        <img className="img-logo2" src={require('../images/Nosotros/vision.png')} alt='quienessomos' />
                        <div className="quienessomos_description">

                            <h4><strong>Convertirnos en la mejor opción</strong> para aquellos que buscan asesoría en investigación y desarrollo de tesis, siendo reconocidos en la región y el Perú por <strong>nuestra experiencia, conocimiento y compromiso</strong> con nuestros clientes.</h4>
                        </div>
                    </div>
                    <div className="quienessomos-card">
                        <img className="img-logo2" src={require('../images/Nosotros/mision.png')} alt='quienessomos' />
                        <div className="quienessomos_description">

                            <h4>Ser una <strong>marca líder en el campo de la investigación y el desarrollo de tesis</strong>, ofreciendo servicios de alta calidad y soluciones innovadoras para satisfacer las necesidades de nuestros clientes. <strong>Nos comprometemos a trabajar con integridad, ética y profesionalismo</strong> para garantizar la excelencia en cada proyecto que realizamos.</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="valores-container" >
                    <h2>NUESTROS VALORES</h2>
                <div className="valores">
                        <div className="valores_primeros">
                            <div className="valor_card">
                            <img className="img-valor" src={require('../images/Nosotros/v1.png')} alt='valor_1'/>
                            <div className="valor_description">
                                <h3>EXCELENCIA ACADÉMICA</h3>
                                <p>Comprometidos con la calidad y precisión en cada aspecto de nuestra asesoría para garantizar resultados sobresalientes en proyectos de investigación.</p>
                            </div>
                            </div>
                            <div className="valor_card">
                            <img className="img-valor" src={require('../images/Nosotros/v2.png')} alt='valor_2'/>
                            <div className="valor_description">
                                <h3>Integridad</h3>
                                <p>Actuamos con honestidad y ética, promoviendo la originalidad y autenticidad en todos los trabajos académicos.</p>
                            </div>
                            </div>
                            <div className="valor_card">
                            <img className="img-valor" src={require('../images/Nosotros/v3.png')} alt='valor_3'/>
                            <div className="valor_description">
                                <h3>Compromiso con el cliente</h3>
                                <p>Priorizamos las necesidades de nuestros clientes y nos esforzamos por brindar un servicio personalizado y atento para alcanzar su satisfacción y éxito académico.</p>
                            </div>
                            </div>
                            <div className="valor_card">
                            <img className="img-valor" src={require('../images/Nosotros/v4.png')} alt='valor_4'/>
                            <div className="valor_description">
                                <h3>Colaboración</h3>
                                <p>Fomentamos un ambiente de trabajo cooperativo, donde el trabajo en equipo y la comunicación efectiva son fundamentales para lograr los mejores resultados.</p>
                            </div>
                            </div>
                            <div className="valor_card">
                            <img className="img-valor" src={require('../images/Nosotros/v5.png')} alt='valor_5'/>
                            <div className="valor_description">
                                <h3>Innovación</h3>
                                <p>Buscamos constantemente nuevas formas de mejorar nuestros servicios y adoptar tecnologías y metodologías avanzadas en el ámbito de la asesoría de tesis.</p>
                            </div>
                            </div>
                        </div>

                        <div className="valores_primeros">
                            <div className="valor_card">
                            <img className="img-valor" src={require('../images/Nosotros/v6.png')} alt='valor_6'/>
                            <div className="valor_description">
                                <h3>Responsabilidad social</h3>
                                <p>Reconocemos nuestra responsabilidad hacia la sociedad y nos esforzamos por promover la investigación que tenga un impacto positivo en el conocimiento y el bienestar de la comunidad.</p>
                            </div>
                            </div>
                            <div className="valor_card">
                            <img className="img-valor" src={require('../images/Nosotros/v7.png')} alt='valor_7'/>
                            <div className="valor_description">
                                <h3>Confidencialidad</h3>
                                <p>Respetamos la privacidad y confidencialidad de nuestros clientes, garantizando la protección de sus datos e información personal.</p>
                            </div>
                            </div>
                            <div className="valor_card">
                            <img className="img-valor" src={require('../images/Nosotros/v8.png')} alt='valor_8'/>
                            <div className="valor_description">
                                <h3>Aprendizaje continuo</h3>
                                <p>Promovemos un ambiente de aprendizaje y desarrollo profesional para nuestro equipo, con el fin de mantenernos actualizados en las últimas tendencias y avances académicos.</p>
                            </div>
                            </div>
                            <div className="valor_card">
                            <img className="img-valor" src={require('../images/Nosotros/v9.png')} alt='valor_9'/>
                            <div className="valor_description">
                                <h3>Diversidad e inclusión</h3>
                                <p>Valoramos la diversidad de perspectivas y experiencias, y nos esforzamos por crear un ambiente inclusivo donde todos se sientan respetados y valorados.</p>
                            </div>
                            </div>
                            <div className="valor_card">
                            <img className="img-valor" src={require('../images/Nosotros/v10.png')} alt='valor_10'/>
                            <div className="valor_description">
                                <h3>Empoderamiento académico</h3>
                                <p>Nos dedicamos a empoderar a nuestros clientes con conocimientos y habilidades que les permitan ser investigadores autónomos y competentes. Buscamos fortalecer sus capacidades intelectuales y técnicas para que puedan abordar futuros desafíos académicos y profesionales con confianza y éxito.</p>
                            </div>
                            </div>
                        </div>
                </div>
            </div> 


        </section>
    );
}