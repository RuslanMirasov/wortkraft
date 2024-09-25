import { useRouter } from 'next/router';
import { Section } from '../../../components';

const LearnRoom = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Section>
      <h1>Word with ID: &quot;{id}&quot;</h1>
    </Section>
  );
};

export default LearnRoom;
