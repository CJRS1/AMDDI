import React from 'react'
import '../styles/Footer.css'
import Tiktok from '..//images/LogoRedesSociales/tiktok.svg'
import Facebook from '..//images/LogoRedesSociales/facebook-f.svg'
import Instagram from '..//images/LogoRedesSociales/instagram.svg'
import Linkedin from '..//images/LogoRedesSociales/linkedin-in.svg'



export default function Footer() {
    return (
        <footer className='footer_container'>
            <div className="footer-description">
                <div className="footer-description-amddi">
                    <h4><strong>Nosotros</strong></h4>
                    <div className="footer-content">
                        <h5>
                            En <strong>AMDDI</strong> somos una empresa líder en soluciones académicas y profesionales. Nuestro equipo de expertos altamente capacitados abarca diversas áreas para ofrecer servicios de redacción de tesis, artículos científicos, ensayos, y más. Brindamos resultados de calidad y confianza para impulsar el éxito de nuestros clientes en sus objetivos académicos y laborales.
                        </h5>
                    </div>
                    <div className="footer-description-llamanos">
                        <h4><strong>Llámanos</strong></h4>
                        <div className="card-ictel">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                className="bi bi-telephone" viewBox="0 0 16 16">
                                <path
                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                            <div className="container-ictel">
                                <h5>+51 937 965 909</h5>
                                <h5>+51 960 797 793</h5>
                            </div>
                        </div>
                    </div>
                    <div className="footer-description-redes">
                    <h4><strong>Síguenos en nuestras redes</strong></h4>
                    <div className="footer-socialnetwork">
                        <a className="redes" href="https://translate.google.com/?sl=en&tl=es&text=liying&op=translate" rel="noreferrer"
                            target="_blank">
                            <img className='svg-effect' src={Facebook} alt='facebook' height={'50px'}  />
                        </a>
                        <a className="redes" href="https://translate.google.com/?sl=en&tl=es&text=liying&op=translate"
                            rel="noreferrer" target="_blank">
                            <img className='svg-effect' src={Instagram} alt='instagram' height={'55px'} />
                        </a>
                        <a className="redes" href="https://translate.google.com/?sl=en&tl=es&text=liying&op=translate"
                            rel="noreferrer" target="_blank">
                            <img className='svg-effect' src={Linkedin} alt='linkedin' height={'55px'} />
                        </a>
                        <a className="redes" href="https://translate.google.com/?sl=en&tl=es&text=liying&op=translate"
                            rel="noreferrer" target="_blank">
                            <img className='svg-effect' src={Tiktok} alt='tiktok' height={'50px'} />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="footer-description-nuestrosservicios">
                    <h4><strong>Nuestros servicios</strong></h4>
                    <ul className="container-list">
                        <li className="li-effect">
                            <a className="servicios" href="#pregrado">
                                <h5>Redacción de Tesis de Pregrado</h5>
                            </a>
                        </li>
                        <li className="li-effect">
                            <a className="servicios" href="#postgrado">
                                <h5>Redacción de Tesis de Pregrado</h5>
                            </a>
                        </li>
                        <li className="li-effect">
                            <a className="servicios" href="#levantamieno-pregrado">
                                <h5>Levantamiento de Observaciones Pregrado</h5>
                            </a>
                        </li>
                        <li className="li-effect">
                            <a className="servicios" href="#levantamieno-postgrado">
                                <h5>Levantamiento de Observaciones Maestría</h5>
                            </a>
                        </li>
                        <li className="li-effect">
                            <a className="servicios" href="#parafraseo">
                                <h5>Parafraseo</h5>
                            </a>
                        </li>
                        <li className="li-effect">
                            <a className="servicios" href="#suficiencia">
                                <h5>Trabajo de Suficiencia Profesional</h5>
                            </a>
                        </li>
                        <li className="li-effect">
                            <a className="servicios" href="#articulo">
                                <h5>Artículo Científico</h5>
                            </a>
                        </li>
                        <li className="li-effect">
                            <a className="servicios" href="#articulo-sistematica">
                                <h5>Artículo de Revisión Sistemática</h5>
                            </a>
                        </li>
                        <li className="li-effect">
                            <a className="servicios" href="#articulo-literatura">
                                <h5>Artículo de Revisión de Literatura</h5>
                            </a>
                        </li>
                        <li className="li-effect">
                            <a className="servicios" href="#ciclo">
                                <h5>Trabajos de Ciclo</h5>
                            </a>
                        </li>
                        <li className="li-effect">
                            <a className="servicios" href="#monografia">
                                <h5>Monografía</h5>
                            </a>
                        </li>
                        <li className="li-effect">
                            <a className="servicios" href="#ensayo">
                                <h5>Ensayos</h5>
                            </a>
                        </li>
                        <li className="li-effect">
                            <a className="servicios" href="#plan">
                                <h5>Planes de Negocio</h5>
                            </a>
                        </li>
                        <li className="li-effect">
                            <a className="servicios" href="#practicas">
                                <h5>Informe de Prácticas</h5>
                            </a>
                        </li>
                        <li className="li-effect">
                            <a className="servicios" href="#tesinas">
                                <h5>Tesinas</h5>
                            </a>
                        </li>
                        <li className="li-effect">
                            <a className="servicios" href="#cv">
                                <h5>Elavoración de CV</h5>
                            </a>
                        </li>
                        <li className="li-effect">
                            <a className="servicios" href="#diapositivas">
                                <h5>Diapositivas</h5>
                            </a>
                        </li>
                        <li className="li-effect">
                            <a className="servicios" href="#cursos">
                                <h5>Curso Online: próximamente...</h5>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-description-ubicanos">
                    <h4><strong>Ubícanos</strong></h4>
                    <div className="ubi-list">
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <div className="card-localizacion">
                                <h5><strong>SAN ISIDRO – LIMA</strong></h5>
                                <h5>Calle German Schreiber 276</h5>
                            </div>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <div className="card-localizacion">
                                <h5><strong>CERCADO DE LIMA – LIMA</strong></h5>
                                <h5>Jr. Andahuaylas 437</h5>
                            </div>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <div className="card-localizacion">
                                <h5><strong>CUSCO – CUSCO</strong></h5>
                                <h5>Av. el sol 344, oficina 211</h5>
                            </div>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <div className="card-localizacion">
                                <h5><strong>HUANCAYO</strong></h5>
                                <h5>Jr. Tacna 234, Edificio Torre Galena 234</h5>
                            </div>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <div className="card-localizacion">
                                <h5><strong>JULIACA</strong></h5>
                                <h5>Jr. 02 de Mayo 408, oficina 304 </h5>
                            </div>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <div className="card-localizacion">
                                <h5><strong>AREQUIPA</strong></h5>
                                <h5>Av. Ejército 710 Yanahuara </h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <p className="footer-text">
                Copyright © AMDDI. All rights reserved.
            </p>

        </footer>
    )
}