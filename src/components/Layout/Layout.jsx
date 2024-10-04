import Head from 'next/head';
import { Header, Main, Footer, Popup, Section, Preloader } from '../../components';

const Layout = ({ loading, error, children }) => {
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
        {loading ? (
          <Preloader />
        ) : error ? (
          <Section>
            <h1>ERROR</h1>
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
