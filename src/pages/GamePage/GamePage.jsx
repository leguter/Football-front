import { useEffect, useState } from "react";
import * as api from "../../api";
import { motion } from "framer-motion";

export default function GamePage() {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(0);
  const [stake, setStake] = useState(10);
  const [currentRound, setCurrentRound] = useState(null);
  const [activeBets, setActiveBets] = useState([]);

  // Авторизація Telegram
  useEffect(() => {
    const initData = window.Telegram.WebApp.initData;
    if (!initData) return;

    api.authTelegram(initData).then(res => {
      if (res.data.ok) {
        setUser(res.data.user);
        setBalance(0); // Початковий баланс можна підвантажити окремо
      }
    });
  }, []);

  
  // Підвантаження стану гри
  useEffect(() => {
    const interval = setInterval(() => {
      api.getStatus().then(res => setCurrentRound(res.data));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Ставка
  const handlePlaceBet = async () => {
    if (!user || !currentRound) return;
    try {
      const res = await api.placeBet({ telegram_id: user.telegram_id, stake });
      if (res.data.ok) {
        setActiveBets([...activeBets, res.data.bet]);
        setBalance(prev => prev - stake);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Кешаут
  const handleCashout = async (bet) => {
    try {
      const res = await api.cashout({
        telegram_id: user.telegram_id,
        bet_id: bet.id,
        cashout_multiplier: 2 // Приклад: можна вираховувати реально
      });
      if (res.data.ok) {
        setBalance(prev => prev + res.data.amount);
        setActiveBets(prev => prev.filter(b => b.id !== bet.id));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="game-page p-4 text-white bg-gradient-to-b from-blue-900 to-black min-h-screen">
      <h1 className="text-3xl font-bold mb-4">⚽ Football Stars</h1>
      <p>Баланс: ⭐ {balance}</p>
      <p>Поточний раунд: {currentRound?.roundId || "немає активного"}</p>

      <div className="mt-4 flex gap-2">
        <input
          type="number"
          value={stake}
          onChange={e => setStake(Number(e.target.value))}
          className="p-2 rounded text-black"
        />
        <button
          onClick={handlePlaceBet}
          className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded font-bold"
        >
          Ставка
        </button>
      </div>

      <h2 className="text-xl mt-6">Активні ставки</h2>
      <ul>
        {activeBets.map(bet => (
          <li key={bet.id} className="flex justify-between mt-2">
            <span>Ставка: ⭐ {bet.stake}</span>
            <button
              onClick={() => handleCashout(bet)}
              className="bg-yellow-600 hover:bg-yellow-500 px-3 py-1 rounded"
            >
              Вивести
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
