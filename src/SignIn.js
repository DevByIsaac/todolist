import React from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom'; 
import './css/SignIn.css';


const SignIn = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const navigate = useNavigate();  // Obtén la instancia de history

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword (auth, email, password);
            //alert("Inicio correcto")
            navigate("/taskpage");
        } catch (error) {
            setError(error.message);
            console.error('Problemas al iniciar sesión:', setError);
            //alert("Problemas al iniciar sesión", setError);
        }
    };
    const handleSignUp = async (e) =>{
      e.preventDefault();
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/taskpage");
      } catch (error) {
        setError(error.message);
        console.error('Problemas con el registro de usuario', setError);
      }
    }
    return (
        <div className="container">
          <form onSubmit={handleSignIn}>
            <div className="form-group">
               <h1 className="titulo">LOGIN - LISTADO DE TAREAS</h1>
              <label className="label">Correo electrónico:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
              />
            </div>
            <div className="form-group">
              <label className="label">Contraseña:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              />
            </div>
            <button type="submit" className="button" onChange={handleSignIn}> 
              Iniciar Sesión
            </button>
           {/*  <button type="submit" className="button" onChange={handleSignUp}>
              Registrarte
            </button> */}
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      );
    };

    export default SignIn;
