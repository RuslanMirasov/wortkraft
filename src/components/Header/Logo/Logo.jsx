import Link from 'next/link';
import { Icon } from '../../../components';
import css from './Logo.module.scss';

const Logo = () => {
  return (
    <Link href="/" className={css.Logo}>
      <Icon name="logo" stroke="var(--orange-color)" />
    </Link>
  );
};

export default Logo;
