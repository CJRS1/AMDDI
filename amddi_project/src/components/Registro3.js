import React, {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../styles/Registro.css';

export default function Registro3() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [user, setUser] = useState({
        name: '',
        lastName: '',
        career: '',
        dni: '',
        email: '',
        password: ''
    });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }



    return (
        <section className="registro_container">
            <div className="form_registro_container">
                <h2 className="titulo_registro">Creación de cuenta</h2>
                <div className="secciones_registro_container">
                    <span className="secciones_registro">1</span>
                    <span className="secciones_registro">2</span>
                    <span className="secciones_registro">3</span>
                </div>
                <form onSubmit={handleSubmit} className="form_registro_codigo">
                    <h3>Código:</h3>
                    <input className="input_registro_codigo"
                        type="text"
                        name="codigo1"
                        placeholder=""
                        value={user.codigo1}
                        onChange={handleInputChange}
                    />
                    <input className="input_registro_codigo"
                        type="text"
                        name="codigo2"
                        placeholder=""
                        value={user.codigo2}
                        onChange={handleInputChange}
                    />
                    <input className="input_registro_codigo"
                        type="text"
                        name="codigo3"
                        placeholder=""
                        value={user.codigo3}
                        onChange={handleInputChange}
                    />
                    <input className="input_registro_codigo"
                        type="text"
                        name="codigo4"
                        placeholder=""
                        value={user.codigo4}
                        onChange={handleInputChange}
                    />
                </form>
                    <Link to="/login" className="btn button-effect btn_registro" type="submit">Finalizar</Link>
            </div>
        </section>

    );
}