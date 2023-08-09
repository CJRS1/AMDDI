import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../styles/Login.css';

export default function Inicio() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí realizarías la autenticación
    }

    return (
        <section className="login_container">
            <div className="form_registro">
                <h2 className="titulo">Inicia sesión</h2>
                <form onSubmit={handleSubmit}>
                    <input className="input_registro"
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input className="input_registro"
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Iniciar Sesión</button>

                    <button type="submit">Recuperar Contraseña</button>

                    <Link to="/AMDDI/registrarse" type="submit">Crear una cuenta</Link>
                    <Link to="/AMDDI/registrarse" type="submit">¿Has olvidado tu contraseña?</Link>
                </form>
            </div>
        </section>

    );
}