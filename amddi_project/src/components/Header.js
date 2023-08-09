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
    function handleLinkNavigation(targetId) {

        const targetElement = document.getElementById(targetId);
        console.log('hola')
        if (targetElement) {
            // Calcula el desplazamiento para tener en cuenta encabezados fijos u otros elementos
            const offset = 100; // Ajusta este valor según sea necesario
            const topPos = targetElement.getBoundingClientRect().top + window.scrollY - offset;
    
            window.scrollTo({ top: topPos, behavior: 'smooth' });

            window.location.hash = targetId;
        }
    }

    const isMobile = useMediaQuery({ maxWidth: 768 });

    const menuClass = isMobile ? 'dropdown-menu-end' : '';

    return (
        <header className="header_container">
            <nav className="navbar navbar-expand-lg navbar_header_container">
                <div className="container-fluid contenedor_logo_menu">
                    <Link to="/AMDDI" className="navbar-brand" href="#inicio"> <img className='img_header' src={require('../images/Logo_plomo.png')} alt='AMDDI' height={'100px'} />  </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu} >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`disable-bootstrap-animations collapse navbar-collapse ${menuOpen ? 'menu-open' : 'menu-closed'}`} id="navbarNavDropdown" >
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
                                    <li> <HashLink to="/AMDDI/servicios#carreras" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('carreras'); }}>Carreras Asesoradas </HashLink> </li>
                                    {/* <li> <HashLink to="/AMDDI/servicios#redacciontesispregrado" className="dropdown-item" smooth={false} onClick={handleLinkClick}>Redacción de Tesis de Pregrado </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#redacciontesispostgrado" className="dropdown-item" smooth={false} onClick={handleLinkClick}>Redacción de Tesis de Postgrado </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#redacciontesismaestria" className="dropdown-item" smooth={false} onClick={handleLinkClick}>Redacción de Tesis de Maestría </HashLink> </li> */}
                                    <li className="dropdown li-redacciongeneral" >
                                        <Link to="/AMDDI/servicios" className="dropdown-toggle li-redaccion-title">Redacción de Tesis</Link>
                                        {/* Menú desplegable para "Redacción de Tesis" */}

                                        <ul className="dropdown-menu-redaccion">
                                            <li> <HashLink to="/AMDDI/servicios#redacciontesispregrado" className="dropdown-item li-redaccion" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('redacciontesispregrado'); }}>Redacción de Tesis de Pregrado </HashLink> </li>
                                            <li> <HashLink to="/AMDDI/servicios#redacciontesispostgrado" className="dropdown-item li-redaccion" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('redacciontesispostgrado'); }}>Redacción de Tesis de Postgrado </HashLink> </li>
                                            <li> <HashLink to="/AMDDI/servicios#redacciontesismaestria" className="dropdown-item li-redaccion" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('redacciontesismaestria'); }}>Redacción de Tesis de Maestría </HashLink> </li>
                                        </ul>
                                    </li>
                                    <li> <HashLink to="/AMDDI/servicios#redacciontesispregrado" className="dropdown-item li-redaccion hidden" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('redacciontesispregrado'); }}>Redacción de Tesis de Pregrado </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#redacciontesispostgrado" className="dropdown-item li-redaccion hidden" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('redacciontesispostgrado'); }}>Redacción de Tesis de Postgrado </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#redacciontesismaestria" className="dropdown-item li-redaccion hidden" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('redacciontesismaestria'); }}>Redacción de Tesis de Maestría </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#levantamientoobservacionespregrado" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('levantamientoobservacionespregrado'); }}>Levantamiento de Observaciones Pregrado </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#levantamientoobservacionesmaestria" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('levantamientoobservacionesmaestria'); }}>Levantamiento de Observaciones Maestría </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#parafraseo" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('parafraseo'); }}>Parafraseo </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#trabajosuficienciaprofesional" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('trabajosuficienciaprofesional'); }}>Trabajo de Suficiencia Profesional </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#articulocientifico" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('articulocientifico'); }}>Artículo Científico </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#articulorevisionsistematica" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('articulorevisionsistematica'); }}>Artículo de Revisión Sistemática </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#articulorevisionliteratura" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('articulorevisionliteratura'); }}>Artículo de Revisión de Literatura </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#trabajodeciclo" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('trabajodeciclo'); }}>Trabajos de Ciclo </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#monografias" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('monografias'); }}>Monografía </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#ensayos" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('ensayos'); }}>Ensayos </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#plannegocio" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('plannegocio'); }}>Planes de Negocio </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#informepracticas" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('informepracticas'); }}>Informe de Prácticas </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#tesinas" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('tesinas'); }}>Tesinas </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#elaboracioncv" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('elaboracioncv'); }}>Elaboración de CV </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#dispositivas" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('dispositiva'); }}>Diapositivas </HashLink> </li>
                                    <li> <HashLink to="/AMDDI/servicios#cursos" className="dropdown-item" smooth={false} onClick={() => { handleLinkClick(); handleLinkNavigation('cursos'); }}>Curso Online: próximamente... </HashLink> </li>
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