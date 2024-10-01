import { usePopup } from '../../../hooks/usePopup';
import { Icon } from '../..';
import css from './LoginButton.module.scss';

const DeleteAccaunt = ({ children }) => {
  const { popupOpen } = usePopup();
  return (
    <button
      className={`${css.loginButton} ${css.Delete}`}
      onClick={() =>
        popupOpen(
          'select',
          'Sind Sie sicher?',
          'Durch die Bestätigung wird Ihr Account sowie Ihr Fortschritt dauerhaft gelöscht.'
        )
      }
    >
      <Icon name="close" size="24" />
      <span>Account löschen</span>
    </button>
  );
};

export default DeleteAccaunt;
