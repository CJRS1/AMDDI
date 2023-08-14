import React, { useEffect} from "react";
import { useLocation } from 'react-router-dom';
import '../styles/Registro.css';

export default function Registro3() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // const [user, setUser] = useState({
    //     name: '',
    //     lastName: '',
    //     career: '',
    //     dni: '',
    //     email: '',
    //     password: ''
    // });


    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setUser({ ...user, [name]: value });
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <section className="registro_container">
            <div className="form_registro">

                <h2 className="titulo">Escribe tu correo y contraseña</h2>
                <form onSubmit={handleSubmit} >

                    <input
                        type="text"
                        pattern="[A-Za-z]*"
                        maxLength={1}
                    />
                    <input
                        type="text"
                        pattern="[A-Za-z]*"
                        maxLength={1}
                    />
                    <input
                        type="text"
                        pattern="[A-Za-z]*"
                        maxLength={1}
                    />
                    <input
                        type="text"
                        pattern="[A-Za-z]*"
                        maxLength={1}
                    />

                    <button type="submit">Crear</button>


                </form>
            </div>
        </section>

    );
}