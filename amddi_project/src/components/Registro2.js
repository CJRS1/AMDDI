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
            <div className="form_registro_container">
                <h2 className="titulo_registro">Creación de cuenta</h2>
                <div className="secciones_registro_container">
                    <span className="secciones_registro">1</span>
                    <span className="secciones_registro">2</span>
                    <span className="secciones_registro">3</span>
                </div>
                <form onSubmit={handleSubmit} className="form_registro">
                    <input className="input_registro"
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={user.email}
                        onChange={handleInputChange}
                    />
                    <input className="input_registro"
                        type="password"
                        name="contraseña"
                        placeholder="Contraseña"
                        // value={user.password}
                        // onChange={handleInputChange}
                    />
                    <input className="input_registro"
                        type="password"
                        name="contraseña"
                        placeholder="Contraseña"
                        // value={user.password}
                        // onChange={handleInputChange}
                    />
                    <Link to="/registrarse-p3" className="btn button-effect btn_registro" type="submit">Siguiente</Link>
                </form>
            </div>
        </section>

    );
}