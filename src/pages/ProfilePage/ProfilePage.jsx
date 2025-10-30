// pages/ProfilePage.jsx
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import StarBalance from "../../components/StarBalance/StarBalance";
import api from "../../api";
import styles from "./ProfilePage.module.css";

export default function ProfilePage() {
  const [stars, setStars] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    api.getBalance().then(res=>{
      setStars(res.data?.balance ?? 0);
    }).catch(()=> setStars(120)).finally(()=> setLoading(false));
  },[]);

  return (
    <div className={styles.page}>
      <Header />
      <Navbar />
      <div className={styles.content}>
        <StarBalance stars={stars} loading={loading} />
        <h2>Профіль гравця</h2>
        <p>Історія ставок, прогрес і нагороди (пізніше підключити бекенд)</p>
        {/* Тут можна додати компонент історії/реферальної системи/депозиту */}
      </div>
    </div>
  );
}
