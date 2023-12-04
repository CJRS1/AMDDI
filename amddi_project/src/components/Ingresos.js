import React, { useState,useEffect } from "react";
import { useLocation } from 'react-router-dom';
import '../styles/Ingresos.css';

export default function Testimonios() {
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
        <section className="ingresos_container">

            <div className="ingresos_description ingresos">
                <div className="ingresos_card">
                    <img className="img-programa" src={require('../images/Programa/programa50.png')} alt='proyecto' />
                    {/* <h2 className="titulo"><strong>Programa de 50 / 50</strong></h2>
                    <p>
                        Gana ingresos extras desde casa
                        Únete a nuestra comunidad freelance eligiendo entre:
                        <div className="puestos_list">
                            <li><strong>Contratos a tiempo completo para proyectos grandes. Ideal si buscas un trabajo estable.</strong></li>
                            <li><strong>Mini trabajos y proyectos por horas o tareas puntuales. Perfecto para ingresos adicionales flexibles.</strong></li>
                        </div>
                        No necesitas experiencia previa. Postula con tus habilidades (diseño, redacción, programación, traducción, etc.)

                        Tú eliges los proyectos y horarios.

                        Envíanos tu CV y rellena el formulario de postulación. Buscamos personas responsables tanto para trabajo freelance como a tiempo completo. ¡Impulsa tus habilidades y genera ingresos extras desde casa!</p> */}
                </div>
                <div className="form_ingreso">

                    <form  method="POST" action="https://formcarry.com/s/cd88rix77r" encType="multipart/form-data" className="container-contacto-empresa programa-formulario">
                        <h3 className="titulo"><strong>Únete a nuestra comunidad freelance</strong></h3>
                        <h4> Envíanos tu CV y rellena el formulario de postulación</h4>
                        <div className="container-contacto">
                            <div className="mb-3 d-flex ">
                                <input type="text" name="name" className="form-control my-input input1" style={{ width: '510px', height: '35px' }} id="Input1"
                                    placeholder="Nombre y apellido *"  required />
                            </div>
                            <div className="mb-3 d-flex input_contact_container">

                                <input type="email" name="email" className="form-control form-email my-input input1" style={{ width: '250px', marginRight: '10px' }}
                                    id="exampleFormControlInput1" placeholder="Correo electrónico *" required />
                                <input type="number" name="phone" className="form-control my-input input_card input1" style={{ width: '250px', height: '35px' }} id="Input1"
                                    placeholder="Celular *" min="10000000" max="999999999999"  required />
                            </div>
                            <div className="mb-3 d-flex input_contact_container">
                                <input type="text" name="puesto" className="form-control my-input input1" style={{ width: '250px', marginRight: '10px', height: '35px' }} id="Input1"
                                    placeholder="Puesto al que postula*"  required />
                                <select className="form-control my-input input_card" name="departamento"  style={{ width: '250px' }} id="contact-method" defaultValue="" required>
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
                                <textarea className="form-control my-input " name="message" id="exampleFormControlTextarea1" style={{ width: '510px', height: '100px' }} rows="5"
                                    placeholder="Buenas tardes, yo José, quiero trabajar con ustedes en el área de ... *"  required></textarea>
                            </div>
                            <div className="mb-3 d-flex flex-column custom-file seleccionar-archivo">

                                <input className="form-control btn color-button" name="file" type="file"
                                    id="formFileMultiple" accept=".pdf" required />
                                    
                            </div>
                            {showAlert && (
                                <div className="alert-overlay">
                                    <div className="alert-box">
                                        <p>¡Espere un momento, por favor!</p>
                                        <button className="alert-button" onClick={() => setShowAlert(false)}>OK</button>
                                    </div>
                                </div>
                            )}
                            <button type="submit" className="btn button-contact" value="Send" onClick={handleAlertClick}>Enviar el formulario</button>

                            <input type="hidden" name="_next" value="https://www.amddi.com/ingresosextra" />
                            <input type="hidden" name="_captcha" value="false" />

                        </div>
                    </form>
                </div>
            </div>
        </section >
    );
}