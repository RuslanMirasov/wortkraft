import { usePopup } from '../../hooks/usePopup';
import { Button, Icon, Section, Text, Title } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import css from './PrivatePage.module.scss';

const PrivatePage = ({ children }) => {
  const { isLogin } = useAuth();
  const { popupOpen } = usePopup();

  if (!isLogin) {
    return (
      <Section className={css.PrivatePage}>
        <div className={css.Info}>
          <Title tag="h1" size="h2">
            <Icon name="lock" stroke="var(--green-color)" size="60" />
            Privat
          </Title>
          <Text>
            Sie müssen eingeloggt sein, <br />
            um diese Seite zu sehen
          </Text>
          <Button onClick={() => popupOpen('login')}>Anmelden</Button>
        </div>
      </Section>
    );
  }

  return <>{children}</>;
};

export default PrivatePage;
