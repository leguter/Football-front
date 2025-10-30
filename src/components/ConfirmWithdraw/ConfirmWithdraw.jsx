// components/ConfirmWithdraw.jsx
import { motion } from "framer-motion";
import styles from "./ConfirmWithdraw.module.css";

export default function ConfirmWithdraw({ onConfirm, onCancel, amount }) {
  return (
    <motion.div className={styles.wrap} initial={{opacity:0}} animate={{opacity:1}}>
      <div className={styles.modal}>
        <h3>Вивести {amount} 🌟?</h3>
        <div className={styles.actions}>
          <button onClick={onCancel} className={styles.cancel}>Скасувати</button>
          <button onClick={onConfirm} className={styles.confirm}>Підтвердити</button>
        </div>
      </div>
    </motion.div>
  );
}
