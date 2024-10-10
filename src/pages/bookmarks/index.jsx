import fetcher from '../../utils/fatcher';
import getWordsWithProgress from '../../utils/getWordsWithProgress';
import useSWR from 'swr';
import { useAuth } from '../../hooks/useAuth';
import {
  Section,
  TitleBox,
  Title,
  PrivatePage,
  Hero,
  Preloader,
  Words,
  StickyBox,
  StartButton,
} from '../../components';

const BookmarksPage = () => {
  const { user } = useAuth();

  const { data: bookmarks = [], isLoading } = useSWR(user ? `/api/bookmarks` : null, fetcher);
  if (!bookmarks || isLoading) return <Preloader />;

  const learnt = user ? user.progress.filter(word => word.points === 5) : [];
  const learntBookmarks = learnt.filter(word => bookmarks.some(bookmark => bookmark._id === word.id));

  const heroContent = {
    name: 'Meine\n eigene Liste',
    color: user?.color,
    words_count: bookmarks.length > 0 ? bookmarks.length.toString() : '0',
    learnt: learntBookmarks.length,
  };

  const wordsWithProgress = getWordsWithProgress(user, bookmarks);

  return (
    <PrivatePage>
      <Section>
        <Hero content={heroContent} />
        {bookmarks.length > 0 ? (
          <>
            <StickyBox>
              <StartButton>Starten Sie</StartButton>
            </StickyBox>
            <TitleBox margin={20}>
              <Title tag="h2" size="h2">
                Deine Lernfortschritte:
              </Title>
            </TitleBox>
            <Words words={wordsWithProgress} />
          </>
        ) : (
          <TitleBox margin={20}>
            <Title tag="h2" size="h2">
              Es gibt keine Wörter
            </Title>
          </TitleBox>
        )}
      </Section>
    </PrivatePage>
  );
};

export default BookmarksPage;
