import { Button, Section, InfoBlock } from '../components';
import css from '../components/PageNotFound/PageNotFound.module.scss';
import Link from 'next/link';

const ServerErrorPage = () => {
  return (
    <Section className={css.PageNotFound}>
      <InfoBlock
        name="500"
        title="Es tut uns leid"
        subtitle={`Es besteht keine Verbindung zum Server.\n Bitte versuchen Sie es später erneut.`}
      >
        <Link href="/">
          <Button size="small" full icon="arrow-right">
            Zurück zu Startseite
          </Button>
        </Link>
      </InfoBlock>
    </Section>
  );
};

export default ServerErrorPage;
