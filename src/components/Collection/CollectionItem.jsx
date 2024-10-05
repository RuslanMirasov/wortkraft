import Link from 'next/link';
import { useRouter } from 'next/router';
import { TitleBox, Title, UnlockPro, ImageWrapp, LinkButton, Counters, Procent } from '../../components';
import css from './Collection.module.scss';

const CollectionItem = ({ item, index, locked = false, active, onSetActive }) => {
  const router = useRouter();
  const { slug, name, subname, thumbnail, level, color, words_count, thems_count, learnt } = item;

  const handleOpen = e => {
    const book = e.target;
    if (book.tagName === 'A' || book.tagName === 'BUTTON') {
      return;
    }
    onSetActive();
  };

  const cleanedPath = router.asPath.endsWith('/') ? router.asPath.slice(0, -1) : router.asPath;

  return (
    <article className={active ? css.Active : ''} onClick={handleOpen}>
      {thumbnail && (
        <div className={css.Image}>
          <ImageWrapp src={thumbnail} alt={name} width="600" height="600" />
          <div
            className={css.Gradient}
            style={{ background: `linear-gradient(0deg, ${color} 0%, rgba(0,0,0,0) 95%)` }}
          ></div>
          {!locked && <Link href={`${cleanedPath}/${slug}`} />}
        </div>
      )}

      <div className={css.Content}>
        {level && (
          <header>
            <div className={css.Level}>
              <span style={{ background: color }}>{index + 1}</span>
              <p style={{ color: color }}>{level}</p>
            </div>
            {locked && <UnlockPro />}
          </header>
        )}

        <TitleBox>
          <Title tag="h2" size="h2">
            {name}
            <span>{subname}</span>
          </Title>
          {!locked && <Procent all={words_count} done={learnt} />}
        </TitleBox>

        <TitleBox>
          <Counters thems={thems_count} words={words_count} />
          <LinkButton href={`${cleanedPath}/${slug}`} locked={locked} />
        </TitleBox>
      </div>
    </article>
  );
};

export default CollectionItem;
