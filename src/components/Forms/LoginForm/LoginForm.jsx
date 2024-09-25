import { Button, Form, Input} from '../../../components';
import { usePopup } from '../../../hooks/usePopup';


const LoginForm = () => {
  const { setLoading, unsetLoading, popupClose } = usePopup();

  const handleSubmit = form => {
    setLoading();

    setTimeout(() => { 
      unsetLoading();
      popupClose();
    }, 1500);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="email" name="email" label="E-mail" placeholder="example@example.com" required />
      <Input type="password" name="password" label="Password" placeholder="Mindestens 6 Zeichen" required />

        <Button full>Anmelden</Button>

    </Form>
  );
};

export default LoginForm;
