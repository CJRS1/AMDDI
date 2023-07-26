import React from "react";
import '../styles/Nosotros.css';

export default function Nosotros() {
    return (
        <section className="amddi_container">
            <div className="quienessomos">
                <div className="quienessomos-container">
                    <div className="quienessomos-descripcion">
                        <div className="img-titulo">
                            <img className="img-logo" src={require('../images/Logo_soloverde.png')} alt='AMDDI' height={'40px'} />
                            <h2>¿Quiénes somos?</h2>
                        </div>
                        <h4> <h1>AMDDI</h1>es una empresa líder en soluciones académicas y profesionales. Nuestro equipo de expertos altamente capacitados abarca diversas áreas para ofrecer servicios de redacción de tesis, artículos científicos, ensayos, y más. Brindamos resultados de calidad y confianza para impulsar el éxito de nuestros clientes en sus objetivos académicos y laborales.</h4>
                    </div>
                    <div className="quienessomos-img">
                        <img className="img-logo" src={require('../images/Logo_soloverde.png')} alt='AMDDI' height={'400px'} />
                    </div>
                </div>
            </div>
            <div className="vimi-container">
                <div className="vimi">
                    <div className="img-titulo">
                        <img className="img-logo" src={require('../images/Logo_soloverde.png')} alt='AMDDI' height={'40px'} />
                        <h2 className="titulo-vimi">Visión</h2>
                    </div>
                    <h4>Convertirnos en la mejor opción para aquellos que buscan asesoría en investigación y desarrollo de tesis, siendo reconocidos en la región y el Perú por nuestra experiencia, conocimiento y compromiso con nuestros clientes.</h4>
                </div>
                <div className="vimi">
                    <div className="img-titulo">
                        <img className="img-logo" src={require('../images/Logo_soloverde.png')} alt='AMDDI' height={'40px'} />
                        <h2 className="titulo-vimi">Misión</h2>
                    </div>
                    <h4>Ser una marca líder en el campo de la investigación y el desarrollo de tesis, ofreciendo servicios de alta calidad y soluciones innovadoras para satisfacer las necesidades de nuestros clientes. Nos comprometemos a trabajar con integridad, ética y profesionalismo para garantizar la excelencia en cada proyecto que realizamos.</h4>
                </div>
            </div>
        </section>
    );
}