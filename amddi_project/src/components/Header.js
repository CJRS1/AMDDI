import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Header.css'

export default function Header() {
    const navigate = useNavigate();

    function handleClickServices(e) {
        e.preventDefault();
        navigate('/AMDDI/servicios');
    }
    return (
        <header className="header_container">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link to="/AMDDI" className="navbar-brand" href="#inicio"> <img src={require('../images/Logo_confondo.png')} alt='AMDDI' height={'100px'} />  </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/AMDDI" className="nav-link active" aria-current="page" href="#inicio">Inicio </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/AMDDI/servicios" className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleClickServices} >
                                    Nuestros Servicios
                                </Link>
                                <ul className="dropdown-menu bg-gris" >
                                    <li> <Link to="/AMDDI/servicios/redacciontesispregrado" className="dropdown-item" >Redacción de Tesis de Pregrado </Link> </li>
                                    <li> <Link to="/AMDDI/servicios/redacciontesispostgrado" className="dropdown-item" >Redacción de Tesis de Postgrado </Link> </li>
                                    <li> <Link to="/AMDDI/servicios/levantamientoobservacionespregrado" className="dropdown-item" >Levantamiento de Observaciones Pregrado </Link> </li>
                                    <li> <Link to="/AMDDI/servicios/levantamientoobservacionesmaestria" className="dropdown-item" >Levantamiento de Observaciones Maestría </Link> </li>
                                    <li> <Link to="/AMDDI/servicios/parafraseo" className="dropdown-item" >Parafraseo </Link> </li>
                                    <li> <Link to="/AMDDI/servicios/trabajosuficienciaprofesional" className="dropdown-item" >Trabajo de Suficiencia Profesional </Link> </li>
                                    <li> <Link to="/AMDDI/servicios/articulocientifico" className="dropdown-item" >Artículo Científico </Link> </li>
                                    <li> <Link to="/AMDDI/servicios/articulorevisionsistematica" className="dropdown-item" >Artículo de Revisión Sistemática </Link> </li>
                                    <li> <Link to="/AMDDI/servicios/articulorevisionliteratura" className="dropdown-item" >Artículo de Revisión de Literatura </Link> </li>
                                    <li> <Link to="/AMDDI/servicios/trabajodeciclo" className="dropdown-item" >Trabajos de Ciclo </Link> </li>
                                    <li> <Link to="/AMDDI/servicios/monografias" className="dropdown-item" >Monografía </Link> </li>
                                    <li> <Link to="/AMDDI/servicios/ensayos" className="dropdown-item" >Ensayos </Link> </li>
                                    <li> <Link to="/AMDDI/servicios/plannegocio" className="dropdown-item" >Planes de Negocio </Link> </li>
                                    <li> <Link to="/AMDDI/servicios/informepracticas" className="dropdown-item" >Informe de Prácticas </Link> </li>
                                    <li> <Link to="/AMDDI/servicios/tesinas" className="dropdown-item" >Tesinas </Link> </li>
                                    <li> <Link to="/AMDDI/servicios/elaboracioncv" className="dropdown-item" >Elavoración de CV </Link> </li>
                                    <li> <Link to="/AMDDI/servicios/dispositivas" className="dropdown-item" >Diapositivas </Link> </li>
                                    <li> <Link to="/AMDDI/servicios/cursos" className="dropdown-item" >Curso Online: próximamente... </Link> </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/AMDDI/nosotros" className="nav-link">Nosotros </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/AMDDI/testimonios" className="nav-link">Testimonios </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/AMDDI/contactanos" className="nav-link">Contáctanos </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}