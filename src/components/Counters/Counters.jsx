import css from './Counters.module.scss';

const Counters = ({ color = 'var(--text-color)', level, learnt, thems, words }) => {
  return (
    <ul className={css.Counters}>
      {level && <li style={{ color: color, background: 'var(--white-color)' }}>{level}</li>}
      {learnt && <li>{learnt} gelernte</li>}
      {thems && <li>{thems} Themen</li>}
      {words && <li>{words} Wörter</li>}
    </ul>
  );
};

export default Counters;
