import { Icon } from '../../components';
import css from './Words.module.scss';

const Words = ({ words }) => {
  return (
    <ul className={css.Words}>
      {words.map(({ _id, name, points = 0 }) => (
        <li key={_id} data-points={points}>
          <span>{name}</span>

          <div>
            <p className={css.Procent}>{points * 20}%</p>
            <Icon name="arrow-right" size="21" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Words;
