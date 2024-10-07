import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { usePopup } from '../../hooks/usePopup';
import PopupError from './PopupError';
import PopupConfirm from './PopupConfirm';
import PopupLogin from './PopupLogin';
import PopupRegistration from './PopupRegistration';
import PopupSelect from './PopupSelect';

const Popup = () => {
  const { loading, isOpenPopup, popupType, popupTitle, popupText, popupClose } = usePopup();
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const popupContentClasses = {
    'popup-content': true,
    'type-login': popupType === 'login',
    'type-registration': popupType === 'registration',
    'type-error': popupType === 'error',
    'type-select': popupType === 'select',
    'type-confirm': popupType === 'confirm',
    'is-loading': loading,
  };

  const currentPopupContentClasses = Object.keys(popupContentClasses)
    .filter(key => popupContentClasses[key])
    .join(' ');

  if (!isBrowser) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      {isOpenPopup && (
        <div className="popup" onClick={popupClose}>
          <div className={currentPopupContentClasses} onClick={e => e.stopPropagation()}>
            <button type="button" onClick={popupClose} className="popup-close">
              CLOSE BUTTON
            </button>
            {popupType === 'error' && <PopupError title={popupTitle} text={popupText} />}
            {popupType === 'confirm' && <PopupConfirm title={popupTitle} text={popupText} />}
            {popupType === 'select' && <PopupSelect title={popupTitle} text={popupText} />}
            {popupType === 'login' && <PopupLogin />}
            {popupType === 'registration' && <PopupRegistration />}
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export default Popup;
