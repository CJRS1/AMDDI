import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import '../styles/Testimonios.css'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Testimonios() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
    };


    return (
        <section className="testimonios_container">
            <div className="wrapper">
                <h2 className="titulo-verde">Testimonios</h2>
                <div className="carousel carousel2">
                    <Slider {...settings}>
                        <div>
                            <div className="card">
                                <img className="img_contador" src={require('../images/Testimonios/captura1.png')} alt='medalla' />
                            </div>
                        </div>
                        <div>
                            <div className="card">
                                <img className="img_contador" src={require('../images/Testimonios/captura1.png')} alt='medalla' />
                            </div>
                        </div>
                        <div>
                            <div className="card">
                                <img className="img_contador" src={require('../images/Testimonios/captura1.png')} alt='medalla' />
                            </div>
                        </div>
                        <div>
                            <div className="card">
                                <img className="img_contador" src={require('../images/Testimonios/captura1.png')} alt='medalla' />
                            </div>
                        </div>
                        <div>
                            <div className="card">
                                <img className="img_contador" src={require('../images/Testimonios/captura1.png')} alt='medalla' />
                            </div>
                        </div>
                        <div>
                            <div className="card">
                                <img className="img_contador" src={require('../images/Testimonios/captura1.png')} alt='medalla' />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section >
    );
}