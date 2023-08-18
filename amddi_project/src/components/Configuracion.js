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
        <section className="configuracion_container">
            <div className="configuracion_cuenta">
                <h3>Configuracion de la cuenta</h3>
                <h3>Información personal</h3>

                <div className="configuracion_datos">
                    <h4>Nombre:</h4>
                    <span><h4>Christian</h4></span>
                    <button><img className='img_header' src={require('../images/actualizar.png')} alt='actualizar' height={'50px'} /></button>
                </div>

                <div className="configuracion_datos">
                    <h4>Apellido Paterno:</h4>
                    <span><h4>Reyes</h4></span>
                    <button><img className='img_header' src={require('../images/actualizar.png')} alt='actualizar' height={'50px'} /></button>
                </div>

                <div className="configuracion_datos">
                    <h4>Apellido Materno:</h4>
                    <span><h4>Sotelo</h4></span>
                    <button><img className='img_header' src={require('../images/actualizar.png')} alt='actualizar' height={'50px'} /></button>
                </div>

                <div className="configuracion_datos">
                    <h4>DNI:</h4>
                    <span><h4>72532091</h4></span>
                    <button><img className='img_header' src={require('../images/actualizar.png')} alt='actualizar' height={'50px'} /></button>
                </div>

                <div className="configuracion_datos">
                    <h4>Departamento:</h4>
                    <span><h4>Lima</h4></span>
                    <button><img className='img_header' src={require('../images/actualizar.png')} alt='actualizar' height={'50px'} /></button>
                </div>

                <div className="configuracion_datos">
                    <h4>Contraseña:</h4>
                    <span><h4>*****************</h4></span>
                    <button><img className='img_header' src={require('../images/actualizar.png')} alt='actualizar' height={'50px'} /></button>
                </div>

                <h3>¿Qué servicio deseo?</h3>
                <div className="configuracion_datos">
                <h3>Mi servicio:</h3>
                <select className="form-control my-input input_card" name="departamento" style={{ width: '300px' }} id="contact-method" defaultValue="" required>
                    <option value="" disabled >Seleccione un servicio</option>
                    <option value="redacciontesispregrado">Redacción de Tesis de Pregrado</option>
                    <option value="redacciontesispostgrado">Redacción de Tesis de Postgrado</option>
                    <option value="redacciontesisdoctorado">Redacción de Tesis de Doctorado</option>
                    <option value="levantamientoobservacionespregrado">Levantamiento de Observaciones Pregrado</option>
                    <option value="levantamientoobservacionesmaestria">Levantamiento de Observaciones Maestría</option>
                    <option value="parafraseo">Parafraseo</option>
                    <option value="trabajosuficienciaprofesional">Trabajo de Suficiencia Profesiona</option>
                    <option value="articulocientifico">Artículo Científic</option>
                    <option value="articulorevisionsistematica">Artículo de Revisión Sistemática</option>
                    <option value="articulorevisionliteratura">Artículo de Revisión de Literatura</option>
                    <option value="trabajodeciclo">Trabajos de Ciclo</option>
                    <option value="monografias">Monografía</option>
                    <option value="ensayos">Ensayos</option>
                    <option value="plannegocio">Planes de Negoci</option>
                    <option value="informepracticas">Informe de Prácticas</option>
                    <option value="tesinas">Tesinas</option>
                    <option value="elaboracioncv">Elaboración de CV</option>
                    <option value="dispositiva">Diapositivas</option>
                    <option value="cursos">Curso Online: próximamente... </option>
                </select>
                <button>Guardar</button>
                </div>

            </div>
        </section>

    );
}