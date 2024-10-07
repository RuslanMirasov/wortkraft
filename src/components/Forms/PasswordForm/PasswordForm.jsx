import fetcher from '../../../utils/fatcher';
import { mutate } from 'swr';
import { usePopup } from '../../../hooks/usePopup';
import { Button, Form, Input } from '../../../components';
import { useState } from 'react';

const PasswordForm = ({ userId }) => {
  const [loading, setLoading] = useState(false);
  const { popupOpen } = usePopup();

  const handlePasswordChange = async data => {
    setLoading(true);
    try {
      await fetcher('/api/user/password', 'PATCH', data);
      mutate('/api/auth/user');
      popupOpen(
        'confirm',
        'Passwort geändert',
        'Das Passwort wurde erfolgreich aktualisiert. Sie können sich jetzt mit dem neuen Passwort anmelden.'
      );
    } catch (error) {
      popupOpen('error', `Error ${error.status}`, error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handlePasswordChange} reset>
      <Input type="hidden" name="id" value={userId} />
      <Input type="password" name="password" icon="password-hide" placeholder="Aktuelles Passwort" required />
      <Input type="password" name="password2" icon="password-hide" placeholder="Neues Passwort" required />
      <Button size="small" loading={loading} icon="arrow-right" variant="green" full>
        Aktualisieren
      </Button>
    </Form>
  );
};

export default PasswordForm;
