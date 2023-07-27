import React from "react";
import '../styles/Testimonios.css'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Testimonios() {
    const settings = {
        speed: 500,
        slidesToShow: 4,
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
                            <div className="card-header">
                                {/* <img src="https://lorempixel.com/200/200/abstract/1"> */}
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    <div className="card-title">This is the First slider</div>
                                    <div className="card-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <div className="card-header">
                                {/* <img src="https://lorempixel.com/200/200/abstract/2"> */}
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    <div className="card-title">This is the Second slider</div>
                                    <div className="card-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <div className="card-header">
                                {/* <img src="https://lorempixel.com/200/200/abstract/3"> */}
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    <div className="card-title">This is the Third slider</div>
                                    <div className="card-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <div className="card-header">
                                {/* <img src="https://lorempixel.com/200/200/abstract/4"> */}
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    <div className="card-title">This is the Fourth slider</div>
                                    <div className="card-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <div className="card-header">
                                {/* <img src="https://lorempixel.com/200/200/abstract/5"> */}
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    <div className="card-title">This is the Fifth slider</div>
                                    <div className="card-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <div className="card-header">
                                {/* <img src="https://lorempixel.com/200/200/abstract/6"> */}
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    <div className="card-title">This is the Sixth slider</div>
                                    <div className="card-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Slider>
                </div>
            </div>
        </section >
    );
}