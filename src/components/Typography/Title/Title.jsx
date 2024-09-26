import css from './Title.module.scss';

const Title = ({ tag, size, children }) => {
  const Tag = tag || 'b';
  const titleClasses = {
    [css.Title]: true,
    [css.H1]: size === 'h1',
    [css.H2]: size === 'h2',
    [css.H3]: size === 'h3',
    [css.H4]: size === 'h4',
    [css.H5]: size === 'h5',
    [css.H6]: size === 'h6',
  };
  return (
    <Tag
      className={Object.keys(titleClasses)
        .filter(key => titleClasses[key])
        .join(' ')}
    >
      {children}
    </Tag>
  );
};

export default Title;
