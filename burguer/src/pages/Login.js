import React from "react";
import styles from "../Styles/login.module.css";
// import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <h1>BURGER QUEEN</h1>
        <h2>Login</h2>
        <label>
          Email
          <input type={"text"} placeholder="username@gmail.com" />
        </label>
        <label>
          Contraseña
          <input type={"text"} placeholder="Contraseña" />
        </label>
        <button>Entrar</button>
        <article>
          <p className={styles.p1}>¿No tienes tu credencial todavía?</p>
          <p className={styles.p2}>Solicítala aquí</p>
        </article>
      </section>
      <figure>
        <img src="/burgerLogo.png" alt="" />
      </figure>
    </div>
  );
};

export default Login;
