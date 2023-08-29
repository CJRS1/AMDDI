import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import '../styles/Investigacion.css';

export default function Investigacion() {
    const location = useLocation();
    const [showAlert, setShowAlert] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        emprendimiento: "",
        departamento: "",
        message: ""
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Aquí realizarías la lógica real para enviar el formulario, por ejemplo, hacer la solicitud POST.
        try {
            const response = await fetch('https://formsubmit.co/info@amddi.com', {
                method: 'POST',
                // Aquí puedes configurar las cabeceras y datos del formulario
            });

            if (response.ok) {
                setShowAlert(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    investigacion: "",
                    departamento: "",
                    message: ""
                });
            } else {
                console.error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error al enviar el formulario', error);
        }
    };

    useEffect(() => {
        if (showAlert) {
            // Muestra la alerta
            alert("Formulario enviado exitosamente");
            setShowAlert(false); // Cierra la alerta automáticamente después de mostrarla
        }
    }, [showAlert]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    return (
        <section className="ingresos_container">

            <div className="ingresos_description investigacion">
                <div className="investigacion_card">
                <img className="img-programa" src={require('../images/Programa/invsostenible.png')} alt='proyecto' />
                    {/* <h2 className="titulo"><strong>Programa de Investigación Sostenible</strong></h2>
                    <p> ¡Bienvenido al Programa de Investigación Sostenible AMDDI! Apoyamos a jóvenes investigadores comprometidos con soluciones innovadoras para los desafíos ambientales, sociales y económicos de nuestro país. Si compartes esta misión, te conectaremos con mentores expertos que te guiarán en tus investigaciones, brindándote valiosa orientación. También reconocemos la importancia de contar con recursos, por eso financiamos proyectos alineados con nuestros objetivos de desarrollo sostenible. Únete a nuestro programa y sé parte del cambio que el país necesita. Juntos podemos construir un futuro más sostenible. </p> */}
                </div>
                <div className="form_ingreso">
                    <form onSubmit={handleFormSubmit}  method="POST" action="https://formsubmit.co/info@amddi.com" encType="multipart/form-data" className="container-contacto-empresa programa-formulario">
                        <h3 className="titulo"><strong>Construyamos un futuro más sostenible</strong></h3>
                        <h4> ¡Postula ya! Rellena tus datos en el formulario</h4>

                        <div className="container-contacto">
                            <div className="mb-3 d-flex ">
                                <input type="text" name="name" className="form-control my-input" style={{ width: '510px' }} id="Input1"
                                    placeholder="Nombre y apellido *" value={formData.name} onChange={handleInputChange} required />

                            </div>
                            <div className="mb-3 d-flex input_contact_container">

                                <input type="email" name="email" className="form-control form-email my-input" style={{ width: '250px', marginRight: '10px' }}
                                    id="exampleFormControlInput1" placeholder="Correo electrónico *" value={formData.email} onChange={handleInputChange} required />
                                <input type="number" name="phone" className="form-control my-input input_card" style={{ width: '250px' }} id="Input1"
                                    placeholder="Celular *" min="10000000" max="999999999999" value={formData.phone} onChange={handleInputChange} required />
                            </div>
                            <div className="mb-3 d-flex input_contact_container">
                                <input type="text" name="investigacion" className="form-control my-input" style={{ width: '250px', marginRight: '10px' }} id="Input1"
                                    placeholder="Nombre de la Investigación*" value={formData.investigacion} onChange={handleInputChange} required />
                                <select className="form-control my-input input_card" name="departamento" style={{ width: '250px' }} id="contact-method" defaultValue="" value={formData.departamento} onChange={handleInputChange} required>
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
                                <textarea className="form-control my-input" name="message" id="exampleFormControlTextarea1" style={{ width: '510px' }} rows="5"
                                    placeholder="Mi Proyecto de Investigación Sostenible trata sobre ... *" value={formData.message} onChange={handleInputChange}required></textarea>
                            </div>

                            <button type="submit" className="btn button-contact">Enviar el formulario</button>

                            <input type="hidden" name="_next" value="https://www.amddi.com/investigacionsostenible" />
                            <input type="hidden" name="_captcha" value="false" />

                        </div>
                    </form>
                </div>
            </div>
        </section >
    );
}