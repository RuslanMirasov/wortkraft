import { useRouter } from 'next/router';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../../components';

const StartButton = ({ words, children }) => {
  const { setRoom } = useAuth();
  const router = useRouter();

  const handleClick = () => {
    setRoom(words);
    router.push({
      pathname: '/room',
    });
  };

  return (
    <Button full icon="arrow-right" onClick={handleClick}>
      {children}
    </Button>
  );
};

export default StartButton;
