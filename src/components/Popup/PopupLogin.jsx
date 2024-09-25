import { LoginForm } from '../../components';
import { usePopup } from '../../hooks/usePopup';
import PopupAnimation from './PopupAnimation/PopupAnimation';

const PopupLogin = () => {
  const { popupOpen } = usePopup();
  return (
    <PopupAnimation>
      <h4>Anmeldung</h4>
      <LoginForm/>
      <div>
        <button type="button" onClick={() => popupOpen('registration')}>
          Registrieren Sie sich
        </button>
      </div>
    </PopupAnimation>
  );
};

export default PopupLogin;
