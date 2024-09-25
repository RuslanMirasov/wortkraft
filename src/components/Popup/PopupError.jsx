import { usePopup } from '../../hooks/usePopup';
import PopupAnimation from './PopupAnimation/PopupAnimation';

const PopupError = ({ title, text }) => {
  const { popupClose } = usePopup();
  return (
    <PopupAnimation>
      {title && <h4>{title}</h4>}
      {text && <p>{text}</p>}
      <button type="button" onClick={popupClose}>
        OK
      </button>
    </PopupAnimation>
  );
};

export default PopupError;
