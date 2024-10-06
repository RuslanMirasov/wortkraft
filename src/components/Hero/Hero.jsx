import css from './Hero.module.scss';
import { TitleBox, Title, ImageWrapp, GoBack, Counters, Procent } from '../../components';

const Hero = ({ content, gap = 0 }) => {
  const { color, name, level, subname, words_count, learnt, image } = content;
  return (
    <article className={css.Hero} style={{ background: color, marginBottom: `${gap}px` }}>
      <header>
        <GoBack />
        {!words_count ? null : words_count === '0' ? '0%' : <Procent all={words_count} done={learnt} />}
      </header>
      <TitleBox margin="10">
        <Title tag="h1" size="h1">
          {name}
          {subname && <span>{subname}</span>}
        </Title>
      </TitleBox>
      {words_count && <Counters color={color} level={level} learnt={learnt} words={words_count} />}

      {image && (
        <div className={css.Thumbnail}>
          <ImageWrapp src={image} width="600" height="1200" alt={name} />
        </div>
      )}
    </article>
  );
};

export default Hero;
