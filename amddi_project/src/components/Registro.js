import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
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
            <div className="form_registro">

            <h2 className="titulo">Regístrate y completa tus datos</h2>
            <form onSubmit={handleSubmit} >
                <input className="input_registro"
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={user.name}
                    onChange={handleInputChange}
                />
                <input className="input_registro"
                    type="text"
                    name="lastName"
                    placeholder="Apellido"
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
                <input className="input_registro"
                    type="text"
                    name="correo"
                    placeholder="Correo"
                    value={user.lastName}
                    onChange={handleInputChange}
                />
                <input className="input_registro"
                    type="text"
                    name="password"
                    placeholder="Contraseña"
                    value={user.lastName}
                    onChange={handleInputChange}
                />


                <button type="submit">Registrarse</button>


            </form>
            </div>
        </section>

    );
}