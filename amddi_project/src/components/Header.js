import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import { HashLink } from 'react-router-hash-link'
import { useMediaQuery } from 'react-responsive';


export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [lastId, setLastId] = useState('');

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }
    function handleLinkClick() {
        setMenuOpen(false);
    }

    //Esta función soluciona los errores que tiene boostrap
    function handleLinkNavigation(targetId) {
        const targetElement = document.getElementById(targetId);
    
        setLastId(targetId);
        setTimeout(() => {
            if (targetElement) {
                const rect = targetElement.getBoundingClientRect();
                const yOffset = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
                const targetOffsetTop = rect.top + yOffset;
    
                window.scrollTo({
                    top: targetOffsetTop,
                    behavior: 'smooth'
                });
            }
        }, targetId === lastId ? 0 : 100);
    }
    

    const isMobile = useMediaQuery({ maxWidth: 768 });

    const menuClass = isMobile ? 'dropdown-menu-end' : '';

    return (
        <header className="header_container">
            <nav className="navbar navbar-expand-lg navbar_header_container">
                <div className="container-fluid contenedor_logo_menu">
                    <Link to="" className="navbar-brand" href="#inicio"> <img className='img_header' src={require('../images/Logo_plomo.png')} alt='AMDDI' height={'70px'} />  </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu} >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`disable-bootstrap-animations collapse navbar-collapse ${menuOpen ? 'menu-open' : 'menu-closed'}`} id="navbarNavDropdown" >
                        <ul className="navbar-nav" >
                            {/* <li className="nav-item">
                                <Link to="" className="nav-link active" aria-current="page" >Inicio </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/nosotros" className="nav-link" onClick={handleLinkClick}>NOSOTROS </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/servicios" className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    NUESTROS SERVICIOS
                                </Link>
                                <ul className={`dropdown-menu bg-gris ${menuClass}`} >
                                    <li> <HashLink to="/servicios#carreras" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('carreras'); }}>Carreras Asesoradas </HashLink> </li>
                                    {/* <li> <HashLink to="/servicios#redacciontesispregrado" className="dropdown-item" smooth={false} onClick={handleLinkClick}>Redacción de Tesis de Pregrado </HashLink> </li>
                                    <li> <HashLink to="/servicios#redacciontesispostgrado" className="dropdown-item" smooth={false} onClick={handleLinkClick}>Redacción de Tesis de Postgrado </HashLink> </li>
                                    <li> <HashLink to="/servicios#redacciontesismaestria" className="dropdown-item" smooth={false} onClick={handleLinkClick}>Redacción de Tesis de Maestría </HashLink> </li> */}
                                    <li className="dropdown li-redacciongeneral" >
                                        <HashLink to="/servicios#redacciontesispregrado" className="dropdown-toggle li-redaccion-title">Redacción de Tesis</HashLink>
                                        {/* Menú desplegable para "Redacción de Tesis" */}
                                        <ul className="dropdown-menu-redaccion">
                                            <li> <HashLink to="/servicios#redacciontesispregrado" className="dropdown-item li-redaccion" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('redacciontesispregrado'); }}>Redacción de Tesis de Pregrado </HashLink> </li>
                                            <li> <HashLink to="/servicios#redacciontesispostgrado" className="dropdown-item li-redaccion" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('redacciontesispostgrado'); }}>Redacción de Tesis de Postgrado </HashLink> </li>
                                            <li> <HashLink to="/servicios#redacciontesisdoctorado" className="dropdown-item li-redaccion" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('redacciontesisdoctorado'); }}>Redacción de Tesis de Doctorado </HashLink> </li>
                                        </ul>
                                    </li>
                                    <li> <HashLink to="/servicios#redacciontesispregrado" className="dropdown-item li-redaccion hidden" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('redacciontesispregrado'); }}>Redacción de Tesis de Pregrado </HashLink> </li>
                                    <li> <HashLink to="/servicios#redacciontesispostgrado" className="dropdown-item li-redaccion hidden" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('redacciontesispostgrado'); }}>Redacción de Tesis de Postgrado </HashLink> </li>
                                    <li> <HashLink to="/servicios#redacciontesisdoctorado" className="dropdown-item li-redaccion hidden" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('redacciontesisdoctorado'); }}>Redacción de Tesis de Doctorado </HashLink> </li>
                                    <li> <HashLink to="/servicios#levantamientoobservacionespregrado" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('levantamientoobservacionespregrado'); }}>Levantamiento de Observaciones Pregrado </HashLink> </li>
                                    <li> <HashLink to="/servicios#levantamientoobservacionesmaestria" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('levantamientoobservacionesmaestria'); }}>Levantamiento de Observaciones Maestría </HashLink> </li>
                                    <li> <HashLink to="/servicios#parafraseo" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('parafraseo'); }}>Parafraseo </HashLink> </li>
                                    <li> <HashLink to="/servicios#trabajosuficienciaprofesional" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('trabajosuficienciaprofesional'); }}>Trabajo de Suficiencia Profesional </HashLink> </li>
                                    <li> <HashLink to="/servicios#articulocientifico" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('articulocientifico'); }}>Artículo Científico </HashLink> </li>
                                    <li> <HashLink to="/servicios#articulorevisionsistematica" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('articulorevisionsistematica'); }}>Artículo de Revisión Sistemática </HashLink> </li>
                                    <li> <HashLink to="/servicios#articulorevisionliteratura" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('articulorevisionliteratura'); }}>Artículo de Revisión de Literatura </HashLink> </li>
                                    {/* <li> <HashLink to="/servicios#trabajodeciclo" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('trabajodeciclo'); }}>Trabajos de Ciclo </HashLink> </li> */}
                                    <li> <HashLink to="/servicios#monografias" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('monografias'); }}>Monografía </HashLink> </li>
                                    {/* <li> <HashLink to="/servicios#ensayos" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('ensayos'); }}>Ensayos </HashLink> </li> */}
                                    <li> <HashLink to="/servicios#plannegocio" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('plannegocio'); }}>Planes de Negocio </HashLink> </li>
                                    <li> <HashLink to="/servicios#informepracticas" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('informepracticas'); }}>Informe de Prácticas </HashLink> </li>
                                    <li> <HashLink to="/servicios#tesinas" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('tesinas'); }}>Tesinas </HashLink> </li>
                                    {/* <li> <HashLink to="/servicios#elaboracioncv" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('elaboracioncv'); }}>Elaboración de CV </HashLink> </li> */}
                                    <li> <HashLink to="/servicios#dispositivas" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('dispositiva'); }}>Diapositivas </HashLink> </li>
                                    <li> <HashLink to="/servicios#cursos" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('cursos'); }}>Curso Online: próximamente... </HashLink> </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/ingresosextra" className="nav-link" onClick={handleLinkClick}>INGRESOS EXTRA </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/investigacionsostenible" className="nav-link" onClick={handleLinkClick}>INVESTIGACIÓN SOSTENIBLE</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/emprendimientojoven" className="nav-link" onClick={handleLinkClick}>EMPRENDIMIENTO JÓVEN</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/testimonios" className="nav-link" onClick={handleLinkClick}>TESTIMONIOS </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contactanos" className="nav-link" onClick={handleLinkClick}>CONTÁCTANOS </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}