import React, { useState } from "react";
import { auth } from "../services/AuthService";
import styles from "../Styles/login.module.css";
// import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await auth(user);
      console.log(response.data);
      localStorage.setItem("token", response.data.accessToken);
    } catch (e) {
      if (e.response.data == "Cannot find user") {
        alert("Credenciales incorrectas");
      } else {
        console.log(e);
      }
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handlerSubmit}>
        <h1>BURGER QUEEN</h1>
        <h2>Login</h2>
        <label>
          Email
          <input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="email"
            placeholder="username@gmail.com"
          />
        </label>
        <label>
          Contraseña
          <input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="text"
            placeholder="Contraseña"
          />
        </label>
        <button type="submit">Entrar</button>
        <article>
          <p className={styles.p1}>¿No tienes tu credencial todavía?</p>
          <p className={styles.p2}>Solicítala aquí</p>
        </article>
      </form>
      <figure>
        <img src="/burgerLogo.png" alt="" />
      </figure>
    </div>
  );
};

export default Login;
