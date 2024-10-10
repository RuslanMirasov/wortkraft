import { Icon } from '../../../components';
import css from './Button.module.scss';

const Button = ({ onClick, size, variant, full, disabled, loading, children, icon, dataJs }) => {
  const allButtonClasses = {
    [css.Button]: true,
    [css.Green]: variant === 'green',
    [css.Red]: variant === 'red',
    [css.Orange]: variant === 'orange',
    [css.White]: variant === 'white',
    [css.Small]: size === 'small',
    [css.Loading]: loading,
    [css.Full]: full,
  };

  const currentClasses = Object.keys(allButtonClasses)
    .filter(key => allButtonClasses[key])
    .join(' ');

  return (
    <button
      type={onClick ? 'button' : 'submit'}
      className={currentClasses}
      disabled={disabled}
      onClick={onClick}
      data-js={dataJs}
    >
      <span>{children}</span>
      {icon && (
        <div className={css.Icon}>
          <Icon name={icon} />
        </div>
      )}
    </button>
  );
};

export default Button;
