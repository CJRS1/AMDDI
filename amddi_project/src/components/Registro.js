import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Registro.css';

export default function Registro() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    const [currentStep, setCurrentStep] = useState(1);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleInputChange1 = (event) => {
        const { name, value } = event.target;
        setFormData1({ ...formData1, [name]: value });
    }

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
        console.log(formData);

    }

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    }


    const [formData, setFormData] = useState({
        nombre: "",
        apePat: "",
        apeMat: "",
        dni: "",
        carrera: "",
        departamento: "",

    });
    const [formData1, setFormData1] = useState({
        celular: "",
        email: "",
        pwd_hash: "",
        confirma_pwd_hash: "",
    });

    const validateForm = () => {
        const errors = {};
        let isValid = true;

        for (const [key, value] of Object.entries(formData)) {
            if (!value) {
                errors[key] = "Campo obligatorio";
                isValid = false;
            }
        }

        // setFormErrors(errors);
        return isValid;
    };

    const handleRegistrationSuccess = () => {
        // Limpiar los campos del formulario después del registro exitoso
        setFormData({
            nombre: "",
            apePat: "",
            apeMat: "",
            dni: "",
            carrera: "",
            departamento: "",
        });
        setFormData1({
            celular: "",
            email: "",
            pwd_hash: "",
            confirma_pwd_hash: "",
        });
    };

    const [email, setEmail] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        // if (formData.especialidades.length === 0) {
        //     setFormErrors({
        //         ...formErrors,
        //         especialidades: "Seleccione al menos una especialidad"
        //     });
        //     return;
        // }

        try {
            const fullFormData = {
                ...formData,
                ...formData1,
            };


            console.log("El formulario entregado es", fullFormData);

            if (!fullFormData.pwd_hash || !fullFormData.confirma_pwd_hash) {
                console.error("Por favor, completa ambos campos de contraseña");
                window.alert("Por favor, completa ambos campos de contraseña");
                return;
            }

            if (fullFormData.pwd_hash !== fullFormData.confirma_pwd_hash) {
                console.error("Las contraseñas no coinciden");
                window.alert("Las contraseñas no coinciden");
                return;
            }

            setEmail(formData1.email);
            console.log(formData1.email);

            const response = await fetch("http://localhost:5000/user_t", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(fullFormData)
            });
            const data = await response.json();
            if (response.ok) {
                console.log(data.msg);
                handleRegistrationSuccess();
                handleNextStep();
            } else {
                // Mostrar mensaje de error
                window.alert(data.msg);
                console.error(data.msg);
            }

        } catch (error) {
            // Manejo de errores
        }
    };

    const [especialidades, setEspecialidades] = useState([]);


    useEffect(() => {
        const obtenerEspecialidades = async () => {
            try {
                const response = await fetch("http://localhost:5000/especialidades");
                const data = await response.json();
                console.log(data);

                // Accede a la propiedad 'content' para obtener el array de especialidades
                setEspecialidades(data.content);
            } catch (error) {
                console.error("Error al obtener las especialidades:", error);
            }
        };

        obtenerEspecialidades();
    }, []);

    const [formCode, setFormCode] = useState({
        code1: '',
        code2: '',
        code3: '',
        code4: '',
    });


    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFormCode({ ...formCode, [name]: value });
    };

    const handleSubmit1 = async (e) => {
        e.preventDefault();

        // Concatenar los valores de los cuatro campos en un solo valor
        const verificationCode = `${formCode.code1}${formCode.code2}${formCode.code3}${formCode.code4}`;
        console.log("concatenado:",verificationCode);
        console.log("email:",email);
        try {

            const response = await fetch("http://localhost:5000/verificacion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, verificationCode })

            });
            const data = await response.json();
            if (response.ok) {
                window.alert(data.msg);
                console.log(data.msg);
                navigate("/login")
            } else {
                // Mostrar mensaje de error
                window.alert(data.msg);
                console.error(data.msg);
            }

        } catch (error) {
            // Manejo de errores
        }

    };



    return (
        <div>
            <section className="registro_container">
                {currentStep === 1 && (
                    <div className="form_registro_container">
                        <h2 className="titulo_registro">Creación de cuenta</h2>
                        <div className="secciones_registro_container">
                            <span className="secciones_registro bg_green">1</span>
                            <div className="linea_entre_circulos"></div>
                            <span className="secciones_registro">2</span>
                            <div className="linea_entre_circulos"></div>
                            <span className="secciones_registro">3</span>
                        </div>
                        <form className="form_registro" onSubmit={handleSubmit}>
                            <input className="input_registro"
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                value={formData.nombre}
                                onChange={handleInputChange}
                            />
                            <input className="input_registro"
                                type="text"
                                name="apePat"
                                placeholder="Apellido Paterno"
                                value={formData.apePat}
                                onChange={handleInputChange}
                            />
                            <input className="input_registro"
                                type="text"
                                name="apeMat"
                                placeholder="Apellido Materno"
                                value={formData.apeMat}
                                onChange={handleInputChange}
                            />
                            <input className="input_registro"
                                type="text"
                                name="dni"
                                placeholder="DNI"
                                value={formData.dni}
                                onChange={handleInputChange}
                            />
                            {/* <input className="input_registro"
                                type="text"
                                name="career"
                                placeholder="Carrera"
                                value={formData.carrera}
                                onChange={handleInputChange}
                            /> */}
                            <select
                                className="form-control my-input input_card input_especialidad"
                                id="especialidad"
                                name="carrera"
                                value={formData.carrera}
                                onChange={handleInputChange}
                            >
                                <option value="">Selecciona una carrera</option>
                                {especialidades.map((especialidad) => (
                                    <option key={especialidad.id} value={especialidad.nombre_especialidad}>
                                        {especialidad.nombre_especialidad}
                                    </option>
                                ))}
                            </select>


                            <select className="form-control my-input input_card" name="departamento" id="contact-method" defaultValue="" value={formData.departamento} onChange={handleInputChange} required>
                                <option value="" disabled >Seleccione un departamento</option>
                                <option value="Ancash">Ancash</option>
                                <option value="Apurímac">Apurímac</option>
                                <option value="Arequipa">Arequipa</option>
                                <option value="Ayacucho">Ayacucho</option>
                                <option value="Cajamarca">Cajamarca</option>
                                <option value="Callao">Callao</option>
                                <option value="Cusco">Cusco</option>
                                <option value="Huancavelica">Huancavelica</option>
                                <option value="Huánuco">Huánuco</option>
                                <option value="Ica">Ica</option>
                                <option value="Junín">Junín</option>
                                <option value="La Libertad">La Libertad</option>
                                <option value="Lambayeque">Lambayeque</option>
                                <option value="Lima">Lima</option>
                                <option value="Loreto">Loreto</option>
                                <option value="Madre de Dios">Madre de Dios</option>
                                <option value="Moquegua">Moquegua</option>
                                <option value="Pasco">Pasco</option>
                                <option value="Piura">Piura</option>
                                <option value="Puno">Puno</option>
                                <option value="San Martín">San Martín</option>
                                <option value="Tacna">Tacna</option>
                                <option value="Tumbes">Tumbes</option>
                                <option value="Ucayali">Ucayali</option>
                            </select>


                            {/* <button type="submit">Registrarse</button> */}


                            <button type="button" className="btn button-effect button_logearse" onClick={handleNextStep}>Siguiente</button>

                        </form>

                    </div>
                )}

                {currentStep === 2 && (
                    <div className="form_registro_container">
                        <h2 className="titulo_registro">Creación de cuenta</h2>
                        <div className="secciones_registro_container">
                            <span className="secciones_registro bg_green">1</span>
                            <div className="linea_entre_circulos linea_green"></div>
                            <span className="secciones_registro bg_green">2</span>
                            <div className="linea_entre_circulos"></div>
                            <span className="secciones_registro">3</span>
                        </div>
                        <form onSubmit={handleSubmit} className="form_registro">
                            <input className="input_registro"
                                type="text"
                                name="celular"
                                placeholder="Número celular"
                                value={formData1.celular}
                                onChange={handleInputChange1}
                            />
                            <input className="input_registro"
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                value={formData1.email}
                                onChange={handleInputChange1}
                            />
                            <input
                                className="input_registro"
                                type="password"
                                name="pwd_hash"
                                placeholder="Contraseña"
                                value={formData1.pwd_hash}
                                onChange={handleInputChange1}
                            />
                            <input
                                className="input_registro"
                                type="password"
                                name="confirma_pwd_hash"
                                placeholder="Confirma la contraseña"
                                value={formData1.confirma_pwd_hash}
                                onChange={handleInputChange1}
                            />

                            {/* Resto de los campos para el segundo paso */}
                            <button type="button" className="btn button-effect button_logearse" onClick={handlePrevStep}>Atrás</button>
                            <button type="submit" className="btn button-effect button_logearse" >Siguiente</button>
                        </form>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="form_registro_container">
                        <h2 className="titulo_registro">Creación de cuenta</h2>
                        <div className="secciones_registro_container">
                            <span className="secciones_registro bg_green">1</span>
                            <div className="linea_entre_circulos linea_green"></div>
                            <span className="secciones_registro bg_green">2</span>
                            <div className="linea_entre_circulos linea_green"></div>
                            <span className="secciones_registro bg_green">3</span>
                        </div>
                        <form onSubmit={handleSubmit1} className="form_registro_codigo">
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
                            <button type="submit" className="btn button-effect button_logearse" >Finalizar</button>
                        </form>
                    </div>
                )}
            </section>
        </div>
    );
}
