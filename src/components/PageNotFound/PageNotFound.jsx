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
          4<Icon name="search" stroke="var(--grey-color)" size="50" />4
        </Title>
        <Text size="small">
          Leider wurde nichts zu Ihrer Anfrage <br />
          gefunden, die Seite wurde wahrscheinlich verschoben oder gelöscht.
        </Text>
        <Link href="/">
          <Button size="small" icon="arrow-right">
            Zurück zu Startseite
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default PageNotFound;
