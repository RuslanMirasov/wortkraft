import fetcher from '../../../utils/fatcher';
import { mutate } from 'swr';
import { Button, Form, Input } from '../../../components';
import { usePopup } from '../../../hooks/usePopup';

const LoginForm = () => {
  const { setLoading, popupOpen, popupClose } = usePopup();

  const handleLogin = async data => {
    setLoading(true);
    try {
      await fetcher('/api/auth/login', 'POST', data);
      mutate('/api/auth/user');
      popupClose();
    } catch (error) {
      popupOpen('error', `Error ${error.status}`, error.message, 'login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <Input type="email" name="email" label="E-mail" placeholder="example@example.com" required />
      <Input
        type="password"
        name="password"
        label="Password"
        placeholder="Mindestens 6 Zeichen"
        icon="password-hide"
        required
      />
      <Button full>Anmelden</Button>
    </Form>
  );
};

export default LoginForm;
