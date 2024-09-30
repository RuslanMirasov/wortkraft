import { usePopup } from '../../../hooks/usePopup';
import { Icon } from '../../../components';
import css from './LoginButton.module.scss';

const LoginButton = ({ children }) => {
  const { popupOpen } = usePopup();
  return (
    <button className={`${css.loginButton} ${css.login}`} onClick={() => popupOpen('login')}>
      <span>Anmelden</span> <Icon name="login" size="24" />
    </button>
  );
};

export default LoginButton;
