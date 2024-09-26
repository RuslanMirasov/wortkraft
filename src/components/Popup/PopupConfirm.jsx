import { usePopup } from '../../hooks/usePopup';
import { Icon, Title, Text, Button } from '../../components';
import PopupAnimation from './PopupAnimation/PopupAnimation';

const PopupConfirm = ({ title, text }) => {
  const { popupClose } = usePopup();

  return (
    <PopupAnimation>
      <Icon name="confirm" size={80} stroke="var(--green-color)" />
      {title && (
        <Title tag="h5" size="h5">
          {title}
          <hr />
        </Title>
      )}
      {text && <Text size="small">{text}</Text>}
      <Button size="small" full onClick={popupClose}>
        Ok
      </Button>
    </PopupAnimation>
  );
};

export default PopupConfirm;
