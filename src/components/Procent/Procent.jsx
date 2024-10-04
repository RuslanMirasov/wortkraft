import { useState, useEffect } from 'react';
import css from './Procent.module.scss';

const Procent = ({ all = 0, done = 0 }) => {
  const [procent, setProcent] = useState(0);

  useEffect(() => {
    if (all === 0) {
      setProcent('0');
      return;
    }

    const calculations = (done * 100) / all;
    const result = parseFloat(calculations.toFixed(1));
    setProcent(result);
  }, [done, all]);

  return <span className={css.Procent}>{procent}%</span>;
};

export default Procent;
