import Head from 'next/head';
import { Header, Main, Footer, Popup } from '../../components';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>WortKraft</title>
        <meta
          name="description"
          content="Web application for learning German words from current German textbooks in private and general education."
        />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <Popup />
    </>
  );
};

export default Layout;
