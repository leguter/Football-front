// components/RewardPopup.jsx
import { motion } from "framer-motion";
import styles from "./RewardPopup.module.css";

export default function RewardPopup({ text }) {
  return (
    <motion.div
      className={styles.popup}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: -80, opacity: 0 }}
      transition={{ duration: 1.8 }}
    >
      {text}
    </motion.div>
  );
}
