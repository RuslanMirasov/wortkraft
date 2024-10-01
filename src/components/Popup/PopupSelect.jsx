import fetcher from '../../utils/fatcher';
import { mutate } from 'swr';
import { usePopup } from '../../hooks/usePopup';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import { Icon, Title, Text, Button, ButtonList } from '../../components';
import PopupAnimation from './PopupAnimation/PopupAnimation';

const PopupSelect = ({ title, text }) => {
  const [loading, setLoading] = useState();
  const { popupClose, popupOpen } = usePopup();
  const { user } = useAuth();

  const handleUserDelete = async () => {
    setLoading(true);
    try {
      await fetcher('/api/user/delete', 'DELETE', { id: user._id });
      await mutate('/api/auth/user', null, false);
      popupOpen('confirm', 'User deleted!', 'too bad', 'login');
    } catch (error) {
      popupOpen('error', `Error ${error.status}`, error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PopupAnimation>
      <Icon name="error" size={80} stroke="var(--invalid-color)" />
      {title && (
        <Title tag="h5" size="h5">
          {title}
        </Title>
      )}
      {text && <Text size="small">{text}</Text>}
      <ButtonList>
        <Button variant="red" loading={loading} onClick={handleUserDelete}>
          Ja
        </Button>
        <Button variant="black" onClick={popupClose}>
          Nein
        </Button>
      </ButtonList>
    </PopupAnimation>
  );
};

export default PopupSelect;
