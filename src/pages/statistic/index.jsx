import { useAuth } from '../../hooks/useAuth';
import { Section, PrivatePage, Hero, StatisticTable } from '../../components';

const StatisticPage = ({ books }) => {
  const { user } = useAuth();

  return (
    <PrivatePage>
      <Section>
        <Hero content={{ name: 'Statistik', color: user?.color }} />
        <StatisticTable progress={user?.progress} books={books} />
      </Section>
    </PrivatePage>
  );
};

export default StatisticPage;
