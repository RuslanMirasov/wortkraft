import { usePopup } from '../../hooks/usePopup';
import { Icon, Title, Text, Button } from '../../components';
import PopupAnimation from './PopupAnimation/PopupAnimation';

const PopupError = ({ title, text }) => {
  const { popupClose } = usePopup();
  return (
    <PopupAnimation>
      <Icon name="error" size={80} />
      {title && (
        <Title tag="h5" size="h5">
          {title}
          <hr />
        </Title>
      )}
      {text && <Text>{text}</Text>}
      <Button variant="white" size="small" icon="arrow-right" full onClick={popupClose}>
        OK
      </Button>
    </PopupAnimation>
  );
};

export default PopupError;
