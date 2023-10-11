import React, { useEffect, useState } from "react";
import axios from 'axios';
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
        // Verificar si al menos uno de los campos obligatorios está lleno
        if (
            formData.nombre &&
            formData.apePat &&
            formData.apeMat &&
            formData.carrera &&
            formData.pais &&
            formData.departamento
        ) {
            // Verificar si formData.dni contiene solo dígitos y tiene la longitud adecuada
            const validDniRegex = /^[0-9]+$/; // Expresión regular que verifica que solo contiene dígitos

            if (!validDniRegex.test(formData.dni)) {
                // Si no contiene solo dígitos, muestra una alerta
                alert('El campo DNI debe contener solo dígitos.');
                return; // Detener el avance si no contiene solo dígitos
            }

            let validLength = false;

            // Verificar la longitud del DNI o INE según el país seleccionado
            switch (formData.pais) {
                case 'México':
                    validLength = formData.dni.length === 18;
                    break;
                case 'Perú':
                    validLength = formData.dni.length === 8 || formData.dni.length === 20;
                    break;
                case 'Bolivia':
                    validLength = formData.dni.length === 11;
                    break;
                case 'Colombia':
                    validLength = formData.dni.length === 10;
                    break;
                case 'Costa Rica':
                    validLength = formData.dni.length === 9;
                    break;
                case 'Cuba':
                    validLength = formData.dni.length === 11;
                    break;
                case 'Ecuador':
                    validLength = formData.dni.length === 10;
                    break;
                case 'Venezuela':
                    validLength = formData.dni.length === 7 || formData.dni.length === 8;
                    break;
                default:
                    validLength = true; // No se aplica verificación de longitud para otros países
                    break;
            }

            if (!validLength) {
                alert('La longitud del documento de identificación no es la adecuada para el país seleccionado.');
                return; // Detener el avance si la longitud no es la adecuada
            }

            // Al menos uno de los campos obligatorios está lleno, DNI es válido y tiene la longitud adecuada
            setCurrentStep(currentStep + 1);
            console.log(formData);
        } else {
            // Mostrar una alerta en JavaScript si todos los campos están vacíos
            alert('Completa todos los campos antes de avanzar.');
        }
    };



    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    }


    const [formData, setFormData] = useState({
        nombre: "",
        apePat: "",
        apeMat: "",
        dni: "",
        carrera: "",
        pais: "",
        departamento: "",

    });
    const [formData1, setFormData1] = useState({
        celular: "",
        email: "",
        pwd_hash: "",
        confirma_pwd_hash: "",
    });

    const [departamentos, setDepartamentos] = useState([]);

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
            pais: "",
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

            switch (formData.pais) {
                case 'Perú':
                    // Verificar si formData.celular es un número y tiene 9 caracteres para Perú
                    const celularRegexPeru = /^[0-9]+$/;
                    if (!celularRegexPeru.test(fullFormData.celular) || fullFormData.celular.length !== 9) {
                        console.error("El número de celular no es válido para Perú");
                        window.alert("El número de celular no es válido para Perú");
                        return;
                    }
                    break;

                case 'Bolivia':
                    // Verificar si formData.celular es un número y tiene 8 caracteres para Bolivia
                    const celularRegexBolivia = /^[0-9]+$/;
                    if (!celularRegexBolivia.test(fullFormData.celular) || fullFormData.celular.length !== 8) {
                        console.error("El número de celular no es válido para Bolivia");
                        window.alert("El número de celular no es válido para Bolivia");
                        return;
                    }
                    break;

                case 'Colombia':
                    // Verificar si formData.celular es un número y tiene 10 caracteres para Colombia
                    const celularRegexColombia = /^[0-9]+$/;
                    if (!celularRegexColombia.test(fullFormData.celular) || fullFormData.celular.length !== 10) {
                        console.error("El número de celular no es válido para Colombia");
                        window.alert("El número de celular no es válido para Colombia");
                        return;
                    }
                    break;

                case 'Costa Rica':
                    // Verificar si formData.celular es un número y tiene 8 caracteres para Costa Rica
                    const celularRegexCostaRica = /^[0-9]+$/;
                    if (!celularRegexCostaRica.test(fullFormData.celular) || fullFormData.celular.length !== 8) {
                        console.error("El número de celular no es válido para Costa Rica");
                        window.alert("El número de celular no es válido para Costa Rica");
                        return;
                    }
                    break;

                case 'Cuba':
                    // Verificar si formData.celular es un número y tiene 8 caracteres para Cuba
                    const celularRegexCuba = /^[0-9]+$/;
                    if (!celularRegexCuba.test(fullFormData.celular) || fullFormData.celular.length !== 8) {
                        console.error("El número de celular no es válido para Cuba");
                        window.alert("El número de celular no es válido para Cuba");
                        return;
                    }
                    break;

                case 'Ecuador':
                    // Verificar si formData.celular es un número y tiene 10 caracteres para Ecuador
                    const celularRegexEcuador = /^[0-9]+$/;
                    if (!celularRegexEcuador.test(fullFormData.celular) || fullFormData.celular.length !== 10) {
                        console.error("El número de celular no es válido para Ecuador");
                        window.alert("El número de celular no es válido para Ecuador");
                        return;
                    }
                    break;

                case 'Venezuela':
                    // Verificar si formData.celular es un número y tiene 7 u 8 caracteres para Venezuela
                    const celularRegexVenezuela = /^[0-9]+$/;
                    if (
                        !celularRegexVenezuela.test(fullFormData.celular) ||
                        (fullFormData.celular.length !== 7 && fullFormData.celular.length !== 8)
                    ) {
                        console.error("El número de celular no es válido para Venezuela");
                        window.alert("El número de celular no es válido para Venezuela");
                        return;
                    }
                    break;

                case 'México':
                    // Verificar si formData.celular es un número y tiene 10 caracteres para México
                    const celularRegexMexico = /^[0-9]+$/;
                    if (!celularRegexMexico.test(fullFormData.celular) || fullFormData.celular.length !== 10) {
                        console.error("El número de celular no es válido para México");
                        window.alert("El número de celular no es válido para México");
                        return;
                    }
                    break;

                default:
                    // No se aplica verificación específica para otros países
                    break;
            }


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

            const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

            if (!passwordRegex.test(fullFormData.pwd_hash)) {
                console.error("La contraseña debe tener al menos 6 caracteres, incluyendo una letra mayúscula, un número y un signo de exclamación.");
                window.alert("La contraseña debe tener al menos 6 caracteres, incluyendo una letra mayúscula, un número y un signo de exclamación.");
                return;
            }

            setEmail(formData1.email);
            console.log(formData1.email);

            const response = await fetch("https://amddibackend-production-2880.up.railway.app/user_t", {
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
        // const obtenerEspecialidades = async () => {
        //     try {
        //         /* const response = await fetch("http://localhost:5000/especialidades") */
        //         const response = await fetch("https://amddi.com/backend/especialidades");
        //         const data = await response.json();
        //         // console.log(data);

        //         // Accede a la propiedad 'content' para obtener el array de especialidades
        //         setEspecialidades(data.content);
        //     } catch (error) {
        //         console.error("Error al obtener las especialidades:", error);
        //     }
        // };
        console.log("hola");
        const cargarEspecialidades = async () => {

            try {
                console.log("3");
                const response = await axios.get("https://amddibackend-production-2880.up.railway.app/especialidades");
                console.log(response);
                console.log("hola");
                setEspecialidades(response.data.content);
            } catch (error) {
                console.error(error);
            }

        };

        cargarEspecialidades();
        // obtenerEspecialidades();
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
        console.log("concatenado:", verificationCode);
        console.log("email:", email);
        try {

            const response = await fetch("https://amddibackend-production-2880.up.railway.app/verificacion", {
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

    useEffect(() => {

        // Hacer una solicitud para obtener datos de los departamentos cuando se cambie el país seleccionado
        if (formData.pais) {
            // Aquí deberías realizar una solicitud a la API adecuada para obtener los departamentos del país seleccionado
            // y luego actualizar el estado "departments" con la respuesta del servidor.
            // Esto dependerá de cómo esté estructurada tu base de datos y tu servidor.
            // Por ahora, simularemos los departamentos de forma estática.

            // Simulación de los departamentos
            const departmentsForCountry = getDepartmentsForCountry(formData.pais);
            setDepartamentos(departmentsForCountry);
        } else {
            setDepartamentos([]); // Limpiar los departamentos si no hay un país seleccionado.
        }
    }, [formData.pais]);

    const getDepartmentsForCountry = (country) => {
        switch (country) {
            case 'Perú':
                return ['Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho', 'Cajamarca', 'Callao', 'Cusco', 'Huancavelica', 'Huánuco', 'Ica', 'Junín', 'La Libertad', 'Lambayeque', 'Lima', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 'Puno', 'San Martín', 'Tacna', 'Tumbes', 'Ucayali'];
            case 'Bolivia':
                return ['La Paz', 'Santa Cruz', 'Cochabamba', 'Potosí', 'Oruro', 'Tarija', 'Chuquisaca', 'Beni', 'Pando'];
            case 'Colombia':
                return ['Amazonas', 'Antioquia', 'Arauca', 'Atlántico', 'Bogotá D.C.', 'Bolívar', 'Boyacá', 'Caldas', 'Caquetá', 'Casanare', 'Cauca', 'Cesar', 'Chocó', 'Córdoba', 'Cundinamarca', 'Guainía', 'Guaviare', 'Huila', 'La Guajira', 'Magdalena', 'Meta', 'Nariño', 'Norte de Santander', 'Putumayo', 'Quindío', 'Risaralda', 'San Andrés y Providencia', 'Santander', 'Sucre', 'Tolima', 'Valle del Cauca', 'Vaupés', 'Vichada'];
            case 'Costa Rica':
                return ['San José', 'Alajuela', 'Heredia', 'Cartago', 'Guanacaste', 'Puntarenas', 'Limón'];
            case 'Cuba':
                return ['La Habana', 'Pinar del Río', 'Artemisa', 'Mayabeque', 'Isla de la Juventud', 'Matanzas', 'Cienfuegos', 'Villa Clara', 'Sancti Spíritus', 'Ciego de Ávila', 'Camagüey', 'Las Tunas', 'Granma', 'Holguín', 'Santiago de Cuba', 'Guantánamo'];
            case 'Ecuador':
                return ['Azuay', 'Bolívar', 'Cañar', 'Carchi', 'Chimborazo', 'Cotopaxi', 'El Oro', 'Esmeraldas', 'Galápagos', 'Guayas', 'Imbabura', 'Loja', 'Los Ríos', 'Manabí', 'Morona Santiago', 'Napo', 'Orellana', 'Pastaza', 'Pichincha', 'Santa Elena', 'Santo Domingo de los Tsáchilas', 'Sucumbíos', 'Tungurahua', 'Zamora-Chinchipe'];
            case 'Venezuela':
                return ['Amazonas', 'Anzoátegui', 'Apure', 'Aragua', 'Barinas', 'Bolívar', 'Carabobo', 'Cojedes', 'Delta Amacuro', 'Falcón', 'Guárico', 'Lara', 'Mérida', 'Miranda', 'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Táchira', 'Trujillo', 'Vargas', 'Yaracuy', 'Zulia'];
            case 'México':
                return ['Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'México', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'];
            default:
                return [];
        }
    };


    return (

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
                            {/* <select className="form-control my-input input_card pais_select" name="pais" id="contact-method" defaultValue="" value={formData.pais} onChange={handleInputChange} required>
                                <option value="" disabled >Seleccione un país</option>
                                <option value="Bolivia">CI Boliviano</option>
                                <option value="Cuba">CI Cubano</option>
                                <option value="Colombia">CC</option>
                                <option value="Costa Rica">CI Costa Rica</option>
                                <option value="Ecuador">CI Ecuatoriano</option>
                                <option value="México">INE</option>
                                <option value="Perú">DNI</option>
                                <option value="Venezuela">CI Venezolano</option>
                                <option value="CE">Carnet de Extranjerìa</option>
                            </select> */}

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

                            <select className="form-control my-input input_card pais_select" name="pais" id="contact-method"
                                value={formData.pais} onChange={handleInputChange} required>
                                <option value="" disabled >Seleccione un país</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="México">México</option>
                                <option value="Perú">Perú</option>
                                <option value="Venezuela">Venezuela</option>
                            </select>

                            <select className="form-control my-input input_card pais_select" name="departamento" id="contact-method" value={formData.departamento} onChange={handleInputChange} required>
                                <option value="" disabled >Seleccione un departamento</option>
                                {/* <option value="Ancash">Ancash</option> */}
                                {departamentos.map((departamento) => (
                                    <option key={departamento} value={departamento}>
                                        {departamento}
                                    </option>
                                ))}
                            </select>

                            <input className="input_registro"
                                type="text"
                                name="dni"
                                placeholder="Ingrese su DNI o CI o CC o INE o Carnet de Extranjería"
                                value={formData.dni}
                                onChange={handleInputChange}
                            />


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
                                placeholder="Número celular: Ejemplo 987456111"
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

    );
}
