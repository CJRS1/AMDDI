import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import '../styles/Servicios.css'


export default function Servicios (){
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return(
        <section className="servicios_container">
            
        </section>
    );
}