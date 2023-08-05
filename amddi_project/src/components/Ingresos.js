import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import '../styles/Ingresos.css';

export default function Testimonios() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <section className="ingresos_container">
            
            <div className="ingresos_description">
                <div className="ingresos_card">
                    <h2 className="titulo"><strong>Programa de 50 / 50</strong></h2>
                    <p>
                        Gana ingresos extras desde casa
                        Únete a nuestra comunidad freelance eligiendo entre:
                        <div className="puestos_list">
                            <li><strong>Contratos a tiempo completo para proyectos grandes. Ideal si buscas un trabajo estable.</strong></li>
                            <li><strong>Mini trabajos y proyectos por horas o tareas puntuales. Perfecto para ingresos adicionales flexibles.</strong></li>
                        </div>
                        No necesitas experiencia previa. Postula con tus habilidades (diseño, redacción, programación, traducción, etc.)

                        Tú eliges los proyectos y horarios.

                        Envíanos tu CV y rellena el formulario de postulación. Buscamos personas responsables tanto para trabajo freelance como a tiempo completo. ¡Impulsa tus habilidades y genera ingresos extras desde casa!</p>
                </div>

                <form method="POST" action="https://formsubmit.co/reyes.christian@pucp.pe" encType="multipart/form-data" className="container-contacto-empresa programa-formulario">
                    <h2 className="titulo"><strong>¡Postula ya! Rellena tus datos</strong></h2>

                    <div className="container-contacto">
                        <div className="mb-3 d-flex ">
                            <input type="text" name="name" className="form-control my-input" style={{ width: '610px' }} id="Input1"
                                placeholder="Nombre y apellido *" required />

                        </div>
                        <div className="mb-3 d-flex input_contact_container">

                            <input type="email" name="email" className="form-control form-email my-input" style={{ width: '300px', marginRight: '10px' }}
                                id="exampleFormControlInput1" placeholder="Correo electrónico *" required />
                            <input type="number" name="phone" className="form-control my-input input_card" style={{ width: '300px' }} id="Input1"
                                placeholder="Celular *" min="10000000" max="999999999999" required />
                        </div>
                        <div className="mb-3 d-flex input_contact_container">
                            <input type="text" name="phone" className="form-control my-input " style={{ width: '300px', marginRight: '10px' }} id="Input1"
                                placeholder="Puesto al que postula*" required />
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
                            <textarea className="form-control my-input" name="message" id="exampleFormControlTextarea1" style={{ width: '610px' }} rows="5"
                                placeholder="Buenas tardes, yo AMDDI, quiero trabajar con ustedes en el área de ... *" required></textarea>
                        </div>
                        <div className="mb-3 d-flex flex-column custom-file seleccionar-archivo">

                            <input className="form-control btn color-button" name="file" type="file"
                                id="formFileMultiple" accept=".pdf" required />
                        </div>
                        <button type="submit" className="btn button-contact">Enviar el formulario</button>

                        <input type="hidden" name="_next" value="http://127.0.0.1:5500/contactanos.html" />
                        <input type="hidden" name="_captcha" value="false" />

                    </div>
                </form>
            </div>
        </section >
    );
}