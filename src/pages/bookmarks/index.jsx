import fetcher from '../../utils/fatcher';
import useSWR from 'swr';
import { useAuth } from '../../hooks/useAuth';

import { Section, TitleBox, Title, PrivatePage, Hero, Preloader, Words } from '../../components';

const BookmarksPage = () => {
  const { user } = useAuth();

  const { data: bookmarks = [], isLoading } = useSWR(user ? `/api/bookmarks` : null, fetcher);
  if (!bookmarks || isLoading) return <Preloader />;

  const learnt = user ? user.progress.filter(wort => wort.points === 5) : [];
  const learntBookmarks = learnt.filter(word => bookmarks.some(bookmark => bookmark._id === word.id));

  const heroContent = {
    name: 'Meine\n eigene Liste',
    color: user?.color,
    words_count: bookmarks.length > 0 ? bookmarks.length.toString() : '0',
    learnt: learntBookmarks.length,
  };

  const wordsWithProgress = bookmarks.map(word => {
    const userProgress = user ? user.progress.find(progress => progress.id === word._id) : null;
    return userProgress ? { ...word, points: userProgress.points } : { ...word, points: 0 };
  });

  return (
    <PrivatePage>
      <Section>
        <Hero content={heroContent} />
        <TitleBox margin={20}>
          <Title tag="h2" size="h2">
            {heroContent.words_count > 0 ? 'Deine Lernfortschritte:' : 'Kein Inhalt'}
          </Title>
        </TitleBox>
        <Words words={wordsWithProgress} />
      </Section>
    </PrivatePage>
  );
};

export default BookmarksPage;
