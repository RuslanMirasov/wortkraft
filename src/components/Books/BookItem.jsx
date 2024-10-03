import { Title, UnlockPro, ImageWrapp, LinkButton } from '../../components';
import css from './Books.module.scss';

const BookItem = ({ book, index, locked = false }) => {
  const { slug, name, subname, thumbnail, level, color, words_count, thems_count } = book;
  return (
    <article>
      <div className={css.BookImage}>
        <ImageWrapp src={thumbnail} alt={name} width="400" height="600" />
        <div
          className={css.Gradient}
          style={{ background: `linear-gradient(0deg, ${color} 0%, rgba(0,0,0,0) 95%)` }}
        ></div>
      </div>
      <div className={css.BookContent}>
        <header>
          <div className={css.Level}>
            <span style={{ background: color }}>{index + 1}</span>
            <p style={{ color: color }}>{level}</p>
          </div>
          {locked && <UnlockPro />}
        </header>

        <div className={css.BookTitle}>
          <Title tag="h2" size="h2">
            {name}
            <span>{subname}</span>
          </Title>
          {!locked && <span className={css.Procent}>0%</span>}
        </div>

        <div className={css.Buttons}>
          <ul className={css.Statistic}>
            <li>{thems_count} Themen</li>
            <li>{words_count} Wörter</li>
          </ul>

          <LinkButton href={`/${slug}`} locked={locked} />
        </div>
      </div>
    </article>
  );
};

export default BookItem;
