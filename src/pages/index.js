import { Collection, Section, TitleBox, Title } from '../components';

const HomePage = ({ books }) => {
  const title = ' Wählen Sie\n ein Buch';

  return (
    <Section>
      <TitleBox margin={20}>
        <Title tag="h1" size="h1">
          {title}
        </Title>
      </TitleBox>
      <Collection collection={books} />
    </Section>
  );
};

export default HomePage;
