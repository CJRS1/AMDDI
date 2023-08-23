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
            slidesToShow: 5,
            focusOnSelect: true,
            speed: 500,
            responsive: [
                {
                    breakpoint: 768, // Puedes ajustar este breakpoint según tus necesidades
                    settings: {
                        slidesToShow: 3, // Cambiar la cantidad de imágenes mostradas en pantallas más pequeñas
                    }
                }
            ]
        };
        return (
            <div className="slider">
                <Slider {...settings}>
                    <div>
                        <img className="img_contador" src={require('../images/Testimonios/mockup1.png')} alt='medalla' />
                    </div>
                    <div>
                        <img className="img_contador" src={require('../images/Testimonios/mockup1.png')} alt='medalla' />
                    </div>
                    <div>
                        <img className="img_contador" src={require('../images/Testimonios/mockup1.png')} alt='medalla' />
                    </div>
                    <div>
                        <img className="img_contador" src={require('../images/Testimonios/mockup1.png')} alt='medalla' />
                    </div>
                    <div>
                        <img className="img_contador" src={require('../images/Testimonios/mockup1.png')} alt='medalla' />
                    </div>
                    <div>
                        <img className="img_contador" src={require('../images/Testimonios/mockup1.png')} alt='medalla' />
                    </div>
                </Slider>
            </div>
        );
    }
}