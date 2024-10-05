import { useAuth } from '../../hooks/useAuth';
import { Section, PrivatePage, Hero } from '../../components';

const StatisticPage = () => {
  const { user } = useAuth();

  return (
    <PrivatePage>
      <Section>
        <Hero content={{ name: 'Meine Statistik', color: user?.color }} />
      </Section>
    </PrivatePage>
  );
};

export default StatisticPage;
