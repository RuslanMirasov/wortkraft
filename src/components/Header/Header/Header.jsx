import { Container, Logo, Navigation, ProfileLink } from '../../../components';
import css from './Header.module.scss';

const Header = ({ children }) => {
  return (
    <header className={css.Header}>
      <Container>
        <Logo />
        <Navigation />
        <ProfileLink />
      </Container>
    </header>
  );
};

export default Header;
