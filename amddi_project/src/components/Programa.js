import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import '../styles/Programa.css';

export default function Testimonios() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <section className="ingresos_container">
            <div className="ingresos_description">

            <h2>Programa de Ingresos Extras</h2>
            <p>¿Tienes algún talento en áreas como diseño gráfico, redacción, programación, traducción u otras habilidades? ¡Gana ingresos extras desde la comodidad de tu hogar completando mini trabajos y proyectos freelance!

                Buscamos personas con diferentes habilidades para realizar trabajos cortos, no recurrentes y remunerados. Los proyectos pueden incluir diseño de gráficos, redacción creativa, programación web, entrada de datos, traducciones, transcripciones, etc.

                No se requiere experiencia previa ni compromisos a largo plazo. Tú eliges los proyectos según tus habilidades e intereses. El pago es por proyecto completado satisfactoriamente.

                Únete a nuestra comunidad freelance y empieza a ganar ingresos extra desde casa en tu tiempo libre. Los horarios y días de trabajo son totalmente flexibles. ¡Es una oportunidad perfecta para estudiantes, amas de casa, jubilados o cualquier persona que busque generar un ingreso adicional!</p>
            </div>
        </section >
    );
}