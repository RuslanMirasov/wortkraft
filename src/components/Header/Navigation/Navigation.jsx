import Link from 'next/link';
import { useRouter } from 'next/router';
import { Icon } from '../../../components';
import css from './Navigation.module.scss';

const Navigation = () => {
  const { pathname } = useRouter();

  return (
    <nav className={css.Wrapper}>
      <ul className={css.Navigation}>
        <li data-active={pathname === '/' || pathname.includes('/[book]')}>
          <Link href="/">
            <Icon name="home" />
            Bibliothek
          </Link>
        </li>
        <li data-active={pathname === '/search'}>
          <Link href="/search">
            <Icon name="search" />
            Suchen
          </Link>
        </li>
        <li data-active={pathname === '/bookmarks'}>
          <Link href="/bookmarks">
            <Icon name="bookmark" fill="rgba(0,0,0,0)" />
            Merkliste
          </Link>
        </li>
        <li data-active={pathname === '/statistic'}>
          <Link href="/statistic">
            <Icon name="statistic" />
            Statistik
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
