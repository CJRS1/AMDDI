import React, { useEffect } from "react";

// import SwiperComponent from "./Slider-Servicio";

import { useLocation } from 'react-router-dom';
import '../styles/Servicios.css'
import ArticulodeRevisiondeLiteratura from '../components/pdf/ArticulodeRevisiondeLiteratura.pdf';
import ArticulosCientificos from '../components/pdf/ArticulosCientificos.pdf';
import ArticulodeRevisionSistematica from '../components/pdf/ArticulodeRevisionSistematica.pdf';
import Diapositivas from '../components/pdf/Diapositivas.pdf';
import ElaboraciondeTesina from '../components/pdf/ElaboraciondeTesina.pdf';
import LevantamientodeObservaciones from '../components/pdf/LevantamientodeObservaciones.pdf';
import Monografia from '../components/pdf/Monografia.pdf';
import ParafraseoyCorrecciondeEstilos from '../components/pdf/ParafraseoyCorrecciondeEstilos.pdf';
import SuficienciaProfesional from '../components/pdf/SuficienciaProfesional.pdf';
import PlanesdeNegocio from '../components/pdf/PlanesdeNegocio.pdf';
// import Diapositivas from  '../components/pdf/Diapositivas.pdf';


export default function Servicios() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <section className="servicios_container">
            <div className="portada_servicios">
                <div className="portada_container">
                    <div className="portada_titulo">
                        <h3>
                            NUESTROS
                        </h3>
                        <h3>
                            <span>
                                SERVICIOS
                            </span>
                        </h3>
                    </div>
                    <div className="confiables_container">
                        <h4>
                            <span>

                                100% confiables
                            </span>
                        </h4>
                    </div>
                </div>
            </div>
            <div id="carreras" className="carreras_container">
                <div className="servicios_caracteristicas">
                    <div className="servicios_titulo">
                        <h2 className="titulo2">Brindamos asesoría especializada en:</h2>
                    </div>
                    <div className="servicios_carreras">
                        <div className="carrera_grupo">
                            <div className="biologicas zoom">
                                <h3><strong>Ciencias Biológicas y Agrónomas</strong></h3>
                                <ul>
                                    <li>Agronomía</li>
                                    <li>Veterinaria</li>
                                    <li>Zootecnia</li>
                                    <li>Biología</li>
                                    <li>Microbiología y Parasitología</li>
                                    <li>Farmacia y Bioquímica</li>
                                </ul>
                            </div>
                            <div className="basicas zoom">
                                <h3><strong>Ciencias Básicas</strong></h3>
                                <ul>
                                    <li>Matemática</li>
                                    <li>Estadística</li>
                                    <li>Química</li>
                                </ul> </div>
                        </div>

                        <div className="ingenieria zoom">
                            <h3><strong>Ingenierías y Arquitectura</strong></h3>
                            <ul>
                                <li>Ing. Industrial</li>
                                <li>Ing. Mecánica</li>
                                <li>Ing. Electrónica</li>
                                <li>Ing. Eléctrica</li>
                                <li>Ing. Mecatrónica</li>
                                <li>Ing. de Sistemas</li>
                                <li>Ing. Metalúrgica</li>
                                <li>Ing. Química</li>
                                <li>Ing. de Alimentos</li>
                                <li>Ing. Agroindustrial</li>
                                <li>Ing. Agrícola</li>
                                <li>Ing. Ambiental</li>
                                <li>Ing. Geológica</li>
                                <li>Ing. de Minas</li>
                                <li>Ing. Geofísica</li>
                                <li>Ing. Civil</li>
                                <li>Arquitectura</li>
                                <li>Ing. Económica</li>
                                <li>Ing. Empresarial</li>
                                <li>Ing. de Seguridad</li>
                            </ul>
                        </div>
                        <div className="sociales zoom">
                            <h3><strong>Ciencias Sociales</strong></h3>
                            <ul>
                                <li>Educación Inicial</li>
                                <li>Educación Primaria</li>
                                <li>Educación Secundaria</li>
                                <li>Educación física</li>
                                <li>Lengua y Literatura</li>
                                <li>Inglés</li>
                                <li>Traducción e interpretación</li>
                                <li>Antropología</li>
                                <li>Arqueología</li>
                                <li>Sociología</li>
                                <li>Trabajo Social</li>
                                <li>Derecho</li>
                                <li>Ciencias Políticas y Gobernabilidad</li>
                                <li>Ciencias de la comunicación</li>
                                <li>Marketing</li>
                            </ul>
                        </div>
                        <div className="carrera_grupo">
                            <div className="empresariales zoom"> <h3><strong>Ciencias Empresariales</strong></h3>
                                <ul>
                                    <li>Administración</li>
                                    <li>Contabilidad</li>
                                    <li>Economía</li>
                                    <li>Neg. Internacionales</li>
                                    <li>Turismo</li>
                                    <li>MBA</li>
                                    <li>Gestión y Alta dirección</li>
                                </ul>
                            </div>
                            <div className="salud zoom">
                                <h3><strong>Ciencias de la Salud</strong></h3>
                                <ul>
                                    <li>Medicina</li>
                                    <li>Enfermería</li>
                                    <li>Obstetricia</li>
                                    <li>Estomatología</li>
                                    <li>Nutrición</li>
                                    <li>Tecnología Médica</li>
                                    <li>Psicología</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="carreras_container_1 ">
                <SwiperComponent></SwiperComponent>
            </div> */}

            <div className="servicios_list">
                <div id="redacciontesispregrado" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <div className="card_title">
                                <h2>Redacción de Tesis de Pregrado</h2>
                            </div>
                            <div className="servicio_description">
                                <p>
                                    Nuestro servicio brinda apoyo integral en la creación de tesis de grado para estudiantes universitarios. Te acompañamos desde la elección del tema hasta la elaboración del informe final, garantizando la calidad y originalidad del trabajo. Si necesitas un impulso para culminar tu carrera con éxito, ¡contáctanos y obtén más información!
                                </p>
                            </div>
                            {/* <a href={Tesispregrado} target="_blank" rel="noopener noreferrer" download="Tesispregrado.pdf"></a> */}
                            <button className="btn boton_servicios"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg> Descarga el Browsure</button>

                        </div>
                    </div>
                </div>

                <div id="redacciontesispostgrado" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <div className="card_title">
                                <h2>Redacción de Tesis de Postgrado</h2>
                            </div>
                            <div className="servicio_description">
                                <p>
                                    Como expertos en asesoramiento para tesis de posgrado y maestría, te brindamos el respaldo necesario para llevar a cabo una investigación rigurosa y relevante. Nos enfocamos en la estructura, metodología y análisis para garantizar un trabajo sobresaliente. ¡Consigue tu título con una tesis de alto nivel académico! Haz clic a continuación para obtener más detalles.
                                </p>
                            </div>
                            {/* <a href={Tesispregrado} target="_blank" rel="noopener noreferrer" download="Tesispregrado.pdf"></a> */}
                            <button className="btn boton_servicios"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg> Descarga el Browsure</button>
                        </div>
                    </div>
                </div>
                <div id="redacciontesisdoctorado" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <div className="card_title">
                                <h2>Redacción de Tesis de Doctorado</h2>
                            </div>
                            <div className="servicio_description">
                                <p>
                                    Especializados en tesis de doctorado, brindamos asesoría personalizada para una investigación sobresaliente y la obtención del título. Desde la formulación del problema hasta el análisis de resultados, garantizamos una tesis sólida y bien fundamentada. Mejora tu calidad académica con nuestra guía. Descarga información sobre redacción de tesis de doctorado y avanza en tu investigación.
                                </p>
                            </div>
                            {/* <a href={Tesispregrado} target="_blank" rel="noopener noreferrer" download="Tesispregrado.pdf"></a> */}
                            <button className="btn boton_servicios"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg> Descarga el Browsure</button>
                        </div>
                    </div>
                </div>
                <div id="levantamientoobservacionespregrado" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <div className="card_title">
                                <h2>Levantamiento de Observaciones Pregrado</h2>
                            </div>
                            <div className="servicio_description">
                                <p>
                                    ¿Has recibido observaciones en tu tesis de pregrado? No te preocupes, estamos aquí para ayudarte a superarlas y corregir tu trabajo. Nuestro equipo de expertos revisará minuciosamente tus documentos, proporcionándote valiosas sugerencias para mejorar tu investigación. ¡Avanza hacia tu graduación sin complicaciones! Obtén más información ahora.
                                </p>
                            </div>
                            <a href={LevantamientodeObservaciones} target="_blank" rel="noopener noreferrer" download="LevantamientodeObservaciones.pdf">
                                <button className="btn boton_servicios"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg> Descarga el Browsure</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="levantamientoobservacionesmaestria" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <div className="card_title">
                                <h2>Levantamiento de Observaciones Maestría</h2>
                            </div>
                            <div className="servicio_description">
                                <p>
                                    Si estás enfrentando observaciones en tu tesis de maestría, estamos preparados para asistirte en su resolución. Nuestro equipo altamente calificado te brindará la guía necesaria para abordar las observaciones y lograr un trabajo de excelencia académica. ¡Supera este último obstáculo en tu camino hacia el título de posgrado! Haz clic a continuación y descubre cómo podemos ayudarte.
                                </p>
                            </div>
                            <a href={LevantamientodeObservaciones} target="_blank" rel="noopener noreferrer" download="LevantamientodeObservaciones.pdf">

                                <button className="btn boton_servicios "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg> Descarga el Browsure</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="parafraseo" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <div className="card_title">
                                <h2>Parafraseo</h2>
                            </div>
                            <div className="servicio_description">
                                <p>
                                    Evita el plagio y mejora la originalidad de tus textos con nuestro servicio de reescritura. Nuestros especialistas en parafraseo transformarán tus documentos manteniendo la coherencia y el significado original. Obtén textos únicos y libres de plagio con nuestro apoyo. ¿Deseas más información? Haz clic ahora mismo.
                                </p>
                            </div>
                            <a href={ParafraseoyCorrecciondeEstilos} target="_blank" rel="noopener noreferrer" download="ParafraseoyCorrecciondeEstilos.pdf">

                                <button className="btn boton_servicios "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg> Descarga el Browsure</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="trabajosuficienciaprofesional" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <div className="card_title">
                                <h2>Trabajo de Suficiencia Profesional</h2>
                            </div>
                            <div className="servicio_description">
                                <p>
                                    Si te encuentras en el último tramo para obtener tu título profesional, nuestro equipo de expertos te brindará orientación en la elaboración de tu trabajo de suficiencia profesional. Garantizamos la calidad y pertinencia de tu trabajo para que puedas alcanzar tus metas académicas. ¡Haz clic a continuación y obtén más detalles!
                                </p>
                            </div>
                            <a href={SuficienciaProfesional} target="_blank" rel="noopener noreferrer" download="SuficienciaProfesional.pdf">

                                <button className="btn boton_servicios "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg> Descarga el Browsure</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="articulocientifico" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <div className="card_title">
                                <h2>Artículo Científico</h2>
                            </div>
                            <div className="servicio_description">
                                <p>
                                    ¿Necesitas redactar un artículo académico o científico? Nuestro servicio te ofrece el apoyo necesario para crear trabajos de alta calidad que cumplan con los estándares exigidos por la comunidad científica. Confía en nuestro equipo de expertos para destacar en el ámbito académico. Obtén más información haciendo clic a continuación.
                                </p>
                            </div>
                            <a href={ArticulosCientificos} target="_blank" rel="noopener noreferrer" download="ArticulosCientificos.pdf">

                                <button className="btn boton_servicios "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg> Descarga el Browsure</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="articulorevisionsistematica" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <div className="card_title">
                                <h2>Artículo de Revisión Sistemática</h2>
                            </div>
                            <div className="servicio_description">
                                <p>
                                    Si estás elaborando una revisión sistemática, nuestro equipo de especialistas te asesorará en cada etapa del proceso. Desde la formulación de la pregunta de investigación hasta la síntesis de los resultados, te guiaremos para realizar una revisión exhaustiva y rigurosa. ¡Asegura la calidad de tu artículo! Obtén más información ahora.
                                </p>
                            </div>
                            <a href={ArticulodeRevisionSistematica} target="_blank" rel="noopener noreferrer" download="ArticulodeRevisionSistematica.pdf">

                                <button className="btn boton_servicios "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg> Descarga el Browsure</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="articulorevisionliteratura" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <div className="card_title">
                                <h2>Artículo de Revisión de Literatura</h2>
                            </div>
                            <div className="servicio_description">
                                <p>
                                    ¿Necesitas crear un artículo que revise la literatura existente? Te ofrecemos ayuda especializada para desarrollar un trabajo coherente y relevante que contribuya al conocimiento en tu campo de estudio. Nuestro equipo te guiará en la búsqueda y análisis de fuentes académicas. ¡Haz clic a continuación para obtener más detalles!
                                </p>
                            </div>
                            <a href={ArticulodeRevisiondeLiteratura} target="_blank" rel="noopener noreferrer" download="ArticulodeRevisiondeLiteratura.pdf">

                                <button className="btn boton_servicios "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg> Descarga el Browsure</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div id="trabajodeciclo" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <h2>Trabajos de Ciclo</h2>
                            <div className="servicio_description">
                                <p>
                                    Si necesitas asistencia en trabajos y proyectos durante tus ciclos académicos, nuestro equipo estará encantado de ayudarte. Brindamos apoyo en diversas áreas de estudio para garantizar que cumplas con tus requisitos académicos. ¡Alcanza el éxito en tus trabajos escolares con nuestra ayuda! Obtén más información haciendo clic a continuación.
                                </p>
                            </div>
                            <button className="btn boton_servicios "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg> Descarga el Browsure</button>
                        </div>
                    </div>
                </div> */}

                <div id="monografias" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <div className="card_title">
                                <h2>Monografía</h2>
                            </div>
                            <div className="servicio_description">
                                <p>
                                    ¿Necesitas elaborar una monografía o un trabajo de investigación? Nuestro servicio te ofrece orientación en todas las etapas del proceso, desde la delimitación del tema hasta la presentación final. Contamos con expertos en diversas áreas académicas listos para apoyarte. ¡Obtén más detalles haciendo clic ahora!
                                </p>
                            </div>
                            <a href={Monografia} target="_blank" rel="noopener noreferrer" download="Monografia.pdf">

                                <button className="btn boton_servicios "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg> Descarga el Browsure</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div id="ensayos" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <h2>Ensayos</h2>
                            <div className="servicio_description">
                                <p>
                                    ¿Tienes que redactar ensayos académicos? Nuestro equipo te brinda apoyo para desarrollar ensayos coherentes y bien estructurados que reflejen tus ideas de manera efectiva. Potencia tus habilidades de redacción y argumentación con nuestra asistencia. ¿Deseas más información? Haz clic ahora mismo.
                                </p>
                            </div>
                            <button className="btn boton_servicios "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg> Descarga el Browsure</button>
                        </div>
                    </div>
                </div> */}
                <div id="plannegocio" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <div className="card_title">
                                <h2>Planes de Negocio</h2>
                            </div>
                            <div className="servicio_description">
                                <p>
                                    Si estás emprendiendo un proyecto empresarial, nuestro servicio de asesoramiento te ayudará en la elaboración de planes de negocio sólidos y bien fundamentados. Te ofrecemos un enfoque integral que te permitirá presentar tu idea de manera atractiva y convincente. ¡Impulsa tu emprendimiento hacia el éxito! Obtén más información haciendo clic a continuación.
                                </p>
                            </div>
                            <a href={PlanesdeNegocio} target="_blank" rel="noopener noreferrer" download="PlanesdeNegocio.pdf">

                                <button className="btn boton_servicios "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg> Descarga el Browsure</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="informepracticas" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <div className="card_title">
                                <h2>Informe de Prácticas</h2>
                            </div>
                            <div className="servicio_description">
                                <p>
                                    ¿Necesitas crear un informe de prácticas profesionales? Te ofrecemos asistencia en la creación de un documento bien estructurado y relevante que refleje tus experiencias y aprendizajes durante tu práctica profesional. ¡Destaca con un informe profesional y bien elaborado! Obtén más información ahora.
                                </p>
                            </div>
                            {/* <a href={Tesispregrado} target="_blank" rel="noopener noreferrer" download="Tesispregrado.pdf"></a> */}
                            <button className="btn boton_servicios "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg> Descarga el Browsure</button>
                        </div>
                    </div>
                </div>
                <div id="tesinas" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <div className="card_title">
                                <h2>Tesinas</h2>
                            </div>
                            <div className="servicio_description">
                                <p>
                                    Si estás preparando una tesina para optar por un título académico, nuestro equipo te brindará orientación en su redacción y estructura. Nos enfocamos en garantizar la calidad y originalidad de tu trabajo, así como en cumplir con los requisitos académicos. ¡Avanza hacia la obtención de tu título con éxito! Haz clic a continuación para obtener más detalles.
                                </p>
                            </div>
                            <a href={ElaboraciondeTesina} target="_blank" rel="noopener noreferrer" download="ElaboraciondeTesina.pdf">

                                <button className="btn boton_servicios "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg> Descarga el Browsure</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div id="elaboracioncv" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <h2>Elaboración de CV</h2>
                            <div className="servicio_description">
                                <p>
                                    ¿Necesitas un currículum vitae que destaque tus habilidades y experiencia de manera efectiva? Nuestro servicio de creación y mejora de CV te ayudará a presentarte como el candidato ideal para oportunidades laborales o académicas. Potencia tu perfil profesional con nuestro apoyo. ¿Deseas más información? Haz clic ahora mismo.
                                </p>
                            </div>
                            <button className="btn boton_servicios "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg> Descarga el Browsure</button>
                        </div>
                    </div>
                </div> */}
                <div id="dispositivas" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <div className="card_title">
                                <h2>Diapositivas</h2>
                            </div>
                            <div className="servicio_description">
                                <p>
                                    Si buscas asistencia para elaborar presentaciones y diapositivas efectivas, estás en el lugar indicado. Nuestro equipo te brinda orientación en el diseño y contenido para crear presentaciones impactantes y profesionales. ¡Destaca en tus exposiciones con diapositivas visualmente atractivas! Obtén más información haciendo clic a continuación.
                                </p>
                            </div>
                            <a href={Diapositivas} target="_blank" rel="noopener noreferrer" download="Diapositivas.pdf">

                                <button className="btn boton_servicios "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg> Descarga el Browsure</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="cursos" className="servicio_container">
                    <div className="servicios_card">
                        <div className="card_servicio">
                            <div className="card_title">
                                <h2>Curso Online</h2>
                            </div>
                            <div className="servicio_description">
                                <p>
                                    Próximamente, ofreceremos una selección de cursos en línea diseñados para complementar tu formación académica. Nuestros cursos estarán dirigidos por expertos en diversas áreas
                                </p>
                            </div>
                            {/* <a href={Tesispregrado} target="_blank" rel="noopener noreferrer" download="Tesispregrado.pdf"></a> */}
                            <button className="btn boton_servicios "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg> Descarga el Browsure</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
