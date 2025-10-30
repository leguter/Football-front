// pages/Home.jsx
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <Navbar />
      <main className={styles.main}>
        <h1>Ласкаво просимо у Football Stars</h1>
        <p>Вгадай кампанію удару — ставкою служать зірки. Забив — ставка множиться!</p>
        <Link to="/game" className={styles.cta}>Почати гру ⚽</Link>
      </main>
    </div>
  );
}
