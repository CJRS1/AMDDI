import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import '../styles/Registro.css';

export default function Registro3() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <section className="proyecto_container">
            <div className="proyecto_cuenta">
                <h3>¿Cómo va mi proyecto?</h3>
                <div className="porcentaje_proyecto">

                </div>
                <div className="parte_proyecto">
                    <div className="numero_parte">
                        <span>1</span>
                        <h4>Registro proyecto</h4>
                    </div>
                    <div className="numero_parte">
                        <span>2</span>
                        <h4>Asesor asignado</h4>
                    </div>
                    <div className="numero_parte">
                        <span>3</span>
                        <h4>Investigación</h4>
                    </div>
                    <div className="numero_parte">
                        <span>4</span>
                        <h4>Revisión completa</h4>
                    </div>
                </div>

                <h4>La fecha estimada de entrega es: 08/12/2023</h4>
            </div>

            <div className="proyecto_finalizado">
                <h4>Muchas gracias por congiar en AMDDI adjuntamos tu tesis. Ya estás a un solo paso del éxito y de una tesis aprobada.</h4>
                <button>Descargar</button>
            </div>
        </section>
    );
}