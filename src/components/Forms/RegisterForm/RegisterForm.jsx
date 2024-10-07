import fetcher from '../../../utils/fatcher';
import { mutate } from 'swr';
import { Button, Fieldset, Form, Input } from '../../../components';
import { usePopup } from '../../../hooks/usePopup';

const RegisterForm = () => {
  const { setLoading, popupOpen } = usePopup();

  const handleRegistration = async data => {
    setLoading(true);
    try {
      const result = await fetcher('/api/auth/register', 'POST', data);
      mutate('/api/auth/user');
      popupOpen(
        'confirm',
        `Hallo ${data.name || 'Neuer Benutzer'}`,
        'Ihr Konto ist erstellt! Starten Sie jetzt mit dem Lernen. Viel Spaß! 🎉'
      );
    } catch (error) {
      popupOpen('error', `Error ${error.status}`, error.message, 'registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleRegistration}>
      <Input type="text" name="name" placeholder="Ihre Vorname" />
      <Input
        type="select"
        name="language"
        placeholder="Ihre Muttersprache"
        required
        options={{
          EN: 'English',
          FR: 'Français',
          UA: 'Українська',
          PL: 'Polski',
          IT: 'Italiano',
          ES: 'Español',
          TR: 'Türkçe',
          RU: 'Русский',
        }}
      />
      <Input type="email" name="email" placeholder="E-mail" required />
      <Input type="password" name="password" placeholder="Passwort" icon="password-hide" required />
      <Fieldset col="1">
        <Input
          type="checkbox"
          name="agree"
          label="Mit Klick auf den Button stimmen Sie den Datenschutzbestimmungen zu"
          value="ok"
          required
          checked
        />
      </Fieldset>

      <Button size="small" icon="arrow-right" full variant="green">
        Registrieren
      </Button>
    </Form>
  );
};

export default RegisterForm;
