import React, { useEffect, useState } from "react";
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useLocation } from 'react-router-dom';
import '../styles/Miproyecto.css';

export default function Miproyecto() {
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState([]);
    const [estados, setEstados] = useState([]);


    useEffect(() => {
        window.scrollTo(0, 0);

        // Obtener el token del localStorage
        const token = localStorage.getItem('token_user');

        // Verificar si el token existe
        if (token) {
            // Si el token existe, realiza una solicitud al servidor para obtener los datos del usuario
            axios.get('https://amddibackend-production-2880.up.railway.app/usuario', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    // console.log("hola")
                    setEstados(response.data.content.estados);
                    setCurrentUser(response.data.content.usuario);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [location]);

    // Encuentra el estado correspondiente en estados que coincide con currentUser.estado
    const estadoCoincidente = estados.find((estado) => estado.estado === currentUser.estado);


    let percentage = 0;

    // Verifica si se encontró un estado coincidente
    if (estadoCoincidente) {
        // Obtiene el índice del estado coincidente
        const index = estados.indexOf(estadoCoincidente);
        // console.log(index);
        // console.log(estados.length);
        // Calcula el porcentaje en función del índice y la longitud de estados
        percentage = (((index + 1) / estados.length) * 100).toFixed(1);

        // console.log(`Porcentaje: ${percentage}%`);
    } 
    // else {
    //     console.log("No se encontró un estado coincidente.");
    // }

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

                    {currentUser.pdf_url && currentUser.pdf_url.length > 0 && (
                        <a
                            href={`https://amddibackend-production-2880.up.railway.app${currentUser.pdf_url[currentUser.pdf_url.length - 1].pdf_url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            download="true"  // Cambia "nombre_del_archivo.pdf" al nombre deseado
                            className="proyect_btn btn_avance"
                        >
                            Descargar avance
                        </a>
                    )}


                </div>
                <div className="etapa_container">
                    {estados.map((estado, index) => (
                        <div className="etapa_card" key={index} >
                            {/* ${estado.estado === currentUser.estado ? 'bg_dorado' : ''} */}
                            <span className={`circle_span ${estado.estado === currentUser.estado ? 'bg_dorado' : ''}`}>
                                <strong>{estado.id}</strong>
                            </span>
                            <span className={`${estado.estado === currentUser.estado ? 'color_dorado' : ''}`}> {estado.estado} </span>
                        </div>
                    ))}
                    <p className="fecha_entrega">La fecha estimada de entrega es: <strong>{currentUser.fecha_estimada}</strong></p>
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