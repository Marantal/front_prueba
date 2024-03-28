import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function Signup() {
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const auth = useAuth();

    if (auth.isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <DefaultLayout>
            <form className="form">
                <h1>Registrarse</h1>
                <label>Correo</label>
                <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} />

                <label>Contraseña</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <label>Confirmar contraseña</label>
                <input type="password" value={confirmar} onChange={(e) => setConfirmar(e.target.value)} />

                <button>Crear cuenta</button>
            </form>
        </DefaultLayout>

    );
}