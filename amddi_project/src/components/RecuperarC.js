import React, { useEffect, useState } from "react";
import { useLocation, useNavigate  } from 'react-router-dom';
import axios from 'axios';
import '../styles/RecuperarC.css';

export default function RecuperarContraseña() {
    const location = useLocation();
    // const navigate = useNavigate();
    const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [email, setEmail] = useState("");
    const [pwd_hash, setpwd_hash] = useState("");
    const [confirm_pwd_hash, setconfirm_pwd_hash] = useState("");

    const [formCode, setFormCode] = useState({
        code1: '',
        code2: '',
        code3: '',
        code4: '',
    });



    const [showFormCode, setShowFormCode] = useState(1);

    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFormCode({ ...formCode, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://amddibackend-production-2880.up.railway.app/cv_por_email/${email}`, {
            });
            // console.log(response);
            if (response.status === 200) {
                setShowFormCode(showFormCode + 1);
            }

        } catch (error) {
            console.error('Error de autenticación:', error.response?.data?.msg || 'Error desconocido');
            console.log(error); // Agrega esta línea para mostrar el error completo en la consola
        }
    };
    const handleSubmit1 = async (e) => {
        e.preventDefault();
        const codigoVerificacion = `${formCode.code1}${formCode.code2}${formCode.code3}${formCode.code4}`;
        try {
            const response = await axios.post(`https://amddibackend-production-2880.up.railway.app/verificar_code/${email}`, {
                email,
                codigoVerificacion,
            });
            // console.log(response);
            if (response.status === 200) {
                setShowFormCode(showFormCode + 1);
            }

        } catch (error) {
            console.error('Error de autenticación:', error.response?.data?.msg || 'Error desconocido');
            console.log(error); // Agrega esta línea para mostrar el error completo en la consola
        }
    };
    const handleSubmit2 = async (e) => {
        e.preventDefault();
        if (pwd_hash === confirm_pwd_hash){
            try {
                const response = await axios.put(`https://amddibackend-production-2880.up.railway.app/usuario/${email}`, {
                    pwd_hash,
                });
                // console.log(response);
                if (response.status === 201) {
                    setShowFormCode(1);
                    navigate({ pathname: "/" });

                }
    
            } catch (error) {
                console.error('Error de autenticación:', error.response?.data?.msg || 'Error desconocido');
                console.log(error); // Agrega esta línea para mostrar el error completo en la consola
            }
        } else {
            alert('Las contraseñas no son las mismas');
        }
    };

    return (
        <section className="login_container">
            <div className="form_login_container">
                {showFormCode === 1 && (
                    <form onSubmit={handleSubmit} className="form_registro_codigo">
                        <div className="titulo_login">
                            <h2>Recuperar Contraseña</h2>
                            <span className="linea"></span>
                        </div>
                        <h3>Ingrese su correo:</h3>
                        <div className="codigo_partes">
                            <input className="input_registro"
                                type="text"
                                name="email"
                                placeholder=""
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn button-effect button_logearse" >Siguiente</button>
                    </form>
                )}

                {showFormCode === 2 && (
                    <form onSubmit={handleSubmit1} className="form_registro_codigo">
                        <div className="titulo_login">
                            <h2>Recuperar Contraseña</h2>
                            <span className="linea"></span>
                        </div>
                        <h3>Ingrese los 4 dígitos del código que le llegó a su correo:</h3>
                        <div className="codigo_partes">
                            <input className="input_codigo"
                                type="text"
                                name="code1"
                                placeholder=""
                                value={formCode.code1}
                                onChange={handleInputChange2}
                            />
                            <input className="input_codigo"
                                type="text"
                                name="code2"
                                placeholder=""
                                value={formCode.code2}
                                onChange={handleInputChange2}
                            />
                            <input className="input_codigo"
                                type="text"
                                name="code3"
                                placeholder=""
                                value={formCode.code3}
                                onChange={handleInputChange2}
                            />
                            <input className="input_codigo"
                                type="text"
                                name="code4"
                                placeholder=""
                                value={formCode.code4}
                                onChange={handleInputChange2}
                            />
                        </div>
                        <h3>Ingrese el <strong>código</strong> enviado a su correo registrado anteriormente.</h3>
                        {/* Resto de los campos para el tercer paso */}
                        <button type="submit" className="btn button-effect button_logearse" >Siguiente</button>
                    </form>
                )}
                {showFormCode === 3 && (
                    <form onSubmit={handleSubmit2} className="form_login_user">
                        <div className="titulo_login">
                            <h2>Escriba la nueva contraseña</h2>
                            <span className="linea"></span>
                        </div>
                        <input className="input_registro"
                            type="password"
                            placeholder="Contraseña"
                            value={pwd_hash}
                            onChange={(e) => setpwd_hash(e.target.value)}
                        />
                        <input className="input_registro"
                            type="password"
                            placeholder="Confirmar ontraseña"
                            value={confirm_pwd_hash}
                            onChange={(e) => setconfirm_pwd_hash(e.target.value)}
                        />

                        <button className="button_logearse" type="submit">
                            Cambiar Contraseña
                        </button>

                    </form>
                )}
            </div>
        </section>

    );
}