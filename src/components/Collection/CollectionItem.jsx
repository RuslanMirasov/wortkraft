import Link from 'next/link';
import { Title, UnlockPro, ImageWrapp, LinkButton, Counters } from '../../components';
import css from './Collection.module.scss';

const CollectionItem = ({ item, index, locked = false, active, onSetActive }) => {
  const { slug, name, subname, thumbnail, level, color, words_count, thems_count } = item;

  const handleOpen = e => {
    const book = e.target;
    if (book.tagName === 'A' || book.tagName === 'BUTTON') {
      return;
    }
    onSetActive();
  };

  return (
    <article className={active ? css.Active : ''} onClick={handleOpen}>
      <div className={css.Image}>
        <ImageWrapp src={thumbnail} alt={name} width="600" height="600" />
        <div
          className={css.Gradient}
          style={{ background: `linear-gradient(0deg, ${color} 0%, rgba(0,0,0,0) 95%)` }}
        ></div>
        {!locked && <Link href={`/${slug}`} />}
      </div>
      <div className={css.Content}>
        <header>
          <div className={css.Level}>
            <span style={{ background: color }}>{index + 1}</span>
            <p style={{ color: color }}>{level}</p>
          </div>
          {locked && <UnlockPro />}
        </header>

        <div className={css.Title}>
          <Title tag="h2" size="h2">
            {name}
            <span>{subname}</span>
          </Title>
          {!locked && <span className={css.Procent}>0%</span>}
        </div>

        <div className={css.Buttons}>
          <Counters thems={thems_count || '0'} words={words_count || '0'} />
          <LinkButton href={`/${slug}`} locked={locked} />
        </div>
      </div>
    </article>
  );
};

export default CollectionItem;
