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
                        <img className="img_contador" src={require('../images/Carreras/ingeniero.png')} alt='medalla' />
                    </div>
                    <div className="container_slider">
                        <img className="img_contador" src={require('../images/Carreras/ingeniero.png')} alt='medalla' />
                    </div>
                    <div className="container_slider">
                        <img className="img_contador" src={require('../images/Carreras/ingeniero.png')} alt='medalla' />
                    </div>
                    <div className="container_slider">
                        <img className="img_contador" src={require('../images/Carreras/ingeniero.png')} alt='medalla' />
                    </div>
                    <div className="container_slider">
                        <img className="img_contador" src={require('../images/Carreras/ingeniero.png')} alt='medalla' />
                    </div>
                    <div className="container_slider">
                        <img className="img_contador" src={require('../images/Carreras/ingeniero.png')} alt='medalla' />
                    </div>
                </Slider>
            </div>
        );
    }
}