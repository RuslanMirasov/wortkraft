import { LoginForm, Title, Text } from '../../components';
import { usePopup } from '../../hooks/usePopup';
import PopupAnimation from './PopupAnimation/PopupAnimation';

const PopupLogin = () => {
  const { popupOpen } = usePopup();

  return (
    <PopupAnimation>
      <Title tag="h5" size="h5">
        Anmeldung
      </Title>

      <LoginForm />

      <hr />
      <Text size="small">
        Kein Konto? <a onClick={() => popupOpen('registration')}>Registrieren</a>
      </Text>
    </PopupAnimation>
  );
};

export default PopupLogin;
