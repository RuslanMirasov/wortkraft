import { RegisterForm } from '../../components';
import { usePopup } from '../../hooks/usePopup';
import PopupAnimation from './PopupAnimation/PopupAnimation';

const PopupRegistration = () => {
  const { popupOpen } = usePopup();
  return (
    <PopupAnimation>
      <h4>Registrierung</h4>
      <p>Melden Sie sich an, um Ihren Fortschritt zu speichern und Ihre Leistungen zu verfolgen</p>
      <RegisterForm/>
      <div>
        <button type="button" onClick={() => popupOpen('login')}>
          back to login
        </button>
      </div>
    </PopupAnimation>
  );
};

export default PopupRegistration;
