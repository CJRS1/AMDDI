import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import { HashLink } from 'react-router-hash-link'


export default function Header() {

    return (
        <header className="header_container">
            <nav className="navbar navbar-expand-lg navbar_header_container">
                <div className="container-fluid contenedor_logo_menu">
                    <Link to="/AMDDI" className="navbar-brand" href="#inicio"> <img className='img_header' src={require('../images/Logo_confondo.png')} alt='AMDDI' height={'80px'} />  </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item">
                                <Link to="/AMDDI" className="nav-link active" aria-current="page" >Inicio </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/AMDDI/nosotros" className="nav-link">Nosotros </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/AMDDI/servicios" className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Nuestros Servicios
                                </Link>
                                <ul className="dropdown-menu bg-gris" >
                                    <li> <HashLink to="/AMDDI/servicios#carreras"  className="dropdown-item" >Carreras Asesoradas </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#redacciontesispregrado"  className="dropdown-item" >Redacción de Tesis de Pregrado </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#redacciontesispostgrado"  className="dropdown-item" >Redacción de Tesis de Postgrado </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#levantamientoobservacionespregrado"  className="dropdown-item" >Levantamiento de Observaciones Pregrado </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#levantamientoobservacionesmaestria"  className="dropdown-item" >Levantamiento de Observaciones Maestría </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#parafraseo"  className="dropdown-item" >Parafraseo </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#trabajosuficienciaprofesional"  className="dropdown-item" >Trabajo de Suficiencia Profesional </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#articulocientifico"  className="dropdown-item" >Artículo Científico </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#articulorevisionsistematica"  className="dropdown-item" >Artículo de Revisión Sistemática </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#articulorevisionliteratura"  className="dropdown-item" >Artículo de Revisión de Literatura </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#trabajodeciclo"  className="dropdown-item" >Trabajos de Ciclo </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#monografias"  className="dropdown-item" >Monografía </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#ensayos"  className="dropdown-item" >Ensayos </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#plannegocio"  className="dropdown-item" >Planes de Negocio </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#informepracticas" className="dropdown-item" >Informe de Prácticas </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#tesinas"  className="dropdown-item" >Tesinas </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#elaboracioncv"  className="dropdown-item" >Elaboración de CV </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#dispositivas"  className="dropdown-item" >Diapositivas </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#cursos"  className="dropdown-item" >Curso Online: próximamente... </HashLink> </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/AMDDI/ingresosextra" className="nav-link">Ingresos Extra </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/AMDDI/investigacionsostenible" className="nav-link">Investigación Sostenible</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/AMDDI/emprendimientojoven" className="nav-link">Emprendimiento Joven </Link>
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