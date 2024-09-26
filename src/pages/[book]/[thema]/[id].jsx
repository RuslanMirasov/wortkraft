import { useRouter } from 'next/router';
import { Section, Title } from '../../../components';

const LearnRoom = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Section>
      <Title tag="h6" size="h6">
        Wort ID: {id}
      </Title>
      <hr />
      <Title tag="h1" size="h1">
        Übungsraum
      </Title>
    </Section>
  );
};

export default LearnRoom;
