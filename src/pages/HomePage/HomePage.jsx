import { Link } from "react-router-dom";
import { useTelegram } from "../hooks/useTelegram";

export default function Home() {
  const { user } = useTelegram();

  return (
    <div className="page">
      <h1>⚽ Football Stars</h1>
      {user ? (
        <>
          <p>Вітаємо, {user.first_name}!</p>
          <Link className="btn" to="/game">
            Почати гру
          </Link>
        </>
      ) : (
        <p>Завантаження Telegram даних...</p>
      )}
    </div>
  );
}
