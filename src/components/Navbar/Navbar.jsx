import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={({isActive})=> isActive?styles.active:styles.link}>Home</NavLink>
      <NavLink to="/game" className={({isActive})=> isActive?styles.active:styles.link}>Game</NavLink>
      <NavLink to="/profile" className={({isActive})=> isActive?styles.active:styles.link}>Profile</NavLink>
    </nav>
  );
}