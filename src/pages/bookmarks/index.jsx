import { useAuth } from '../../hooks/useAuth';
import { Section, Title, PrivatePage, Hero } from '../../components';

const BookmarksPage = () => {
  const { user } = useAuth();

  const bookmarks = [];

  const heroContent = {
    name: 'Meine\n eigene Liste',
    color: user?.color,
    words_count: bookmarks.length > 0 ? bookmarks.length.toString() : '0',
    learnt: 0,
  };

  return (
    <PrivatePage>
      <Section>
        <Hero content={heroContent} />
        <Title tag="h2" size="h2">
          {heroContent.words_count > 0 ? 'Deine Lernfortschritte:' : 'Kein Inhalt'}
        </Title>
      </Section>
    </PrivatePage>
  );
};

export default BookmarksPage;
