import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import '../styles/Nosotros.css';

export default function Nosotros() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <section className="amddi_container">
            <div className="quienessomos">
                <div className="quienessomos-container">
                    <div className="quienessomos-descripcion">
                        <div className="img-titulo">
                            <img className="img-logo-vimi" src={require('../images/Logo_soloblanco.png')} alt='AMDDI' height={'40px'} />
                            <h2>¿Quiénes somos?</h2>
                        </div>
                        <h1>AMDDI</h1><h4> es una empresa líder en soluciones académicas y profesionales. Nuestro equipo de expertos altamente capacitados abarca diversas áreas para ofrecer servicios de redacción de tesis, artículos científicos, ensayos, y más. Brindamos resultados de calidad y confianza para impulsar el éxito de nuestros clientes en sus objetivos académicos y laborales.</h4>
                    </div>
                    <div className="quienessomos-img">
                        <img className="img-logo" src={require('../images/Nosotros/quienes.jpeg')} alt='AMDDI' height={'400px'} width={'400px'} />
                    </div>
                </div>
            </div>
            <div className="vimi-container">
                <div className="vimi vision">
                    <div className="img-titulo">
                        <img className="img-logo-vimi" src={require('../images/Logo_soloblanco.png')} alt='AMDDI' height={'40px'} />
                        <h2 className="titulo-vimi">Visión</h2>
                    </div>
                    <h4>Convertirnos en la mejor opción para aquellos que buscan asesoría en investigación y desarrollo de tesis, siendo reconocidos en la región y el Perú por nuestra experiencia, conocimiento y compromiso con nuestros clientes.</h4>
                </div>
                <div className="vimi mision">
                    <div className="img-titulo">
                        <img className="img-logo-vimi" src={require('../images/Logo_soloblanco.png')} alt='AMDDI' height={'40px'} />
                        <h2 className="titulo-vimi">Misión</h2>
                    </div>
                    <h4>Ser una marca líder en el campo de la investigación y el desarrollo de tesis, ofreciendo servicios de alta calidad y soluciones innovadoras para satisfacer las necesidades de nuestros clientes. Nos comprometemos a trabajar con integridad, ética y profesionalismo para garantizar la excelencia en cada proyecto que realizamos.</h4>
                </div>
            </div>
            <div className="valores-container" >
                <div className="valores">
                    <h2>Nuestros Valores</h2>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    1. Excelencia académica
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Comprometidos con la calidad y precisión en cada aspecto de nuestra asesoría para garantizar resultados sobresalientes en proyectos de investigación.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    2. Integridad:
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Actuamos con honestidad y ética, promoviendo la originalidad y autenticidad en todos los trabajos académicos.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    3. Compromiso con el cliente:
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Priorizamos las necesidades de nuestros clientes y nos esforzamos por brindar un servicio personalizado y atento para alcanzar su satisfacción y éxito académico.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    4. Colaboración:
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Fomentamos un ambiente de trabajo cooperativo, donde el trabajo en equipo y la comunicación efectiva son fundamentales para lograr los mejores resultados.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    5. Innovación:
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Buscamos constantemente nuevas formas de mejorar nuestros servicios y adoptar tecnologías y metodologías avanzadas en el ámbito de la asesoría de tesis.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    6. Responsabilidad social:
                                </button>
                            </h2>
                            <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Reconocemos nuestra responsabilidad hacia la sociedad y nos esforzamos por promover la investigación que tenga un impacto positivo en el conocimiento y el bienestar de la comunidad.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    7. Confidencialidad:
                                </button>
                            </h2>
                            <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Respetamos la privacidad y confidencialidad de nuestros clientes, garantizando la protección de sus datos e información personal.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                    8. Aprendizaje continuo:
                                </button>
                            </h2>
                            <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Promovemos un ambiente de aprendizaje y desarrollo profesional para nuestro equipo, con el fin de mantenernos actualizados en las últimas tendencias y avances académicos.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                    9. Diversidad e inclusión:
                                </button>
                            </h2>
                            <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Valoramos la diversidad de perspectivas y experiencias, y nos esforzamos por crear un ambiente inclusivo donde todos se sientan respetados y valorados.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                    10.	Empoderamiento académico:
                                </button>
                            </h2>
                            <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Nos dedicamos a empoderar a nuestros clientes con conocimientos y habilidades que les permitan ser investigadores autónomos y competentes. Buscamos fortalecer sus capacidades intelectuales y técnicas para que puedan abordar futuros desafíos académicos y profesionales con confianza y éxito.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}