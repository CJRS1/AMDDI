import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class CenterMode extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0px",
            slidesToShow: 3,
            focusOnSelect: true,
            dots: true,
            arrows: false,
            speed: 500,
            responsive: [
                {
                    breakpoint: 910, // Puedes ajustar este breakpoint según tus necesidades
                    settings: {
                        slidesToShow: 1, // Cambiar la cantidad de imágenes mostradas en pantallas más pequeñas
                    }
                }
            ]
        };
        return (
            <div className="slider">
                <Slider {...settings}>
                    <div className="container_slider">
                        <img className="img_profesiones" src={require('../images/Carreras/ingeniero.png')} alt='medalla' />
                    </div>
                    <div className="container_slider">
                        <img className="img_profesiones" src={require('../images/Carreras/csalud.png')} alt='medalla' />
                    </div>
                    <div className="container_slider">
                        <img className="img_profesiones" src={require('../images/Carreras/cempresariales.png')} alt='medalla' />
                    </div>
                    <div className="container_slider">
                        <img className="img_profesiones" src={require('../images/Carreras/cbioyagro.png')} alt='medalla' />
                    </div>
                    <div className="container_slider">
                        <img className="img_profesiones" src={require('../images/Carreras/csociales.png')} alt='medalla' />
                    </div>
                    <div className="container_slider">
                        <img className="img_profesiones" src={require('../images/Carreras/cbasicas.png')} alt='medalla' />
                    </div>
                </Slider>
            </div>
        );
    }
}
