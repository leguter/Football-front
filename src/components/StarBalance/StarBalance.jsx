// components/StarBalance.jsx
import styles from "./StarBalance.module.css";

export default function StarBalance({ stars, loading }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.icon}>🌟</div>
      <div className={styles.value}>
        {loading ? "..." : `${stars} Звезд`}
      </div>
    </div>
  );
}
