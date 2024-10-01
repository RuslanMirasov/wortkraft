import { usePopup } from '../../../hooks/usePopup';
import { Icon } from '../..';
import css from './LoginButton.module.scss';

const LoginButton = () => {
  const { popupOpen } = usePopup();
  return (
    <button className={`${css.loginButton} ${css.Login}`} onClick={() => popupOpen('login')}>
      <span>Anmelden</span> <Icon name="login" size="24" />
    </button>
  );
};

export default LoginButton;
