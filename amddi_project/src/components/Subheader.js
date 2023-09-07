import React, { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../styles/Subheader.css';

export default function Subheader({ user, isLoggedIn, setUser }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const handleLogout = async () => {
        try {
            // Realiza una solicitud POST para cerrar sesión
            await axios.post('http://localhost:5000/logout');

            // Después de cerrar sesión con éxito, redirige al usuario a la página de inicio de sesión
            setUser(null);
            navigate({ pathname: "/" });
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };
    return (
        <section className="subheader_container">
            <div className="subheader-content">

                {!isLoggedIn || !user ? (
                    <>
                        <Link to="/login" className="zoom-header inicio">Iniciar sesión </Link>
                        <Link to="/registrarse" className="zoom-header">Registrarse </Link>
                    </>
                ) : (
                    <div className="dropdown dropdown_user">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {`${user.nombre} ${user.apePat}`}
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link to="/miconfiguracion" className="dropdown-item">Mi Información</Link></li>
                            <li><Link to="/miproyecto" className="dropdown-item">Mi Proyecto</Link></li>
                            <li><button onClick={handleLogout} className="dropdown-item">Cerrar Sesión</button></li>
                        </ul>
                    </div>
                )}


            </div>
        </section>

    );
}