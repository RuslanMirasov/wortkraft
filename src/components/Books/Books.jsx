import { Title, BookItem } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import css from './Books.module.scss';

const Books = ({ books }) => {
  const auth = useAuth();
  console.log(auth);
  return (
    <div className={css.Books}>
      <Title tag="h1" size="h1">
        Wählen Sie ein Buch
      </Title>
      <ul>
        {books.map((book, index) => (
          <li key={book.slug} className={css.Book} style={{ background: book.color }}>
            <BookItem book={book} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
