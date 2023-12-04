import React, { useState,useEffect } from "react";
import { useLocation } from 'react-router-dom';
import '../styles/Contacto.css';
// import logo from '../images/Logo_soloblanco.png'

export default function Contacto() {
    const location = useLocation();
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const handleAlertClick = () => {
        setShowAlert(true);
        setTimeout(() => {
            alert("Formulario enviado correctamente.");
            setShowAlert(false);
        }, 1000);
    };

    return (
        <section className="contacto_container">
            <div className="portada_contacto">
                <div className="portada_contacto_container">
                    {/* <img className='' src={require('../images/contacto.png')} alt='AMDDI' /> */}

                    <div className="portada_contacto_titulo">
                        <h3>
                            PONTE EN
                        </h3>
                        <h3>
                            <span>
                                CONTACTO
                            </span>
                        </h3>
                    </div>
                    {/* <div className="confiables_container">
                        <h4>
                            <span>

                                100% confiables
                            </span>
                        </h4>
                    </div> */}
                </div>
            </div>
            <div className="container-contacto-lottie ">
                <div className="contacto_amddii">
                    <div className="contacto-desc ">
                        <img className='' src={require('../images/Logo_plomo.png')} alt='AMDDI' />
                        <h4><i><span>SIEMPRE ESTÁ A </span></i> </h4>
                        <h4><i><span> SU DISPOSICIÓN PARA</span> </i></h4>
                        <h4><i><span>CUALQUIER CONSULTA </span></i> </h4>
                        <h3>Si requiere mayor información, puede contactarnos a
                            través del siguiente formulario:</h3>
                    </div>
                </div>
                <div className="form_contacto">
                    <form method="POST" action="https://formspree.io/f/mqkvvrpz" encType="multipart/form-data" className="container-contacto-form">
                        <div className="container-contacto">
                            <div className="mb-3 d-flex flex-column justify-content-center input_container">
                                <input type="text" name="name" className="form-control my-input" style={{ width: '610px', marginBottom:'16px' }} id="Input1"
                                    placeholder="Nombre y apellido *" required />
                                <input type="email" name="email" className="form-control form-email my-input" style={{ width: '610px' }}
                                    id="exampleFormControlInput1" placeholder="Correo electrónico *" required />
                            </div>
                            <div className="mb-3 d-flex justify-content-center input_container">
                                <input type="number" name="phone" className="form-control my-input input_card" style={{ width: '300px', marginRight: '10px' }} id="Input1"
                                    placeholder="Celular *" min="10000000" max="999999999999" inputMode="numeric" required />

                                <select className="form-control my-input input_card" name="departamento" style={{ width: '300px' }} id="contact-method" defaultValue="" required>
                                    <option value="" disabled >Seleccione un departamento</option>
                                    <option value="Ancash">Ancash</option>
                                    <option value="Apurímac">Apurímac</option>
                                    <option value="Arequipa">Arequipa</option>
                                    <option value="Ayacucho">Ayacucho</option>
                                    <option value="Cajamarca">Cajamarca</option>
                                    <option value="Callao">Callao</option>
                                    <option value="Cusco">Cusco</option>
                                    <option value="Huancavelica">Huancavelica</option>
                                    <option value="Huánuco">Huánuco</option>
                                    <option value="Ica">Ica</option>
                                    <option value="Junín">Junín</option>
                                    <option value="La Libertad">La Libertad</option>
                                    <option value="Lambayeque">Lambayeque</option>
                                    <option value="Lima">Lima</option>
                                    <option value="Loreto">Loreto</option>
                                    <option value="Madre de Dios">Madre de Dios</option>
                                    <option value="Moquegua">Moquegua</option>
                                    <option value="Pasco">Pasco</option>
                                    <option value="Piura">Piura</option>
                                    <option value="Puno">Puno</option>
                                    <option value="San Martín">San Martín</option>
                                    <option value="Tacna">Tacna</option>
                                    <option value="Tumbes">Tumbes</option>
                                    <option value="Ucayali">Ucayali</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control my-input" name="message" id="exampleFormControlTextarea1" style={{ width: '610px', height:'200px' }} rows="5"
                                    placeholder="Comentario o mensaje *" required></textarea>
                            </div>
                            {showAlert && (
                                <div className="alert-overlay">
                                    <div className="alert-box">
                                        <p>¡Espere un momento, por favor!</p>
                                        <button className="alert-button" onClick={() => setShowAlert(false)}>OK</button>
                                    </div>
                                </div>
                            )}
                            <button type="submit" className="btn button-contact" onClick={handleAlertClick}>Enviar el formulario</button>

                            <input type="hidden" name="_next" value="https://amddi.com/contactanos" />
                            <input type="hidden" name="_captcha" value="false" />

                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
}