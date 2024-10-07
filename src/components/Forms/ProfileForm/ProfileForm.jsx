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
      <Input type="email" name="email" placeholder={user.email} value={user.email} disabled />
      <Input
        type="select"
        name="language"
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
      <Input type="text" name="name" placeholder="Ihre Vorname" value={user.name} required />

      <Button size="small" loading={loading} icon="arrow-right" variant="green" full>
        Aktualisieren
      </Button>
    </Form>
  );
};

export default ProfileForm;
