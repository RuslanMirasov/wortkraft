import { usePopup } from '../../../hooks/usePopup';
import { Button } from '../../../components';
import { Icon } from '../..';
import css from './LoginButton.module.scss';

const DeleteAccaunt = ({ children }) => {
  const { popupOpen } = usePopup();
  return (
    // <button
    //   className={`${css.loginButton} ${css.Delete}`}
    //   onClick={() =>
    //     popupOpen(
    //       'select',
    //       'Sind Sie sicher?',
    //       'Durch die Bestätigung wird Ihr Account sowie Ihr Fortschritt dauerhaft gelöscht.'
    //     )
    //   }
    // >
    //   <Icon name="user" size="24" />
    //   <span>Account löschen</span>
    // </button>

    <Button
      icon="user"
      variant="red"
      full
      size="small"
      onClick={() =>
        popupOpen(
          'select',
          'Sind Sie sicher?',
          'Durch die Bestätigung wird Ihr Account sowie Ihr Fortschritt dauerhaft gelöscht.'
        )
      }
    >
      Account löschen
    </Button>
  );
};

export default DeleteAccaunt;
