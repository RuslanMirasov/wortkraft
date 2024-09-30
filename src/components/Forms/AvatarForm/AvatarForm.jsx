import fetcher from '../../../utils/fatcher';
import { useState } from 'react';
import { mutate } from 'swr';
import { Form, Avatar, Icon } from '../../../components';
import { usePopup } from '../../../hooks/usePopup';
import css from './AvatarForm.module.scss';

const AvatarForm = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const { popupOpen } = usePopup();
  const { _id, avatar, color, email } = user;

  const handleFileChange = async e => {
    setLoading(true);
    const file = e.target.files[0]; // Получаем выбранный файл

    const formData = new FormData();
    formData.append('avatar', file);
    formData.append('userId', _id);

    try {
      await fetcher('/api/user/avatar', 'POST', formData, true);
      mutate('/api/auth/user');
    } catch (error) {
      popupOpen('error', `Error ${error.status}`, error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={css.AvatarForm}>
      <Avatar avatar={avatar} color={color} email={email} />
      <Form>
        <label>
          <input type="file" name="avatar" onChange={handleFileChange} />
        </label>
      </Form>
      {loading && <div className="loading"></div>}
      <Icon name="avatar-plus" stroke={color} />
    </div>
  );
};

export default AvatarForm;
