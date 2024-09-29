import fetcher from '../../../utils/fatcher';
import { useState } from 'react';
import { mutate } from 'swr';
import { Form, Avatar, Icon } from '../../../components';
import { usePopup } from '../../../hooks/usePopup';
import css from './AvatarForm.module.scss';

const AvatarForm = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const { popupOpen } = usePopup();
  const { _id, avatar, color, email } = user;

  const handleFileChange = async e => {
    setLoading(true);
    setSelectedFile(e.target.files[0]);
    const data = {
      userId: _id,
      avatar: selectedFile,
    };
    try {
      await fetcher('/api/auth/avatar', 'POST', data);
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
