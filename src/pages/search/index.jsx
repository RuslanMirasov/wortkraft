import { useAuth } from '../../hooks/useAuth';
import { Section, Hero, SearchForm } from '../../components';

const SearchPage = () => {
  const { user } = useAuth();
  return (
    <Section>
      <Hero content={{ name: 'Suche', color: user?.color || 'var(--orange-color)' }} />
      <SearchForm />
    </Section>
  );
};

export default SearchPage;
