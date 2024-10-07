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
      <Input type="email" name="email" placeholder="E-mail" required />
      <Input type="password" name="password" placeholder="Passwort" icon="password-hide" required />
      <Button size="small" icon="arrow-right" full variant="green">
        Anmelden
      </Button>
    </Form>
  );
};

export default LoginForm;
