import { useEffect, useState } from "react";

export function useTelegram() {
  const [tg, setTg] = useState(window.Telegram?.WebApp);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const app = window.Telegram.WebApp;
      app.ready();
      app.expand();
      setTg(app);
      setUser(app.initDataUnsafe?.user);
    }
  }, []);

  return { tg, user };
}