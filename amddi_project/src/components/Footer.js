import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import Tiktok from '..//images/Footer/tt.png'
import Facebook from '..//images/Footer/fb.png'
import Instagram from '..//images/Footer/ins.png'
import Linkedin from '..//images/Footer/link.png'
import bcp from '../images/FormasdePago/bcp.jpg'
import mastercard from '../images/FormasdePago/mastercard.jpg'
import mercadopago from '../images/FormasdePago/mercadopago.png'
import paypal from '../images/FormasdePago/paypal.png'
import scotiabank from '../images/FormasdePago/scotiabank.jpg'
import visa from '../images/FormasdePago/visa.jpg'
import tesis100 from '../images/medallacompleta.png'
import horario from '../images/Footer/horario.png'
import correo from '../images/Footer/correo.png'
import llamada from '../images/Footer/telefono.png'
// import libro from '../images/libro.png'


export default function Footer() {
    return (
        <footer className='footer_container'>
            <div className="footer-description">
                <div className="footer-description-amddi">
                    <Link to="" className="navbar-brand" href="#inicio"> <img className='img_header' src={require('../images/Logo_plomo.png')} alt='AMDDI' height={'80px'} />  </Link>
                    <div className="footer-content">
                        <h5>
                            <strong>AMDDI</strong> brinda servicios confiables de redacción para impulsar el éxito académico y profesional de nuestros clientes.
                        </h5>
                    </div>

                    {/* <div className="footer-description-llamanos">
                        <div className="llamanos_container">
                            <h4><strong>Llámanos</strong></h4>
                            <div className="card-ictel">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    className="bi bi-telephone" viewBox="0 0 16 16">
                                    <path
                                        d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                <div className="container-ictel">
                                    <h5>+51 927 965 909</h5>
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
                                    <h5>9:00 am a 9:00 pm</h5>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="programas">
                        <h4><strong>Programas de Beneficios</strong></h4>
                        <div className="container-list">
                            <ul>
                                <li><HashLink smooth to="/ingresosextra" className="li-effect pro_list"> <h5 className="servicios_l">Ingresos Extra</h5></HashLink> </li>
                                <li><HashLink smooth to="/investigacionsostenible" className="li-effect pro_list"> <h5 className="servicios_l">Investigación Sostenible</h5></HashLink> </li>
                                <li><HashLink smooth to="/emprendimientojoven" className="li-effect pro_list"> <h5 className="servicios_l">Emprendimiento Joven</h5></HashLink> </li>
                            </ul>
                        </div>
                    </div> */}

                    <div className="footer-description-pago">
                        <h4><strong>Formas de pago</strong></h4>
                        <div className="pago-container">
                            <img src={bcp} alt='bcp' height={'35px'} />
                            <img src={scotiabank} alt='scotiabank' height={'35px'} />
                            <img src={visa} alt='visa' height={'35px'} />
                            <img src={mastercard} alt='mastercard' height={'35px'} />
                            <img src={mercadopago} alt='mercadopago' height={'35px'} />
                            <img src={paypal} alt='paypal' height={'35px'} />
                        </div>
                    </div>
                    <img src={tesis100} alt='tesis_medalla' height={'180px'} />
                </div>

                <div className="footer-description-ubicanos">
                    <div className="footer-description-redes">
                        <div className="footer-socialnetwork">
                            <a className="redes" href="https://www.facebook.com/tesisamddi" rel="noreferrer"
                                target="_blank">
                                <img className='svg-effect' src={Facebook} alt='facebook' height={'45px'} />
                            </a>
                            <a className="redes" href="https://www.instagram.com/amddiasesorias/"
                                rel="noreferrer" target="_blank">
                                <img className='svg-effect' src={Instagram} alt='instagram' height={'45px'} />
                            </a>
                            <a className="redes" href="https://www.linkedin.com/company/amddi-tesis-proyectos-empresariales/about/"
                                rel="noreferrer" target="_blank">
                                <img className='svg-effect' src={Linkedin} alt='linkedin' height={'45px'} />
                            </a>
                            <a className="redes" href="https://www.tiktok.com/@amdditesisproyectos"
                                rel="noreferrer" target="_blank">
                                <img className='svg-effect' src={Tiktok} alt='tiktok' height={'45px'} />
                            </a>
                        </div>
                    </div>
                    <h4><strong>Ubícanos</strong></h4>
                    <div className="ubi-list">
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#00d799" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <a href='https://goo.gl/maps/A2tvJ1vVgeFuwbZX7' target='_blank' rel='noreferrer' className="card-localizacion">

                                <h5>SAN ISIDRO – LIMA </h5>
                                <h5>Calle German Schreiber 276</h5>
                            </a>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#00d799" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <a href='https://goo.gl/maps/zGDxRZRcfkWzX1sZ6' target='_blank' rel='noreferrer' className="card-localizacion">
                                <h5>CERCADO DE LIMA – LIMA</h5>
                                <h5>Jr. Andahuaylas 437</h5>
                            </a>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#00d799" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <a href='https://goo.gl/maps/88n29qF6EZrBbDsk7' target='_blank' rel='noreferrer' className="card-localizacion">
                                <h5>CUSCO – CUSCO</h5>
                                <h5>Av. El Sol 344, oficina 211</h5>
                            </a>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#00d799" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <a href='https://goo.gl/maps/udj8etqNmS2fjwDs9' target='_blank' rel='noreferrer' className="card-localizacion">
                                <h5>HUANCAYO</h5>
                                <h5>Jr. Tacna 234, Edificio Torre Galena 234</h5>
                            </a>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#00d799" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <a href='https://goo.gl/maps/aechKCqqoWUwACjy7' target='_blank' rel='noreferrer' className="card-localizacion">
                                <h5>JULIACA</h5>
                                <h5>Jr. 02 de Mayo 408, oficina 304 </h5>
                            </a>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#00d799" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <a href='https://goo.gl/maps/3FdEePActj1CCLjP8' target='_blank' rel='noreferrer' className="card-localizacion">
                                <h5>AREQUIPA</h5>
                                <h5>Av. Ejército 710 Yanahuara </h5>
                            </a>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#00d799" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <a href='https://goo.gl/maps/1Z3CP3vTZRnupzS16' target='_blank' rel='noreferrer' className="card-localizacion">
                                <h5>ICA</h5>
                                <h5>Calle Lima 340, Oficina 25 </h5>
                            </a>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#00d799" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <a href='https://goo.gl/maps/fdSddLtyg344cMh59' target='_blank' rel='noreferrer' className="card-localizacion">
                                <h5>AYACUCHO</h5>
                                <h5>Jr. Bellido 534, 2do piso Oficina B</h5>
                            </a>
                        </div>
                    </div>
                    <div className="footer_contacto">
                        <div className="footer_contacto">
                            <img src={horario} alt='horario' height={'35px'} />
                            <div className="container-ictel">
                                <h5>Lunes a Viernes</h5>
                                <h5>9:00 am a 9:00 pm</h5>
                            </div>
                        </div>
                        <div className="footer_contacto">
                            <img src={correo} alt='correo' height={'35px'} />
                            <div className="container-ictel">
                                <h5>info@amddi.com</h5>
                            </div>
                        </div>
                        <div className="footer_contacto">
                            <img src={llamada} alt='llamada' height={'35px'} />
                            <div className="container-ictel">
                                <h5>+51 927 965 909</h5>
                                <h5>+51 960 797 793</h5>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <p className="footer-text">
                Copyright © AMDDI. Todos los derechos reservados.
            </p>

        </footer>
    )
}