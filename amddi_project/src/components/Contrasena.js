import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import '../styles/Registro.css';

export default function Contrasena() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <section className="proyecto_container">
            <div className="proyecto_cuenta">
                <h3>Ingrese la nueva contraseña dos veces</h3>
                <div className="parte_proyecto">
                    <div className="numero_parte">
                        <h4>Contraseña:</h4>
                        <input className="input_registro"
                        type="password"
                        name="contraseña"
                        placeholder="Contraseña"
                        // value={user.password}
                        // onChange={handleInputChange}
                    />
                    </div>
                    <div className="numero_parte">
                        <h4>Confirmar contraseña:</h4>
                        <input className="input_registro"
                        type="password"
                        name="contraseña"
                        placeholder="Contraseña"
                        // value={user.password}
                        // onChange={handleInputChange}
                    />
                    </div>
                </div>
                <button>Actualizar</button>
            </div>
        </section>
    );
}