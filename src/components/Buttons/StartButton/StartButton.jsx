import { useRouter } from 'next/router';
import { Button } from '../../../components';

const StartButton = ({ children }) => {
  const router = useRouter();

  const handleClick = () => {
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
