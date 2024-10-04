import css from './Counters.module.scss';

const Counters = ({ color = 'var(--text-color)', level, learnt, thems, words }) => {
  return (
    <ul className={css.Counters}>
      {level !== undefined && <li style={{ color: color, background: 'var(--white-color)' }}>{level}</li>}
      {thems !== undefined && <li>{thems} Themen</li>}
      {words !== undefined && <li>{words} Wörter</li>}
      {learnt !== undefined && <li>{learnt} gelernte</li>}
    </ul>
  );
};

export default Counters;
