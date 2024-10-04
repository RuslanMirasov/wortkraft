import { useRouter } from 'next/router';
import { Icon } from '../../../components';
import css from './GoBack.module.scss';

const GoBack = () => {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.back()} className={css.GoBack}>
      <Icon name="next" />
    </button>
  );
};

export default GoBack;
