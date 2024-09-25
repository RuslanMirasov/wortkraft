import { useRouter } from 'next/router';
import { Section } from '../../../components';

const ThemaPage = () => {
  const router = useRouter();
  const { thema } = router.query;
  return (
    <Section>
      <h1>Thema &quot;{thema}&quot;</h1>
    </Section>
  );
};

export default ThemaPage;
