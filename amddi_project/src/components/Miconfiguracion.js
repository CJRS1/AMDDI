import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import '../styles/Login.css';

export default function Miconfiguracion() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <section className="miconfiguracion_container">

        </section>

    );
}