import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import '../styles/Miproyecto.css';

export default function Miproyecto() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const max = 0.25; // Cambia esto para establecer el progreso máximo (en este caso, 25%)
        let progress = 0;

        const interval = setInterval(() => {
            if (progress >= max) {
                clearInterval(interval);
            } else {
                progress += 0.01;
                setPercent(progress);
            }
        }, 10);

        return () => clearInterval(interval);
    }, []);

    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - percent);

    return (
        <section className="miproyecto_container">
            <h3>MI PROYECTO</h3>
            <h4>¿Cómo va mi proyecto?</h4>
            <div className="progreso_container">
                <svg width="200" height="200" viewBox="0 0 200 200">
                    <circle
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="transparent"
                        stroke="#aaa"
                        strokeWidth="10"
                    />
                    <circle
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="transparent"
                        stroke="#555"
                        strokeWidth="10"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                    />
                    <text
                        x="100"
                        y="110"
                        textAnchor="middle"
                        fontSize="18"
                        fill="black"
                    >{`${Math.round(percent * 100)}%`}</text>
                </svg>
                <button>Descargar avance</button>
            </div>
            <div className="etapa_container">
                <div className="etapa_card">
                    <span>1</span>
                    <span>Proyecto registrado</span>
                </div>
                <div className="etapa_card">
                    <span>2</span>
                    <span>Asesor asignado</span>
                </div>
                <div className="etapa_card">
                    <span>3</span>
                    <span>Proceso de investigación</span>
                </div>
                <div className="etapa_card">
                    <span>3</span>
                    <span>Revisión completa</span>
                </div>
                <p>La fecha estimada de entrega es: 08/12/2023</p>
            </div>
        </section>

    );
}