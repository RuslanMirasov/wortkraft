import { Collection, Section, TitleBox, Title } from '../components';

const HomePage = ({ books }) => {
  return (
    <Section>
      <TitleBox margin={20}>
        <Title tag="h1" size="h1">
          Wählen Sie ein Buch
        </Title>
      </TitleBox>
      <Collection collection={books} />
    </Section>
  );
};

export default HomePage;
