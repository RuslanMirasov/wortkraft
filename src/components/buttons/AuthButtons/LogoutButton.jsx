import fetcher from '../../../utils/fatcher';
import { mutate } from 'swr';
import { usePopup } from '../../../hooks/usePopup';
import { Icon } from '../../../components';
import css from './LoginButton.module.scss';

const LogoutButton = () => {
  const { popupOpen } = usePopup();

  const handleLogout = async () => {
    try {
      await fetcher('/api/auth/logout', 'POST');
      await mutate('/api/auth/user', null, false);
    } catch (error) {
      popupOpen('error', `Error ${error.status}`, error.message);
    }
  };

  return (
    <button className={`${css.loginButton} ${css.logout}`} onClick={handleLogout}>
      <Icon name="login" size="24" />
      <span>Abmeldung</span>
    </button>
  );
};

export default LogoutButton;
