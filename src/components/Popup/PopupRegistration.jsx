import { RegisterForm, Title, Text } from '../../components';
import { usePopup } from '../../hooks/usePopup';
import PopupAnimation from './PopupAnimation/PopupAnimation';

const PopupRegistration = () => {
  const { popupOpen } = usePopup();
  return (
    <PopupAnimation>
      <Title tag="h5" size="h5">
        Registrierung
      </Title>
      <Text size="small">Melden Sie sich an, um Ihren Fortschritt zu speichern und Ihre Leistungen zu verfolgen</Text>
      <RegisterForm />
      <hr />
      <Text size="small">
        Haben Sie ein Konto? <a onClick={() => popupOpen('login')}>Anmeldung</a>
      </Text>
    </PopupAnimation>
  );
};

export default PopupRegistration;
