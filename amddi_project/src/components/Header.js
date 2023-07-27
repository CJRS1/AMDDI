import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Header.css'

export default function Header() {
    const navigate = useNavigate();

    function handleClickServices(e) {
        e.preventDefault();
        navigate('/servicios');
    }
    return (
        <header className="header_container">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" href="#inicio"> <img src={require('../images/Logo_confondo.png')} alt='AMDDI' height={'100px'} />  </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" href="#inicio">Inicio </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/servicios" className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleClickServices} >
                                    Nuestros Servicios
                                </Link>
                                <ul className="dropdown-menu bg-gris" >
                                    <li> <Link to="/servicios/redacciontesispregrado" className="dropdown-item" >Redacción de Tesis de Pregrado </Link> </li>
                                    <li> <Link to="/servicios/redacciontesispostgrado" className="dropdown-item" >Redacción de Tesis de Postgrado </Link> </li>
                                    <li> <Link to="/servicios/levantamientoobservacionespregrado" className="dropdown-item" >Levantamiento de Observaciones Pregrado </Link> </li>
                                    <li> <Link to="/servicios/levantamientoobservacionesmaestria" className="dropdown-item" >Levantamiento de Observaciones Maestría </Link> </li>
                                    <li> <Link to="/servicios/parafraseo" className="dropdown-item" >Parafraseo </Link> </li>
                                    <li> <Link to="/servicios/trabajosuficienciaprofesional" className="dropdown-item" >Trabajo de Suficiencia Profesional </Link> </li>
                                    <li> <Link to="/servicios/articulocientifico" className="dropdown-item" >Artículo Científico </Link> </li>
                                    <li> <Link to="/servicios/articulorevisionsistematica" className="dropdown-item" >Artículo de Revisión Sistemática </Link> </li>
                                    <li> <Link to="/servicios/articulorevisionliteratura" className="dropdown-item" >Artículo de Revisión de Literatura </Link> </li>
                                    <li> <Link to="/servicios/trabajodeciclo" className="dropdown-item" >Trabajos de Ciclo </Link> </li>
                                    <li> <Link to="/servicios/monografias" className="dropdown-item" >Monografía </Link> </li>
                                    <li> <Link to="/servicios/ensayos" className="dropdown-item" >Ensayos </Link> </li>
                                    <li> <Link to="/servicios/plannegocio" className="dropdown-item" >Planes de Negocio </Link> </li>
                                    <li> <Link to="/servicios/informepracticas" className="dropdown-item" >Informe de Prácticas </Link> </li>
                                    <li> <Link to="/servicios/tesinas" className="dropdown-item" >Tesinas </Link> </li>
                                    <li> <Link to="/servicios/elaboracioncv" className="dropdown-item" >Elavoración de CV </Link> </li>
                                    <li> <Link to="/servicios/dispositivas" className="dropdown-item" >Diapositivas </Link> </li>
                                    <li> <Link to="/servicios/cursos" className="dropdown-item" >Curso Online: próximamente... </Link> </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/nosotros" className="nav-link">Nosotros </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/testimonios" className="nav-link">Testimonios </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contactanos" className="nav-link">Contáctanos </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}