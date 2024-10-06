import { useEffect, useState } from 'react';
import { usePopup } from '../../../hooks/usePopup';
import { useAuth } from '../../../hooks/useAuth';
import { mutate } from 'swr';
import { Icon } from '../../../components';
import fetcher from '../../../utils/fatcher';
import css from './BookmarkButton.module.scss';

const BookmarkButton = ({ position = 'left', wordId, points }) => {
  const { user } = useAuth();
  const { popupOpen } = usePopup();
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const fill = !isAdded ? 'rgba(0,0,0,0)' : points === 0 ? 'var(--text-color)' : 'var(--white-color)';
  const stroke = points === 0 ? 'var(--text-color)' : 'var(--white-color)';

  useEffect(() => {
    const isBookmark = user?.bookmarks.find(id => id === wordId);
    if (isBookmark) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [user, wordId]);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await fetcher('/api/bookmarks', 'PATCH', { wordId });
      await mutate('/api/auth/user');
      await mutate('/api/bookmarks');
    } catch (error) {
      popupOpen('error', `Error ${error.status}`, error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      className={css.BookmarkButton}
      data-position={position}
      data-add={isAdded ? 'yes' : 'no'}
      onClick={handleClick}
    >
      {isLoading ? (
        <div className={`loading ${points === 0 ? 'light' : ''}`}></div>
      ) : (
        <Icon name="bookmark" fill={fill} stroke={stroke} />
      )}
    </button>
  );
};

export default BookmarkButton;
