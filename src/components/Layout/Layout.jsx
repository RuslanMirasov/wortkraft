import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <b>Logo</b>
        <nav>
          <ul>
            <li>
              <Link href="./">Books</Link>
            </li>
            <li>
              <Link href="./search">Search</Link>
            </li>
            <li>
              <Link href="./bookmarks">Bookmarks</Link>
            </li>
            <li>
              <Link href="./statistic">Statistic</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link href="./profile">Profile</Link>
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
