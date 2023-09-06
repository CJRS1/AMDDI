import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import '../styles/Miconfiguracion.css';

export default function Miconfiguracion() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <section className="miconfiguracion_container">
            <h3>CONFIGURACIÓN</h3>
            <h4>Información <span><strong>Personal</strong></span></h4>
            <p>Actualiza tus datos personales:</p>
            <input className="input_config"
                type="text"
                placeholder="Nombre"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            />
            <input className="input_config"
                type="text"
                placeholder="Apellido Paterno"
                // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            />
            <input className="input_config"
                type="text"
                placeholder="Apellido Materno"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            />
            <input className="input_config"
                type="text"
                placeholder="DNI"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            />
            <input className="input_config"
                type="text"
                placeholder="Carrera"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            />
            <input className="input_config"
                type="text"
                placeholder="Mi Servicio"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            />
            <input className="input_config"
                type="password"
                placeholder="Contraseña"
                // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            />
            <button className="button_config" type="submit">
                        Actualizar datos
                        </button>
        </section>

    );
}