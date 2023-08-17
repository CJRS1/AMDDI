import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'

import '../styles/Registro.css';

export default function Registro() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [user, setUser] = useState({
        name: '',
        lastName: '',
        career: '',
        dni: '',
        email: '',
        password: ''
    });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <section className="registro_container">
            <div className="form_registro_container">
                <h2 className="titulo_registro">Creación de cuenta</h2>
                <div className="secciones_registro_container">
                    <span className="secciones_registro">1</span>
                    <span className="secciones_registro">2</span>
                    <span className="secciones_registro">3</span>
                </div>
                <form onSubmit={handleSubmit} className="form_registro">
                    <input className="input_registro"
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={user.name}
                        onChange={handleInputChange}
                    />
                    <input className="input_registro"
                        type="text"
                        name="lastName1"
                        placeholder="Apellido Paterno"
                        value={user.lastName}
                        onChange={handleInputChange}
                    />
                    <input className="input_registro"
                        type="text"
                        name="lastName2"
                        placeholder="Apellido Materno"
                        value={user.lastName}
                        onChange={handleInputChange}
                    />
                    <input className="input_registro"
                        type="text"
                        name="dni"
                        placeholder="DNI"
                        value={user.lastName}
                        onChange={handleInputChange}
                    />
                    <input className="input_registro"
                        type="text"
                        name="career"
                        placeholder="Carrera"
                        value={user.lastName}
                        onChange={handleInputChange}
                    />

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


                    {/* <button type="submit">Registrarse</button> */}

                    <Link to="/registrarse-p2" className="btn button-effect btn_registro" type="submit">Siguiente</Link>


                </form>
            </div>
        </section>

    );
}