import React from "react";
import Table from "../components/Table";
import styles from "../Styles/login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.container}>
      Login
      <Link to="menu">Menu</Link>
    </div>
  );
};

export default Login;
