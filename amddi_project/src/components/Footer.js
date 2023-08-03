import React from 'react'
import { HashLink } from 'react-router-hash-link'
import '../styles/Footer.css'
import Tiktok from '..//images/LogoRedesSociales/tiktok.svg'
import Facebook from '..//images/LogoRedesSociales/facebook-f.svg'
import Instagram from '..//images/LogoRedesSociales/instagram.svg'
import Linkedin from '..//images/LogoRedesSociales/linkedin-in.svg'
import bcp from '../images/FormasdePago/bcp.jpg'
import mastercard from '../images/FormasdePago/mastercard.jpg'
import mercadopago from '../images/FormasdePago/mercadopago.png'
import paypal from '../images/FormasdePago/paypal.png'
import scotiabank from '../images/FormasdePago/scotiabank.jpg'
import visa from '../images/FormasdePago/visa.jpg'
import libro from '../images/libro.png'


export default function Footer() {
    return (
        <footer className='footer_container'>
            <div className="footer-description">
                <div className="footer-description-amddi">
                    <h4><strong>Nosotros</strong></h4>
                    <div className="footer-content">
                        <h5>
                            <strong>AMDDI</strong> es una empresa líder en soluciones académicas y profesionales. Nuestro equipo de expertos altamente capacitados abarca diversas áreas para ofrecer servicios de redacción de tesis, artículos científicos, ensayos, y más. Brindamos resultados de calidad y confianza para impulsar el éxito de nuestros clientes en sus objetivos académicos y laborales.
                        </h5>
                    </div>
                    <div className="footer-description-llamanos">
                        <div className="llamanos_container">
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
                        <div className="horario_container">
                            <h4><strong>Nuestro Horario</strong></h4>
                            <div className="card-ictel">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-alarm" viewBox="0 0 16 16">
                                    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                </svg>
                                <div className="container-ictel">
                                    <h5>Lunes a Viernes</h5>
                                    <h5>9:00 am a 6:00 pm</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-description-redes">
                        <h4><strong>Síguenos en nuestras redes</strong></h4>
                        <div className="footer-socialnetwork">
                            <a className="redes" href="https://www.facebook.com/tesisamddi" rel="noreferrer"
                                target="_blank">
                                <img className='svg-effect' src={Facebook} alt='facebook' height={'35px'} />
                            </a>
                            <a className="redes" href="https://www.instagram.com/amddiasesorias/"
                                rel="noreferrer" target="_blank">
                                <img className='svg-effect' src={Instagram} alt='instagram' height={'40px'} />
                            </a>
                            <a className="redes" href="https://www.linkedin.com/company/amddi-tesis-proyectos-empresariales/about/"
                                rel="noreferrer" target="_blank">
                                <img className='svg-effect' src={Linkedin} alt='linkedin' height={'40px'} />
                            </a>
                            <a className="redes" href="https://www.tiktok.com/@amdditesisproyectos"
                                rel="noreferrer" target="_blank">
                                <img className='svg-effect' src={Tiktok} alt='tiktok' height={'35px'} />
                            </a>
                        </div>
                    </div>
                    <div className="footer-description-pago">
                        <h4><strong>Formas de pago</strong></h4>
                        <div className="pago-container">

                            <img src={bcp} alt='bcp' height={'45px'} />
                            <img src={scotiabank} alt='scotiabank' height={'45px'} />
                            <img src={visa} alt='visa' height={'45px'} />
                            <img src={mastercard} alt='mastercard' height={'45px'} />
                            <img src={mercadopago} alt='mercadopago' height={'45px'} />
                            <img src={paypal} alt='paypal' height={'45px'} />

                        </div>
                    </div>
                </div>
                <div className="footer-description-nuestrosservicios">
                    <h4><strong>Nuestros servicios</strong></h4>
                    <ul className="container-list">
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#carreras" className="servicios li-effect" href="#pregrado">
                                <h5>Carreras Asesoradas</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#redacciontesispregrado" className="servicios li-effect" href="#pregrado">
                                <h5>Redacción de Tesis de Pregrado</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#redacciontesispostgrado" className="servicios li-effect" href="#postgrado">
                                <h5>Redacción de Tesis de Pregrado</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#redacciontesismaestria" className="servicios li-effect" href="#postgrado">
                                <h5>Redacción de Tesis de Maestría</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#levantamientoobservacionespregrado" className="servicios li-effect" href="#levantamieno-pregrado">
                                <h5>Levantamiento de Observaciones Pregrado</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#levantamientoobservacionesmaestria" className="servicios li-effect" href="#levantamieno-postgrado">
                                <h5>Levantamiento de Observaciones Maestría</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#parafraseo" className="servicios li-effect" href="#parafraseo">
                                <h5>Parafraseo</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#trabajosuficienciaprofesional" className="servicios li-effect" href="#suficiencia">
                                <h5>Trabajo de Suficiencia Profesional</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#articulocientifico" className="servicios li-effect" href="#articulo">
                                <h5>Artículo Científico</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#articulorevisionsistematica" className="servicios li-effect" href="#articulo-sistematica">
                                <h5>Artículo de Revisión Sistemática</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#articulorevisionliteratura" className="servicios li-effect" href="#articulo-literatura">
                                <h5>Artículo de Revisión de Literatura</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#trabajodeciclo" className="servicios li-effect" href="#ciclo">
                                <h5>Trabajos de Ciclo</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#monografias" className="servicios li-effect" href="#monografia">
                                <h5>Monografía</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#ensayos" className="servicios li-effect" href="#ensayo">
                                <h5>Ensayos</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#plannegocio" className="servicios li-effect" href="#plan">
                                <h5>Planes de Negocio</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#informepracticas" className="servicios li-effect" href="#practicas">
                                <h5>Informe de Prácticas</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#tesinas" className="servicios li-effect" href="#tesinas">
                                <h5>Tesinas</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#elaboracioncv" className="servicios li-effect" href="#cv">
                                <h5>Elavoración de CV</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#dispositivas" className="servicios li-effect" href="#diapositivas">
                                <h5>Diapositivas</h5>
                            </HashLink>
                        </li>
                        <li >
                            <HashLink smooth to="/AMDDI/servicios#cursos" className="servicios li-effect" href="#cursos">
                                <h5>Curso Online: próximamente...</h5>
                            </HashLink>
                        </li>
                    </ul>
                </div>
                <div className="footer-description-ubicanos">
                    <h4><strong>Programas de Beneficios</strong></h4>
                    <div className="container-list">
                        <ul>
                            <li><HashLink smooth to="/AMDDI/ingresosextra" className="li-effect"> Ingresos Extra</HashLink> </li>
                            <li><HashLink smooth to="/AMDDI/investigacionsostenible" className="li-effect"> Investigación Sostenible</HashLink> </li>
                            <li><HashLink smooth to="/AMDDI/emprendimientojoven" className="li-effect"> Emprendimiento Joven</HashLink> </li>
                        </ul>
                    </div>
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
                                <h5>Av. El Sol 344, oficina 211</h5>
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
                    <h4><strong>Libro de Reclamaciones</strong></h4>
                    <div className="libro-container">
                        <a href="https://librodereclamacionesperu.com/formulario.php?id=853131633"
                            rel="noreferrer" target="_blank" >
                            <img src={libro} alt='bcp' height={'65px'} />
                        </a>
                    </div>
                </div>

            </div>
            <p className="footer-text">
                Copyright © AMDDI. Todos los derechos reservados.
            </p>

        </footer>
    )
}