import { LoginForm, Title, Text, Button } from '../../components';
import { usePopup } from '../../hooks/usePopup';
import PopupAnimation from './PopupAnimation/PopupAnimation';

const PopupLogin = () => {
  const { popupOpen } = usePopup();

  return (
    <PopupAnimation>
      <Title tag="h5" size="h5">
        Anmeldung
      </Title>
      <Text size="small">{`Melden Sie sich an, um Ihren Fortschritt\n zu speichern und zu verfolgen.`}</Text>

      <LoginForm />

      <hr />
      <div style={{ width: '100%' }}>
        <Text size="small">Kein Konto?</Text>
        <Button size="small" icon="arrow-right" full onClick={() => popupOpen('registration')}>
          Registrieren
        </Button>
      </div>
    </PopupAnimation>
  );
};

export default PopupLogin;
