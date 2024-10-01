import { usePopup } from '../../hooks/usePopup';
import { Icon, Title, Text, Button, ButtonList } from '../../components';
import PopupAnimation from './PopupAnimation/PopupAnimation';

const PopupSelect = ({ title, text }) => {
  const { popupClose } = usePopup();

  const handleAgree = () => {
    return true;
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
        <Button variant="red" onClick={handleAgree}>
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
