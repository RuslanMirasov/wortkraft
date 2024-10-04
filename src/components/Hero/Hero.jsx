import css from './Hero.module.scss';
import { TitleBox, Title, ImageWrapp, GoBack, Counters, Procent } from '../../components';

const Hero = ({ content }) => {
  const { color, name, level, subname, words_count, image } = content;
  return (
    <article className={css.Hero} style={{ background: color }}>
      <header>
        <GoBack />
        <Procent all={words_count} done={10} />
      </header>
      <TitleBox margin="10">
        <Title tag="h1" size="h1">
          {name}
          {subname && <span>{subname}</span>}
        </Title>
      </TitleBox>
      {words_count && <Counters color={color} level={level} learnt={10} words={words_count} />}

      {image && (
        <div className={css.Thumbnail}>
          <ImageWrapp src={image} width="600" height="1200" alt={name} />
        </div>
      )}
    </article>
  );
};

export default Hero;
