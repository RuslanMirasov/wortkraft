import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import { Header, Main, Footer, Popup, Section, Preloader, InfoBlock, Button } from '../../components';
import css from '../../components/PageNotFound/PageNotFound.module.scss';

const Layout = ({ booksLoading, error, children }) => {
  const { isLoading: userLoading } = useAuth();
  return (
    <>
      <Head>
        <title>WortKraft | Deutsch lernen app</title>
        <meta
          name="description"
          content="Web application for learning German words from current German textbooks in private and general education."
        />
      </Head>
      <Header />
      <Main>
        {booksLoading || userLoading ? (
          <Preloader />
        ) : error ? (
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
        ) : (
          children
        )}
      </Main>
      <Footer />
      <Popup />
    </>
  );
};

export default Layout;
