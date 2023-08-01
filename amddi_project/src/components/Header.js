import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import { HashLink } from 'react-router-hash-link'


export default function Header() {
    // const navigate = useNavigate();
    // function handleClickServices(e) {
    //     e.preventDefault();
    //     navigate('/AMDDI/servicios');
    // }

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
                                <Link to="/AMDDI/servicios" className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Nuestros Servicios
                                </Link>
                                <ul className="dropdown-menu bg-gris" >
                                    <li> <HashLink smooth to="/AMDDI/servicios#carreras" className="dropdown-item" >Carreras Asesoradas </HashLink> </li>
                                    <li> <HashLink smooth to="/AMDDI/servicios#redacciontesispregrado" className="dropdown-item" >Redacción de Tesis de Pregrado </HashLink> </li>
                                    <li> <HashLink smooth to="/AMDDI/servicios#redacciontesispostgrado" className="dropdown-item" >Redacción de Tesis de Postgrado </HashLink> </li>
                                    <li> <HashLink smooth to="/AMDDI/servicios#levantamientoobservacionespregrado" className="dropdown-item" >Levantamiento de Observaciones Pregrado </HashLink> </li>
                                    <li> <HashLink smooth to="/AMDDI/servicios#levantamientoobservacionesmaestria" className="dropdown-item" >Levantamiento de Observaciones Maestría </HashLink> </li>
                                    <li> <HashLink smooth to="/AMDDI/servicios#parafraseo" className="dropdown-item" >Parafraseo </HashLink> </li>
                                    <li> <HashLink smooth to="/AMDDI/servicios#trabajosuficienciaprofesional" className="dropdown-item" >Trabajo de Suficiencia Profesional </HashLink> </li>
                                    <li> <HashLink smooth to="/AMDDI/servicios#articulocientifico" className="dropdown-item" >Artículo Científico </HashLink> </li>
                                    <li> <HashLink smooth to="/AMDDI/servicios#articulorevisionsistematica" className="dropdown-item" >Artículo de Revisión Sistemática </HashLink> </li>
                                    <li> <HashLink smooth to="/AMDDI/servicios#articulorevisionliteratura" className="dropdown-item" >Artículo de Revisión de Literatura </HashLink> </li>
                                    <li> <HashLink smooth to="/AMDDI/servicios#trabajodeciclo" className="dropdown-item" >Trabajos de Ciclo </HashLink> </li>
                                    <li> <HashLink smooth to="/AMDDI/servicios#monografias" className="dropdown-item" >Monografía </HashLink> </li>
                                    <li> <HashLink smooth to="/AMDDI/servicios#ensayos" className="dropdown-item" >Ensayos </HashLink> </li>
                                    <li> <HashLink smooth to="/AMDDI/servicios#plannegocio" className="dropdown-item" >Planes de Negocio </HashLink> </li>
                                    <li> <HashLink smooth to="/AMDDI/servicios#informepracticas" className="dropdown-item" >Informe de Prácticas </HashLink> </li>
                                    <li> <HashLink smooth to="/AMDDI/servicios#tesinas" className="dropdown-item" >Tesinas </HashLink> </li>
                                    <li> <HashLink smooth to="/AMDDI/servicios#elaboracioncv" className="dropdown-item" >Elavoración de CV </HashLink> </li>
                                    <li> <HashLink smooth to="/AMDDI/servicios#dispositivas" className="dropdown-item" >Diapositivas </HashLink> </li>
                                    <li> <HashLink smooth to="/AMDDI/servicios#cursos" className="dropdown-item" >Curso Online: próximamente... </HashLink> </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/AMDDI/programadeingresos" className="nav-link">Programa de Ingresos Extra </Link>
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