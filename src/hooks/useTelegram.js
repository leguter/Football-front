import { useEffect, useState } from 'react';
import api from '../api';

export function useTelegram() {
  const [tg, setTg] = useState(null);
  const [user, setUser] = useState(null);
  const [initData, setInitData] = useState(null);

  useEffect(() => {
    const app = window.Telegram?.WebApp;
    if (app) {
      app.ready();
      try {
        app.expand();
      } catch {}
      setTg(app);
      // Prefer initData (signed) then initDataUnsafe
      const idata = app.initData || app.initDataUnsafe?.initData || '';
      setInitData(idata);
      // send to backend to auth/upsert user
      (async () => {
        try {
          const res = await api.post('/auth/telegram', { initData: idata });
          setUser(res.data.user);
          // store minimal locally
          localStorage.setItem('tg_user', JSON.stringify(res.data.user));
        } catch (e) {
          // if backend unreachable, fallback to unsafe user
          const unsafe = app.initDataUnsafe?.user || null;
          if (unsafe) {
            setUser({
              telegram_id: unsafe.id,
              username: unsafe.username || unsafe.first_name
            });
            localStorage.setItem('tg_user', JSON.stringify({
              telegram_id: unsafe.id,
              username: unsafe.username || unsafe.first_name
            }));
          }
        }
      })();
    } else {
      // not in Telegram — try localStorage
      const local = localStorage.getItem('tg_user');
      if (local) setUser(JSON.parse(local));
    }
  }, []);

  return { tg, user, initData };
}
