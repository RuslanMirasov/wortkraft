import css from './PageHeader.module.scss';
import { TitleBox, Title, GoBack } from '../../components';

const PageHeader = ({ content }) => {
  const { color, name, level, subname, words_count, learnt, image } = content;
  return (
    <div className={css.PageHeader}>
      <GoBack />
      <TitleBox margin="10">
        <Title tag="h1" size="h1">
          {name}
        </Title>
      </TitleBox>
    </div>
  );
};

export default PageHeader;
