import { usePopup } from '../../hooks/usePopup';
import { Button, Icon, Section, Text, Title } from '../../components';
import css from './PageNotFound.module.scss';
import Link from 'next/link';

const PageNotFound = () => {
  const { popupOpen } = usePopup();
  return (
    <Section className={css.PageNotFound}>
      <div className={css.Info}>
        <Title tag="h1" size="h1">
          404
        </Title>
        <Text>
          Leider wurde nichts zu Ihrer Anfrage <br />
          gefunden, die Seite wurde wahrscheinlich verschoben oder gelöscht.
        </Text>
        <Link href="/">
          <Button>Zurück zu Startseite</Button>
        </Link>
      </div>
    </Section>
  );
};

export default PageNotFound;
