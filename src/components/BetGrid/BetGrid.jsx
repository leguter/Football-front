// components/BetGrid.jsx
import BetButton from "../BetButton/BetButton";
import styles from "./BetGrid.module.css";

/*
  BetGrid: показує сітку напрямків удару.
  directions — масив { id, label, multiplier, odds }
  onSelect(directionId, amount) — викликається при підтвердженні ставки
*/

export default function BetGrid({ directions, selected, onSelectDirection, onPlaceBet, betAmount, setBetAmount }) {
  return (
    <div className={styles.gridWrap}>
      <div className={styles.field}>
        {directions.map((d) => (
          <BetButton
            key={d.id}
            dir={d}
            active={selected === d.id}
            onClick={() => onSelectDirection(d.id)}
          />
        ))}

        {/* control */}
      </div>

      <div className={styles.controls}>
        <input
          className={styles.input}
          type="number"
          min="1"
          value={betAmount}
          onChange={(e) => setBetAmount(Number(e.target.value))}
          placeholder="Ставка (зірки)"
        />
        <button className={styles.place} onClick={onPlaceBet}>
          Поставити
        </button>
      </div>
    </div>
  );
}
