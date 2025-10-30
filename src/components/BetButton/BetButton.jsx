// components/BetButton.jsx
import { motion } from "framer-motion";
import styles from "./BetButton.module.css";

export default function BetButton({ dir, active, onClick }) {
  return (
    <motion.button
      className={`${styles.btn} ${active ? styles.active : ""}`}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0.95 }}
      animate={{ opacity: 1 }}
    >
      <div className={styles.label}>{dir.label}</div>
      <div className={styles.mult}>x{dir.multiplier}</div>
    </motion.button>
  );
}
