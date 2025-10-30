import React, { useEffect, useRef } from 'react';
import './ball.css';

export default function BallAnimation({ playGoal }) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (playGoal) {
      el.classList.remove('goal-animate');
      // force reflow
      void el.offsetWidth;
      el.classList.add('goal-animate');
    }
  }, [playGoal]);

  return (
    <div className="ball-wrap">
      <div className="ball" ref={ref} />
      <div className="goal-flare" />
    </div>
  );
}
