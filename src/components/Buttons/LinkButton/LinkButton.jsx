import Link from 'next/link';
import { Icon } from '../../../components';
import css from './LinkButton.module.scss';

const LinkButton = ({ href, locked = false }) => {
  return locked ? (
    <button type="button" className={css.LinkButton}>
      <Icon name="lock" />
    </button>
  ) : (
    <Link href={href} className={css.LinkButton}>
      <Icon name="next" />
    </Link>
  );
};

export default LinkButton;
