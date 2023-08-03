import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import { HashLink } from 'react-router-hash-link'
import { useMediaQuery } from 'react-responsive';

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }
    function handleLinkClick() {
        setMenuOpen(false);
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const showMenu = (e) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    }



    const isMobile = useMediaQuery({ maxWidth: 768 });

    const menuClass = isMobile ? 'dropdown-menu-end' : '';

    return (
        <header className="header_container">
            <nav className="navbar navbar-expand-lg navbar_header_container">
                <div className="container-fluid contenedor_logo_menu">
                    <Link to="/AMDDI" className="navbar-brand" href="#inicio"> <img className='img_header' src={require('../images/Logo_confondo.png')} alt='AMDDI' height={'80px'} />  </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu} >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${menuOpen ? 'menu-open' : 'menu-closed'}`} id="navbarNavDropdown" >
                        <ul className="navbar-nav" >
                            {/* <li className="nav-item">
                                <Link to="/AMDDI" className="nav-link active" aria-current="page" >Inicio </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/AMDDI/nosotros" className="nav-link" onClick={handleLinkClick}>Nosotros </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/AMDDI/servicios" className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Nuestros Servicios
                                </Link>
                                <ul className={`dropdown-menu bg-gris ${menuClass}`} >
                                    <li> <HashLink to="/AMDDI/servicios#carreras" className="dropdown-item" onClick={handleLinkClick}>Carreras Asesoradas </HashLink> </li>
                                    {/* <li> <HashLink to="/AMDDI/servicios#redacciontesispregrado" className="dropdown-item" onClick={handleLinkClick}>Redacción de Tesis de Pregrado </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#redacciontesispostgrado" className="dropdown-item" onClick={handleLinkClick}>Redacción de Tesis de Postgrado </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#redacciontesismaestria" className="dropdown-item" onClick={handleLinkClick}>Redacción de Tesis de Maestría </HashLink> </li> */}
                                    <li className="dropdown li-redacciongeneral" onClick={showMenu}>
                                        <Link to="/AMDDI/servicios" className="dropdown-toggle li-redaccion-title">Redacción de Tesis</Link>
                                        {/* Menú desplegable para "Redacción de Tesis" */}
                                        <ul className="dropdown-menu-redaccion">
                                            <li> <HashLink to="/AMDDI/servicios#redacciontesispregrado" className="dropdown-item li-redaccion" onClick={handleLinkClick}>Redacción de Tesis de Pregrado </HashLink> </li>
                                            <li> <HashLink to="/AMDDI/servicios#redacciontesispostgrado" className="dropdown-item li-redaccion" onClick={handleLinkClick}>Redacción de Tesis de Postgrado </HashLink> </li>
                                            <li> <HashLink to="/AMDDI/servicios#redacciontesismaestria" className="dropdown-item li-redaccion" onClick={handleLinkClick}>Redacción de Tesis de Maestría </HashLink> </li>
                                        </ul>
                                    </li>
                                    <li> <HashLink to="/AMDDI/servicios#levantamientoobservacionespregrado" className="dropdown-item" onClick={handleLinkClick}>Levantamiento de Observaciones Pregrado </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#levantamientoobservacionesmaestria" className="dropdown-item" onClick={handleLinkClick}>Levantamiento de Observaciones Maestría </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#parafraseo" className="dropdown-item" onClick={handleLinkClick}>Parafraseo </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#trabajosuficienciaprofesional" className="dropdown-item" onClick={handleLinkClick}>Trabajo de Suficiencia Profesional </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#articulocientifico" className="dropdown-item" onClick={handleLinkClick}>Artículo Científico </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#articulorevisionsistematica" className="dropdown-item" onClick={handleLinkClick}>Artículo de Revisión Sistemática </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#articulorevisionliteratura" className="dropdown-item" onClick={handleLinkClick}>Artículo de Revisión de Literatura </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#trabajodeciclo" className="dropdown-item" onClick={handleLinkClick}>Trabajos de Ciclo </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#monografias" className="dropdown-item" onClick={handleLinkClick}>Monografía </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#ensayos" className="dropdown-item" onClick={handleLinkClick}>Ensayos </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#plannegocio" className="dropdown-item" onClick={handleLinkClick}>Planes de Negocio </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#informepracticas" className="dropdown-item" onClick={handleLinkClick}>Informe de Prácticas </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#tesinas" className="dropdown-item" onClick={handleLinkClick}>Tesinas </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#elaboracioncv" className="dropdown-item" onClick={handleLinkClick}>Elaboración de CV </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#dispositivas" className="dropdown-item" onClick={handleLinkClick}>Diapositivas </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#cursos" className="dropdown-item" onClick={handleLinkClick}>Curso Online: próximamente... </HashLink> </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/AMDDI/ingresosextra" className="nav-link" onClick={handleLinkClick}>Ingresos Extra </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/AMDDI/investigacionsostenible" className="nav-link" onClick={handleLinkClick}>Investigación Sostenible</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/AMDDI/emprendimientojoven" className="nav-link" onClick={handleLinkClick}>Emprendimiento Joven </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/AMDDI/testimonios" className="nav-link" onClick={handleLinkClick}>Testimonios </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/AMDDI/contactanos" className="nav-link" onClick={handleLinkClick}>Contáctanos </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}