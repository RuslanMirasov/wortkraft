import Link from 'next/link';
import { Icon } from '../../../components';
import css from './LinkButton.module.scss';

const LinkButton = ({ href, locked = false }) => {
  return locked ? (
    <span className={css.LinkButton}>
      <Icon name="lock" />
    </span>
  ) : (
    <Link href={href} className={css.LinkButton}>
      <Icon name="next" />
    </Link>
  );
};

export default LinkButton;
