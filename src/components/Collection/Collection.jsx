import { useState } from 'react';
import { CollectionItem } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import css from './Collection.module.scss';

const Collection = ({ collection }) => {
  const { isLogin, user } = useAuth();
  const [activeIndex, setActiveIndex] = useState(0);
  const locked = !isLogin || user.status === 'free';

  const handleSetActive = index => {
    setActiveIndex(index);
  };

  return (
    <ul className={css.Collection}>
      {collection.map((item, index) => {
        const doneThems = user?.progress?.filter(word => word.theme === item.slug && word.points === 5).length || 0;
        const doneBooks = user?.progress?.filter(word => word.book === item.slug && word.points === 5).length || 0;

        const sum = doneThems > 0 ? doneThems : doneBooks;

        return (
          <li key={item.slug} className={css.CollectionItem} style={{ background: item.color }}>
            <CollectionItem
              item={{ ...item, learnt: sum }}
              index={index}
              locked={index === 0 ? false : locked}
              active={activeIndex === index}
              onSetActive={() => handleSetActive(index)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Collection;
