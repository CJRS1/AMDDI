import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import '../styles/Login.css';

export default function Login({ setUser, setIsLoggedIn }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // console.log("el valor",setIsLoggedIn); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password,
            });
            // console.log(response);
            if (response.status === 200) {
                // console.log("Se inició sesión");
                // setIsLoggedIn(true);
                // console.log(email);
                const data = response.data;
                localStorage.setItem("token_user", data.token);
                const decodedToken = jwt_decode(data.token);
                console.log("Rol del usuario:", decodedToken.rol);
                setIsLoggedIn(true);
                
                try {
                    const responseUsuario = await axios.get(`http://localhost:5000/usuario_por_email/${email}`);

                    if (responseUsuario.status === 200) {
                        // console.log(responseUsuario.data.content);
                        setUser(responseUsuario.data.content);
                        localStorage.setItem('user', JSON.stringify(responseUsuario.data.content));
                        navigate({ pathname: "/" });
                        window.location.reload();
                    }
                } catch (error) {
                    console.error("Error al buscar el usuario:", error.response?.data?.message || "Error desconocido");
                }
            }

        } catch (error) {
            console.error('Error de autenticación:', error.response?.data?.msg || 'Error desconocido');
            console.log(error); // Agrega esta línea para mostrar el error completo en la consola
            alert('Error de autenticación: Correo o contraseña incorrectos', error.response?.data?.msg || 'Error desconocido');
        }
    }




    return (
        <section className="login_container">
            <div className="form_login_container">
                <div className="titulo_login">
                    <h2>Ingresar</h2>
                    <span className="linea"></span>
                </div>
                <form onSubmit={handleSubmit} className="form_login_user">
                    <input className="input_registro"
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input className="input_registro"
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="login_opciones">

                        <Link to="/recuperar_pwd" type="submit" className="login_preguntas">¿Has olvidado tu contraseña? <strong>Recupérala.</strong></Link>
                        <Link to="/registrarse" type="submit" className="login_preguntas">¿Aún no tienes cuenta? <strong>Regístrate</strong>.</Link>
                    </div>

                    <button className="button_logearse" type="submit">
                        Iniciar Sesión
                    </button>

                </form>
            </div>
        </section>

    );
}