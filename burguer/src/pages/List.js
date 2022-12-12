import React from "react";
import styles from "../Styles/list.module.css";

const List = () => {
  return (
    <section className={styles.container}>
      <section className={styles.title}>
        <h1>LISTA DE PEDIDOS</h1>
        <img src="/outIcon.png" alt="Log out Icon" />
      </section>
      <section className={styles.tableContainer}>
        <table className={styles.table}>
          <tr className={styles.nav}>
            <th># MESA</th>
            <th>CLIENTE</th>
            <th>TOTAL</th>
            <th>EN PROCESO</th>
            <th>ENTREGADO</th>
            <th>ELIMINAR</th>
          </tr>
          <tr className={styles.list}>
            <td>Mesa 1</td>
            <td>Juan</td>
            <td>COP 39000</td>
            <td>
              <i class="fi fi-rr-checkbox"></i>
            </td>
            <td>
              <i class="fi fi-rr-checkbox"></i>
            </td>
            <td>
              <i class="fi fi-rr-trash"></i>
            </td>
          </tr>
        </table>
      </section>
      <section className={styles.buttonContainer}>
        <button>
          <i class="fi fi-br-arrow-left"></i>
          Hacer pedidos
        </button>
      </section>
    </section>
  );
};

export default List;
