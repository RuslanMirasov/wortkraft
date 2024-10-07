import { RegisterForm, Title, Text, Button } from '../../components';
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
      <div style={{ width: '100%' }}>
        <Text size="small">Haben Sie ein Konto?</Text>
        <Button size="small" icon="arrow-right" full onClick={() => popupOpen('login')}>
          Anmelden Sie
        </Button>
      </div>
    </PopupAnimation>
  );
};

export default PopupRegistration;
