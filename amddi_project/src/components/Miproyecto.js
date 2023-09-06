import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useLocation } from 'react-router-dom';
import '../styles/Miproyecto.css';

export default function Miproyecto() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    const percentage = 50;

    return (
        <section className="miproyecto_container">
            <h3>MI PROYECTO</h3>
            <h4>¿Cómo va mi <span><strong>proyecto?</strong></span></h4>
            <div className="proyect_card">
                <div className="progreso_container">

                    <CircularProgressbar
                        className="circle_pro"
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                            // Cambiar el color del círculo a amarillo
                            pathColor: '#00d799',
                            // Cambiar el color del texto a amarillo
                            textColor: '#00d799',
                        })}
                        // Aumentar el ancho del trazo (strokeWidth) del círculo
                        strokeWidth={15} // Ajusta el valor según tu preferencia
                    />

                    <button className="proyect_btn btn_avance">Descargar avance</button>

                </div>
                <div className="etapa_container">
                    <div className="etapa_card">
                        <span className="circle_span bg_dorado"><strong>1</strong></span>
                        <p>Proyecto registrado</p>
                    </div>
                    <div className="etapa_card">
                        <span className="circle_span"><strong>2</strong></span>
                        <p>Asesor asignado</p>
                    </div>
                    <div className="etapa_card">
                        <span className="circle_span"><strong>3</strong></span>
                        <p>Proceso de investigación</p>
                    </div>
                    <div className="etapa_card">
                        <span className="circle_span"><strong>4</strong></span>
                        <p>Revisión completa</p>
                    </div>
                    <p className="fecha_entrega">La fecha estimada de entrega es: <strong>08/12/2023</strong></p>
                </div>
            </div>
            <div className="proyecto_fin_container">
                <h5><span>¿Muchas gracias por confiar en AMDDI!</span></h5>
                <span>Adjuntamos <span><strong>tu tesis</strong></span></span>
                <button className="proyect_btn">Descargar</button>
                <p>Ya estás a un solo paso del éxito y de un proyecto aprobado</p>
            </div>
        </section>

    );
}