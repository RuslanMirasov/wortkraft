import { useRouter } from 'next/router';
import { Hero, Collection, Section, TitleBox, Title } from '../../components';

const BookPage = ({ books }) => {
  const router = useRouter();
  const { book: bookSlug } = router.query;
  const book = books.find(book => book.slug === bookSlug);

  if (!book) {
    if (typeof window !== 'undefined') {
      router.push('/404');
    }
    return null;
  }

  const bookContent = {
    ...book,
    words_count: book.words_count ? book.words_count.toString() : '0',
    learnt: 0,
  };

  return (
    <Section>
      <Hero content={bookContent} />
      <TitleBox margin={20}>
        <Title tag="h2" size="h2">
          {book.thems.length > 0 ? 'Wählen Sie ein Thema' : 'Kein Inhalt'}
        </Title>
      </TitleBox>
      <Collection collection={book?.thems} />
    </Section>
  );
};

export default BookPage;
