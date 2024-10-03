import { useState } from 'react';
import { Title, BookItem } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import css from './Books.module.scss';

const Books = ({ books }) => {
  const { isLogin, user } = useAuth();
  const [activeIndex, setActiveIndex] = useState(0);
  const locked = !isLogin || user.status === 'free';

  const handleSetActive = index => {
    setActiveIndex(index);
  };

  return (
    <div className={css.Books}>
      <Title tag="h1" size="h1">
        Wählen Sie ein Buch
      </Title>
      <ul>
        {books.map((book, index) => (
          <li key={book.slug} className={css.Book} style={{ background: book.color }}>
            <BookItem
              book={book}
              index={index}
              locked={index === 0 ? false : locked}
              active={activeIndex === index}
              onSetActive={() => handleSetActive(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
