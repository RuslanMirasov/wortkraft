import Link from 'next/link';
import { Section } from '../components';

const NotFoundPage = () => {
  return (
    <Section>
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/">
        <p>Back to main</p>
      </Link>
    </Section>
  );
};

export default NotFoundPage;
