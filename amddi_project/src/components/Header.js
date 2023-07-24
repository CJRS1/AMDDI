import React from 'react'
import '../styles/Header.css'

export default function Header() {
    return (
        <header class="header_container">
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#inicio"> <img src={require('../images/Logo_blanco.png')} alt='AMDDI' height={'400px'}/> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#inicio">Inicio</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle " href="#nuestrosservicios" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Nuestros Servicios
                                </a>
                                <ul class="dropdown-menu bg-gris">
                                    <li><a class="dropdown-item" href="#e">Redacción de Tesis de Pregrado</a></li>
                                    <li><a class="dropdown-item" href="#e">Redacción de Tesis de Postgrado</a></li>
                                    <li><a class="dropdown-item" href="#e">Levantamiento de Observaciones Pregrado</a></li>
                                    <li><a class="dropdown-item" href="#e">Levantamiento de Observaciones Maestría</a></li>
                                    <li><a class="dropdown-item" href="#e">Parafraseo</a></li>
                                    <li><a class="dropdown-item" href="#e">Trabajo de Suficiencia Profesional</a></li>
                                    <li><a class="dropdown-item" href="#e">Artículo Científico</a></li>
                                    <li><a class="dropdown-item" href="#e">Artículo de Revisión Sistemática</a></li>
                                    <li><a class="dropdown-item" href="#e">Artículo de Revisión de Literatura</a></li>
                                    <li><a class="dropdown-item" href="#e">Trabajos de Ciclo</a></li>
                                    <li><a class="dropdown-item" href="#e">Monografía</a></li>
                                    <li><a class="dropdown-item" href="#e">Ensayos</a></li>
                                    <li><a class="dropdown-item" href="#e">Planes de Negocio</a></li>
                                    <li><a class="dropdown-item" href="#e">Informe de Prácticas</a></li>
                                    <li><a class="dropdown-item" href="#e">Tesinas</a></li>
                                    <li><a class="dropdown-item" href="#e">Elavoración de CV</a></li>
                                    <li><a class="dropdown-item" href="#e">Diapositivas</a></li>
                                    <li><a class="dropdown-item" href="#e">Curso Online: próximamente...</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#e">Nosotros</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#e">Testimonios</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#e">Contáctanos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}