import { useAuth } from '../../hooks/useAuth';
import { Section, Hero, SearchForm, Collection, TitleBox, Title } from '../../components';
import { useState } from 'react';

const SearchPage = ({ books }) => {
  const { user } = useAuth();
  const [filteredBooks, setFilteredBooks] = useState([]);

  const filterBooks = request => {
    const searchRegex = new RegExp(request, 'i');
    if (!request) {
      setFilteredBooks([]);
      return;
    }
    setFilteredBooks(books.filter(book => searchRegex.test(book.name) || searchRegex.test(book.subname)));
  };

  return (
    <Section>
      <Hero content={{ name: 'Suche', color: user?.color || 'var(--orange-color)' }} />
      <SearchForm filterBooks={filterBooks} />
      <TitleBox margin="20">
        <Title tag="h1" size="h2">
          {filteredBooks.length === 0 ? 'Keine' : filteredBooks.length}
          {filteredBooks.length === 1 ? ' Buch' : ' Bücher'} gefunden
        </Title>
      </TitleBox>
      <Collection collection={filteredBooks} />
    </Section>
  );
};

export default SearchPage;
