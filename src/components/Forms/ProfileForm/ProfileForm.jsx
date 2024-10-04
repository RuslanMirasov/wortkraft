import fetcher from '../../../utils/fatcher';
import { mutate } from 'swr';
import { usePopup } from '../../../hooks/usePopup';
import { useState } from 'react';
import { Form, Input, Button } from '../../../components';

const ProfileForm = ({ user }) => {
  const [loading, setLoading] = useState();
  const { popupOpen } = usePopup();

  const handleProfileUpdate = async data => {
    setLoading(true);
    try {
      await fetcher('/api/user/profile', 'PATCH', data);
      mutate('/api/auth/user');
    } catch (error) {
      popupOpen('error', `Error ${error.status}`, error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleProfileUpdate}>
      <Input type="hidden" name="id" value={user._id} />
      <Input type="email" name="email" label="Email" placeholder={user.email} value={user.email} disabled />
      <Input type="text" name="name" label="Ihre Vorname" placeholder={user.name} value={user.name} required />
      <Input
        type="select"
        name="language"
        label="Sprache"
        placeholder="Ihre Muttersprache"
        required
        value={user.language}
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

      <Button size="small" loading={loading}>
        Aktualisieren
      </Button>
    </Form>
  );
};

export default ProfileForm;
