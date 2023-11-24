import React, { useState }  from "react";
import { signOut } from 'firebase/auth'; 
import { auth } from './Firebase';
import { Navigate } from 'react-router-dom';

const SignOut = () => {
    const [isSessionClosed, setIsSessionClosed] = useState(false);

    const handleSignOut = async () => {
        try {
            await signOut(auth);          
            setIsSessionClosed(true);
        } catch (error) {
            console.error('Problemas al cerrar la sesión', error.message);
        }
    };
    // Si la sesión está cerrada, redirigir a la página de inicio de sesión
    if (isSessionClosed) {
        return <Navigate to="/signin" />;
    }
    return (
         <div>
            <button onClick={handleSignOut}>Cerrar Sesión</button>
            {isSessionClosed && <h4>Sesión Cerrada</h4>}
        </div>
    );
};

export default SignOut;
