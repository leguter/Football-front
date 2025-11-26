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
        <h1>Добро пожаловать в Football Stars</h1>
        <p>Угадай кампанию удара – ставкой служат звезды. Убил – ставка умножается!</p>
        <Link to="/game" className={styles.cta}>Начать игру ⚽</Link>
      </main>
    </div>
  );
}
