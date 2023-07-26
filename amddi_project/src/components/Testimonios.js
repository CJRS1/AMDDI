import React, { useState, useEffect } from "react";
import '../styles/Testimonios.css'

let interval;
const images = [
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1497449493050-aad1e7cad165?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',

];

export default function Testimonios() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            slideRight();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const slideLeft = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };

    const slideRight = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === images.length - 1 ? prevSlide : prevSlide + 1
        );
    };

    const onMouseEnter = () => {
        clearInterval(interval);
    };

    const onMouseLeave = () => {
        const interval = setInterval(() => {
            slideRight();
        }, 3000);
    };

    return (
        <section
            className="testimonios_container"
            style={{ width: "1400px" }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <h2>Testimonios</h2>

            <div className="carousel">
                <button className="prevButton" onClick={slideLeft}>
                    Prev
                </button>

                <div className="slider">
                    <div
                        className="slider-frame"
                        style={{
                            transform: `translateX(-${currentSlide * 300}px)`,
                            transition: "transform 0.3s ease-in-out",
                        }}
                    >
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt="imagen"
                                style={{ width: "300px", height: "400px" }}
                            />
                        ))}
                    </div>
                </div>

                <button className="nextButton" onClick={slideRight}>
                    Next
                </button>
            </div>
        </section>
    );
}