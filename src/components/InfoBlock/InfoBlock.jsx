import { Title, Text } from '../../components';
import css from './InfoBlock.module.scss';

const InfoBlock = ({ name, title, subtitle, color = 'var(--text-color)', children }) => {
  return (
    <div className={css.InfoBlock}>
      <img src={`/img/${name}.svg`} alt="wort kraft" />
      <Title tag="h2" size="h1">
        <span style={{ color: color }}>{title}</span>
      </Title>
      <Text>{subtitle}</Text>
      {children}
    </div>
  );
};

export default InfoBlock;
