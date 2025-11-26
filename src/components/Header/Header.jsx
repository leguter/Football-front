// components/Header.jsx
import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>⚽ Football Stars</div>
      <div className={styles.tag}>Мобильный мини-ап</div>
    </header>
  );
}
