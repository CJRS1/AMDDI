import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import '../styles/RecuperarC.css';

export default function RecuperarContraseña() {
    const location = useLocation();
    // const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [formCode, setFormCode] = useState({
        code1: '',
        code2: '',
        code3: '',
        code4: '',
    });

    const [showFormCode, setShowFormCode] = useState(true);

    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFormCode({ ...formCode, [name]: value });
    };

    const handleNextClick = (e) => {
        e.preventDefault();
        setShowFormCode(false);
    };


    const handleSubmit1 = async (e) => {
        e.preventDefault();

        // const verificationCode = `${formCode.code1}${formCode.code2}${formCode.code3}${formCode.code4}`;
        // console.log("concatenado:",verificationCode);

        // try {

        //     const response = await fetch("http://localhost:5000/verificacion", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({ verificationCode })

        //     });
        //     const data = await response.json();
        //     if (response.ok) {
        //         window.alert(data.msg);
        //         console.log(data.msg);
        //         navigate("/login")
        //     } else {
        //         // Mostrar mensaje de error
        //         window.alert(data.msg);
        //         console.error(data.msg);
        //     }

        // } catch (error) {
        //     // Manejo de errores
        // }

    };

    return (
        <section className="login_container">
            <div className="form_login_container">
                {showFormCode ? (
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
                    <button type="submit" onClick={handleNextClick} className="btn button-effect button_logearse" >Siguiente</button>
                </form>
                ) : (
                <form onSubmit={handleSubmit1} className="form_login_user">
                    <div className="titulo_login">
                    <h2>Escriba la nueva contraseña</h2>
                    <span className="linea"></span>
                </div>
                    <input className="input_registro"
                        type="password"
                        placeholder="Contraseña"
                        // value={password}
                        onChange={handleInputChange2}
                    />
                    <input className="input_registro"
                        type="password"
                        placeholder="Confirmar ontraseña"
                        // value={password}
                        onChange={handleInputChange2}
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