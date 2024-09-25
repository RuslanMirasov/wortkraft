import { Button, Fieldset, Form, Input } from '../../../components';
import { usePopup } from '../../../hooks/usePopup';


const RegisterForm = () => {
  const { setLoading, unsetLoading, popupOpen } = usePopup(); 

  const sendRegisterForm = form => {
    setLoading();

    setTimeout(() => {
      unsetLoading();
      popupOpen(
        'confirm',
        `Hallo`,
        'Bestätigen Sie bitte Ihre E-Mail, wir haben Ihnen einen Link an Ihre E-Mail-Adresse geschickt.'
      );
    }, 1500);
  };

  return (
    <Form onSubmit={sendRegisterForm}>
      <Input type="text" name="name" label="Ihre Vorname" placeholder="..." required />
      <Input
        type="select"
        name="language"
        label="Ihre Muttersprache"
        placeholder="..."
        required
        options={{
          EN: 'English',
          UA: 'Українська',
          RU: 'Русский',
          FR: 'Français',
          IT: 'Italiano',
          ES: 'Español',
          PL: 'Polski',
          TR: 'Türkçe',
          AR: 'العربية',
          FA: 'فارسی',
        }}
      />
      <Input type="email" name="email" label="Email" placeholder="mail@gmail.com" required />
      <Input type="password" name="password" label="Passwort" placeholder="Mindestens 6 Zeichen (Az-09)" required />
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
