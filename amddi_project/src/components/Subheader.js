import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../styles/Subheader.css';

export default function Subheader() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <section className="subheader_container">
            <div className="subheader-content">
                <Link to="/login" className="zoom-header inicio">Iniciar sesión </Link>

                <Link to="/registrarse" className="zoom-header">Registrarse </Link>

                <Link to="/registrarse-p1" className="zoom-header">Registrarse </Link>

            </div>
        </section>

    );
}