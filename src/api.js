import axios from "axios";

// ✅ Правильний доступ до змінних середовища у Vite
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

// Методи для твоєї гри
export const authTelegram = (initData) => {
  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  if (!BOT_TOKEN) throw new Error("Telegram bot token not defined in .env");
  return api.post("/api/auth/telegram", { initData });
};

export const getStatus = () => api.get("/api/status");
export const placeBet = (data) => api.post("/api/bets/place", data);
export const cashout = (data) => api.post("/api/bets/cashout", data);
export const startRound = () => api.post("/api/start");

export default api;
