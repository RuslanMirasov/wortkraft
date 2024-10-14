import fetcher from '../../../utils/fatcher';
import { mutate } from 'swr';
import { usePopup } from '../../../hooks/usePopup';
import { Button, Icon } from '../../../components';
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
    // <button className={`${css.loginButton} ${css.logout}`} onClick={handleLogout}>
    //   <Icon name="logout" size="24" />
    //   <span>Abmeldung</span>
    // </button>
    <Button icon="logout" full size="small" onClick={handleLogout}>
      Abmeldung
    </Button>
  );
};

export default LogoutButton;
