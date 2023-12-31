import React, {useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import '../styles/Emprendimiento.css';

export default function Emprendimiento() {
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

            <div className="ingresos_description emprendimiento">
                <div className="emprendimiento_card">
                    <img className="img-programa" src={require('../images/Programa/emprendimiento.png')} alt='proyecto' />
                    {/* <h2 className="titulo"><strong>Programa Emprendimiento Joven</strong></h2>
                    <p> ¡Bienvenido al Programa Emprendimiento AMDDI! Apoyamos a jóvenes estudiantes emprendedores comprometidos en hacer realidad sus ideas innovadoras. Si compartes esta pasión, te brindamos asesoría experta para desarrollar planes de negocio y acceso a subvenciones como capital inicial. También te ofrecemos constante mentoria desde la conceptualización hasta la ejecución de tu emprendimiento. Únete a nuestro programa y convierte tu visión en realidad, con nuestro apoyo financiero y en conocimientos. Juntos podemos impulsar el potencial de los jóvenes para crear un impacto positivo. </p> */}
                </div>
                <div className="form_ingreso">

                    <form   method="POST" action="https://formspree.io/f/mqkvvrpz" encType="multipart/form-data" className="container-contacto-empresa programa-formulario" >
                        <h3 className="titulo"><strong>Únete y convierte tu visión en realidad</strong></h3>
                        <h4> ¡Postula ya! Rellena tus datos en el formulario</h4>

                        <div className="container-contacto">
                            <div className="mb-3 d-flex ">
                                <input type="text" name="name" className="form-control my-input" style={{ width: '510px' }} id="Input1"
                                    placeholder="Nombre y apellido *"  required />

                            </div>
                            <div className="mb-3 d-flex input_contact_container">

                                <input type="email" name="email"  className="form-control form-email my-input" style={{ width: '250px', marginRight: '10px' }}
                                    id="exampleFormControlInput1" placeholder="Correo electrónico *" required />
                                <input type="number" name="phone"  className="form-control my-input input_card" style={{ width: '250px' }} id="Input1"
                                    placeholder="Celular *" min="10000000" max="999999999999" required />
                            </div>
                            <div className="mb-3 d-flex input_contact_container">
                                <input type="text" name="emprendimiento"  className="form-control my-input" style={{ width: '250px', marginRight: '10px' }} id="Input1"
                                    placeholder="Nombre del Emprendimiento*" required />
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
                                <textarea className="form-control my-input"  name="message" id="exampleFormControlTextarea1" style={{ width: '510px' }} rows="5"
                                    placeholder="Mi Proyecto de Emprendimiento Joven trata sobre ... *" required></textarea>
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

                            <input type="hidden" name="_next" value="https://www.amddi.com/emprendimientojoven" />
                            <input type="hidden" name="_captcha" value="false" />


                        </div>
                    </form>

                </div>
            </div>
        </section >
    );
}