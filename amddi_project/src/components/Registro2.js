import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../styles/Registro.css';

export default function Registro2() {
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

            <h2 className="titulo">Escribe tu correo y contraseña</h2>
            <form onSubmit={handleSubmit} >
                
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
                <input className="input_registro"
                    type="text"
                    name="password"
                    placeholder="Confirma tu contraseña"
                    value={user.lastName}
                    onChange={handleInputChange}
                />


                <Link to="/AMDDI/registrarse-p3" type="submit">Siguiente</Link>


            </form>
            </div>
        </section>

    );
}