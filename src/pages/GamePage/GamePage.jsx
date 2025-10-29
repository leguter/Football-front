import { useState } from "react";
import api from "../api";
import { useTelegram } from "../hooks/useTelegram";

export default function Game() {
  const { user } = useTelegram();
  const [stake, setStake] = useState(10);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePlay = async () => {
    setLoading(true);
    try {
      const res = await api.post("/bets/place", {
        telegram_id: user?.id,
        stake,
      });
      setResult(res.data);
    } catch (err) {
      alert(err.response?.data?.error || "Error");
    }
    setLoading(false);
  };

  return (
    <div className="page">
      <h2>⚽ Ставка на матч</h2>
      <input
        type="number"
        value={stake}
        onChange={(e) => setStake(e.target.value)}
        min="1"
      />
      <button onClick={handlePlay} disabled={loading}>
        {loading ? "Грає..." : "Поставити"}
      </button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}
