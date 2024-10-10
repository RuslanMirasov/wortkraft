import { usePopup } from '../../hooks/usePopup';
import { Button, Icon, Section, Text, Title, InfoBlock } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import css from './PrivatePage.module.scss';

const PrivatePage = ({ children }) => {
  const { isLogin } = useAuth();
  const { popupOpen } = usePopup();

  if (!isLogin) {
    return (
      <Section className={css.PrivatePage}>
        <InfoBlock name="privat" subtitle={`Sie müssen eingeloggt sein,\n um diese Seite zu sehen`}>
          <Button size="small" icon="arrow-right" onClick={() => popupOpen('login')}>
            Anmelden
          </Button>
        </InfoBlock>
      </Section>
    );
  }

  return <>{children}</>;
};

export default PrivatePage;
