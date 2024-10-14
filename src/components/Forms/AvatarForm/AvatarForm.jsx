import fetcher from '../../../utils/fatcher';
import imageCompression from 'browser-image-compression';
import cropImageToSquare from '../../../utils/cropImageToSquare';
import { useState } from 'react';
import { mutate } from 'swr';
import { Form, Icon, Avatar, Input } from '../../../components';
import { usePopup } from '../../../hooks/usePopup';
import css from './AvatarForm.module.scss';

const AvatarForm = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const { popupOpen } = usePopup();
  const { _id, avatar, color, email } = user;

  const handleFileChange = async e => {
    const file = e.target.files[0];
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 400,
      useWebWorker: true,
    };

    if (file) {
      setLoading(true);
      try {
        const compressedFile = await imageCompression(file, options);
        const croppedFile = await cropImageToSquare(compressedFile);
        const formData = new FormData();
        formData.append('avatar', croppedFile);
        formData.append('userId', _id);

        await fetcher('/api/user/avatar', 'POST', formData, true);
        mutate('/api/auth/user');
      } catch (error) {
        popupOpen('error', `Error ${error.status || ''}`, error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className={css.AvatarForm}>
      <div className={css.AvatarHead} style={{ background: color }}></div>
      <div className={`${css.AvatarBody}`}>
        <Avatar avatar={avatar} color={color} email={email} />
        <Form>
          <Input type="file" name="avatar" onChange={handleFileChange} />
        </Form>
        <Icon name="avatar-plus" />
        {loading && <div className={`${css.Loading} loading`}></div>}
      </div>
    </div>
  );
};

export default AvatarForm;
