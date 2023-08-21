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
                    <div className="footer-description-pago">
                        <div className="pago-container">
                            <img src={bcp} alt='bcp' height={'35px'} />
                            <img src={scotiabank} alt='scotiabank' height={'35px'} />
                            <img src={visa} alt='visa' height={'35px'} />
                            <img src={mastercard} alt='mastercard' height={'35px'} />
                            <img src={mercadopago} alt='mercadopago' height={'35px'} />
                            <img src={paypal} alt='paypal' height={'35px'} />
                        </div>
                    </div>
                    <img className='img_tesis' src={tesis100} alt='tesis_medalla' height={'180px'} />
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
                    <div className="title_ubi">
                    <h4><strong>Ubícanos</strong></h4>
                    </div>
                    <div className="ubi-list">
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#00d799" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <a href='https://goo.gl/maps/A2tvJ1vVgeFuwbZX7' target='_blank' rel='noreferrer' className="card-localizacion">

                                <h5>SAN ISIDRO – LIMA </h5>
                                <h5>&nbsp;Calle German Schreiber 276</h5>
                            </a>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#00d799" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <a href='https://goo.gl/maps/zGDxRZRcfkWzX1sZ6' target='_blank' rel='noreferrer' className="card-localizacion">
                                <h5>CERCADO DE LIMA</h5>
                                <h5>&nbsp;Jr. Andahuaylas 437. Referencia: al frente del congreso de la República </h5>
                            </a>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#00d799" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <a href='https://goo.gl/maps/88n29qF6EZrBbDsk7' target='_blank' rel='noreferrer' className="card-localizacion">
                                <h5>CUSCO</h5>
                                <h5>&nbsp;Av. El Sol 344, oficina 211. Referencia:  al costado del BBVA </h5>
                            </a>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#00d799" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <a href='https://goo.gl/maps/udj8etqNmS2fjwDs9' target='_blank' rel='noreferrer' className="card-localizacion">
                                <h5>HUANCAYO</h5>
                                <h5>&nbsp;Jr. Tacna 234, Edificio Torre Galena 234. Referencia: a una cuadra de la clínica Ortega </h5>
                            </a>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#00d799" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <a href='https://goo.gl/maps/aechKCqqoWUwACjy7' target='_blank' rel='noreferrer' className="card-localizacion">
                                <h5>JULIACA</h5>
                                <h5>&nbsp;Jr. 02 de Mayo 408, oficina 304 (tercer piso). Referencia: Galerías Plaza  </h5>
                            </a>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#00d799" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <a href='https://goo.gl/maps/3FdEePActj1CCLjP8' target='_blank' rel='noreferrer' className="card-localizacion">
                                <h5>AREQUIPA</h5>
                                <h5>&nbsp;Av. Ejército 710 Yanahuara. Referencia:frente al Mall Plaza </h5>
                            </a>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#00d799" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <a href='https://goo.gl/maps/1Z3CP3vTZRnupzS16' target='_blank' rel='noreferrer' className="card-localizacion">
                                <h5>ICA</h5>
                                <h5>&nbsp;Calle Lima 340 Galeria Cosmopolitan Plaza Stand 25 Segundo Piso </h5>
                            </a>
                        </div>
                        <div className="card-icloc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#00d799" className="bi bi-geo-alt"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <a href='https://goo.gl/maps/fdSddLtyg344cMh59' target='_blank' rel='noreferrer' className="card-localizacion">
                                <h5>AYACUCHO</h5>
                                <h5>&nbsp;Jr. Bellido 534, 2do piso Oficina B</h5>
                            </a>
                        </div>
                    </div>
                    <div className="footer_contacto">
                        <div className="footer_contacto">
                            <img src={horario} alt='horario' height={'40px'} />
                            <div className="container-ictel">
                                <h5>Lunes a Viernes</h5>
                                <h5>9:00 am a 9:00 pm</h5>
                            </div>
                        </div>
                        <div className="footer_contacto">
                            <img src={correo} alt='correo' height={'40px'} />
                            <div className="container-ictel">
                                <h5>info@amddi.com</h5>
                            </div>
                        </div>
                        <div className="footer_contacto">
                            <img src={llamada} alt='llamada' height={'40px'} />
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