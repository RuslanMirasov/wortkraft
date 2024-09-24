import Link from "next/link";
import Head from "next/head";

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
      <header>
        <b>Logo</b>
        <nav>
          <ul>
            <li>
              <Link href="/">Books</Link>
            </li>
            <li>
              <Link href="/search">Search</Link>
            </li>
            <li>
              <Link href="/bookmarks">Bookmarks</Link>
            </li>
            <li>
              <Link href="/statistic">Statistic</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link href="/profile">Profile</Link>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy;2024 WortKraft</p>
      </footer>
    </>
  );
};

export default Layout;
