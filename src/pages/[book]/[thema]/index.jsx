import { useRouter } from 'next/router';
import { Section, Title } from '../../../components';

const ThemaPage = () => {
  const router = useRouter();
  const { thema } = router.query;
  return (
    <Section>
      <Title tag="h6" size="h6">
        Thema: {thema}
      </Title>
      <hr />
      <Title tag="h1" size="h1">
        45 Wörter
      </Title>
    </Section>
  );
};

export default ThemaPage;
