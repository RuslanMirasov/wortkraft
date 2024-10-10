import { Button, Section, InfoBlock } from '../../components';
import css from './PageNotFound.module.scss';
import Link from 'next/link';

const PageNotFound = () => {
  return (
    <Section className={css.PageNotFound}>
      <InfoBlock
        name="404"
        subtitle={`Leider wurde nichts zu Ihrer Anfrage\n gefunden, die Seite wurde wahrscheinlich verschoben oder gelöscht.`}
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

export default PageNotFound;
