import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { bodyLock, bodyUnlock, showPopup, hidePopup } from '../utils/popup';

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState();
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isPopupLoading, setIsPopupLoading] = useState(false);
  const [popupType, setPopupType] = useState('login');
  const [popupTitle, setPopupTitle] = useState('');
  const [popupText, setPopupText] = useState('');
  const containerRef = useRef();

  // SCREEN WIDTH CHECK
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //CLOSE POPUP WITH ESCAPE
  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        if (isOpenPopup) {
          popupClose();
        }
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  //POPUP LOADING
  const setLoading = () => {
    setIsPopupLoading(true);
  };

  const unsetLoading = () => {
    setIsPopupLoading(false);
  };

  //POPUP OPEN AND CLOSE
  const popupOpen = (type, title, text) => {
    setIsOpenPopup(true);
    if (!isOpenPopup) {
      bodyLock(window.innerWidth - document.body.clientWidth);
    }
    setPopupType(type);
    title && setPopupTitle(title);
    text && setPopupText(text);
    setTimeout(() => {
      showPopup();
    }, 1);
  };

  const popupClose = () => {
    hidePopup();
    setTimeout(() => {
      setIsOpenPopup(false);
      setPopupType('login');
      setPopupTitle('');
      setPopupText('');
      bodyUnlock();
    }, 310);
  };

  return (
    <PopupContext.Provider
      ref={containerRef}
      value={{
        isMobile,
        isPopupLoading,
        isOpenPopup,
        popupType,
        popupTitle,
        popupText,
        setLoading,
        unsetLoading,
        popupClose,
        popupOpen,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};
