import React from "react";
import styles from "../Styles/layout.module.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.containerLayout}>
      <img src="/burger.png" alt="" className={styles.burger} />
      <Outlet />
    </div>
  );
};

export default Layout;
