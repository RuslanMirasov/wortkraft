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
        `Hello ${data.name || 'New User'}`,
        'Your account has been successfully created, you can start learning now. Have fun 🧐'
      );
    } catch (error) {
      popupOpen('error', `Error ${error.status}`, error.message, 'registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleRegistration}>
      <Input type="text" name="name" label="Vorname" placeholder="Zum Beispiel Klaus" />
      <Input
        type="select"
        name="language"
        label="Sprache"
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
      <Input type="email" name="email" label="Email" placeholder="mail@gmail.com" required />
      <Input
        type="password"
        name="password"
        label="Password"
        placeholder="Mindestens 6 Zeichen"
        icon="password-hide"
        required
      />
      <Fieldset col="1" label="Datenschutzbestimmungen">
        <Input
          type="checkbox"
          name="agree"
          label="Wenn Sie auf die Schaltfläche klicken, erklären Sie sich mit den Datenschutzbestimmungen einverstanden."
          value="ok"
          required
          checked
        />
      </Fieldset>

      <Button full>Registrieren</Button>
    </Form>
  );
};

export default RegisterForm;
