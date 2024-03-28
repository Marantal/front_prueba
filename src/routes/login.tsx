import DefaultLayout from "../layout/DefaultLayout";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { useState } from "react";

export default function Login() {
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();

    if(auth.isAuthenticated){
        return <Navigate to="/dashboard"/>;
    }

    return (
        <DefaultLayout>
            <form className="form">
                <h1>Iniciar Sesion</h1>
                <label>Correo</label>
                <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)}/>

                <label>Contraseña</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>

                <button>Iniciar sesión</button>
            </form>
        </DefaultLayout>

    );
}