import { useTelegram } from "../hooks/useTelegram";

export default function Profile() {
  const { user } = useTelegram();

  if (!user) return <p>Завантаження...</p>;

  return (
    <div className="page">
      <h2>👤 Профіль</h2>
      <p>ID: {user.id}</p>
      <p>Ім’я: {user.first_name}</p>
      {user.username && <p>Username: @{user.username}</p>}
    </div>
  );
}
