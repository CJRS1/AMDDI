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
            <div className="form_login_container">
                <div className="titulo_login">
                    <h2>Ingresar</h2>
                    <span className="linea"></span>
                </div>
                <form onSubmit={handleSubmit} className="form_login_user">
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
                    <div className="login_opciones">

                        <Link to="/AMDDI/olvide_contraseña" type="submit" className="login_preguntas">¿Has olvidado tu contraseña? <strong>Recupérala.</strong></Link>
                        <Link to="/AMDDI/registrarse" type="submit" className="login_preguntas">¿Aún no tienes cuenta? <strong>Regístrate</strong>.</Link>
                    </div>

                    <button className="button_logearse" type="submit">
                        Iniciar Sesión
                        </button>

                </form>
            </div>
        </section>

    );
}