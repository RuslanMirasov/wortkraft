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
      {text && <Text>{text}</Text>}
      <Button variant="green" size="small" icon="arrow-right" full onClick={popupClose}>
        Ok
      </Button>
    </PopupAnimation>
  );
};

export default PopupConfirm;
