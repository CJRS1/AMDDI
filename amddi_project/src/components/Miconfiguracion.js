import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import '../styles/Miconfiguracion.css';

function loadUserFromLocalStorage() {
    const userJson = localStorage.getItem("user");
    return userJson ? JSON.parse(userJson) : null;
}


export default function Miconfiguracion({ user }) {
    const location = useLocation();

    // const [localUser, setLocalUser] = useState(loadUserFromLocalStorage() || user);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [formData, setFormData] = useState({
        nombre: user ? user.nombre : "",
        apePat: user ? user.apePat : "",
        apeMat: user ? user.apeMat : "",
        dni: user ? user.dni : "",
        carrera: user ? user.carrera : "",
        departamento: user ? user.departamento : "",
    });

    const [isEditable, setIsEditable] = useState(false);

    const handleActualizarClick = () => {
        setIsEditable(true);
    };

    const handleInputChange = (e) => {
        if (isEditable) {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos actualizados al servidor o realizar alguna acción
        // en función de los valores en formData.
        // Por ahora, solo simulamos una actualización de datos imprimiendo en la consola.
        console.log("Datos actualizados:", formData);
        setIsEditable(false); // Deshabilita la edición después de enviar el formulario
    };

    return (
        <section className="miconfiguracion_container">
            <h3>CONFIGURACIÓN</h3>
            <h4>Información <span><strong>Personal</strong></span></h4>
            <p>Actualiza tus datos personales:</p>
            <form className="form_info" onSubmit={handleSubmit}>
                <input
                    className="input_config"
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    readOnly={!isEditable}
                />
                <input
                    className="input_config"
                    type="text"
                    name="apePat"
                    placeholder="Apellido Paterno"
                    value={formData.apePat}
                    onChange={handleInputChange}
                    readOnly={!isEditable}
                />
                <input
                    className="input_config"
                    type="text"
                    name="apeMat"
                    placeholder="Apellido Materno"
                    value={formData.apeMat}
                    onChange={handleInputChange}
                    readOnly={!isEditable}
                />
                <input
                    className="input_config"
                    type="text"
                    name="dni"
                    placeholder="DNI"
                    value={formData.dni}
                    onChange={handleInputChange}
                    readOnly={!isEditable}
                />
                <input
                    className="input_config"
                    type="text"
                    name="carrera"
                    placeholder="Carrera"
                    value={formData.carrera}
                    onChange={handleInputChange}
                    readOnly={!isEditable}
                />
                <input
                    className="input_config"
                    type="text"
                    name="departamento"
                    placeholder="Departamento"
                    value={formData.departamento}
                    onChange={handleInputChange}
                    readOnly={!isEditable}
                />
                <input className="input_config"
                    type="text"
                    placeholder="Mi Servicio"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                />
                <input className="input_config"
                    type="password"
                    placeholder="Contraseña"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                />
                <button className="button_config" type="submit">
                    Actualizar datos
                </button>
            </form>
        </section>

    );
}